/**
 * Lead storage — Upstash Redis with in-memory fallback.
 */

type Lead = {
  email: string;
  sources: string[];
  tags: string[];
  profile?: Record<string, string>;
  captured_at: string;
  unsubscribed?: boolean;
};

// In-memory fallback when Upstash is not configured
const memoryStore = new Map<string, Lead>();

function hashEmail(email: string): string {
  let h = 0;
  for (let i = 0; i < email.length; i++) { h = ((h << 5) - h) + email.charCodeAt(i); h |= 0; }
  return 'mbs:lead:' + Math.abs(h).toString(36);
}

async function getRedisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

async function redisGet(key: string): Promise<Lead | null> {
  const client = await getRedisClient();
  if (!client) return memoryStore.get(key) || null;
  try {
    const res = await fetch(`${client.url}/get/${key}`, { headers: { Authorization: `Bearer ${client.token}` } });
    const data = await res.json();
    return data.result ? JSON.parse(data.result) : null;
  } catch { return memoryStore.get(key) || null; }
}

async function redisSet(key: string, value: Lead): Promise<void> {
  memoryStore.set(key, value);
  const client = await getRedisClient();
  if (!client) { console.warn('[leads] Upstash not configured — using memory store'); return; }
  try {
    await fetch(`${client.url}/set/${key}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${client.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(JSON.stringify(value)),
    });
  } catch (e) { console.error('[leads] Redis set error:', e); }
}

export async function captureLead(email: string, source: string, profile?: Record<string, string>): Promise<void> {
  const key = hashEmail(email.toLowerCase().trim());
  const existing = await redisGet(key);

  if (existing) {
    if (!existing.sources.includes(source)) existing.sources.push(source);
    if (!existing.tags.includes(source)) existing.tags.push(source);
    if (profile) existing.profile = { ...existing.profile, ...profile };
    await redisSet(key, existing);
  } else {
    await redisSet(key, {
      email: email.toLowerCase().trim(),
      sources: [source],
      tags: [source],
      profile,
      captured_at: new Date().toISOString(),
    });
  }
}

export async function unsubscribeLead(email: string): Promise<void> {
  const key = hashEmail(email.toLowerCase().trim());
  const existing = await redisGet(key);
  if (existing) {
    existing.unsubscribed = true;
    await redisSet(key, existing);
  }
}

export async function isUnsubscribed(email: string): Promise<boolean> {
  const key = hashEmail(email.toLowerCase().trim());
  const existing = await redisGet(key);
  return existing?.unsubscribed === true;
}
