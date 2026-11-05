// Mise en conformité ponctuelle des fiches existantes (05/11/2026) :
// - fiches sans expiration -> expiration à captured_at + 3 ans
// - fiches désinscrites -> adresse et profil effacés (marque anonyme sans expiration)
// Usage : UPSTASH_REDIS_REST_URL=... UPSTASH_REDIS_REST_TOKEN=... node scripts/leads-retention-backfill.mjs [--dry]
const url = process.env.UPSTASH_REDIS_REST_URL, token = process.env.UPSTASH_REDIS_REST_TOKEN;
if (!url || !token) { console.error('UPSTASH_REDIS_REST_URL / TOKEN manquants'); process.exit(1); }
const dry = process.argv.includes('--dry');
const cmd = async (...args) => (await (await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify(args) })).json()).result;
const TTL = 3 * 365 * 24 * 3600;
let cursor = '0', n = 0, ttlSet = 0, anon = 0;
do {
  const [next, keys] = await cmd('SCAN', cursor, 'MATCH', 'mbs:lead:*', 'COUNT', '200');
  cursor = next;
  for (const k of keys) {
    n++;
    let lead; try { lead = JSON.parse(await cmd('GET', k)); if (typeof lead === 'string') lead = JSON.parse(lead); } catch { continue; }
    if (lead?.unsubscribed && lead.email) {
      anon++; if (!dry) { await cmd('SET', k, JSON.stringify({ email: '', sources: [], tags: [], captured_at: new Date().toISOString(), unsubscribed: true })); }
      continue;
    }
    if (lead?.unsubscribed) continue;
    if ((await cmd('TTL', k)) === -1) {
      const start = Date.parse(lead?.captured_at) || Date.now();
      const left = Math.max(60, Math.round((start + TTL * 1000 - Date.now()) / 1000));
      ttlSet++; if (!dry) await cmd('EXPIRE', k, String(left));
    }
  }
} while (cursor !== '0');
console.log(`${n} fiches, ${ttlSet} expirations posées, ${anon} désinscrites anonymisées${dry ? ' (simulation)' : ''}`);
