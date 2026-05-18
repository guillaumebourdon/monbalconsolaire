/**
 * Email infrastructure — Brevo (ex-Sendinblue) transactional API.
 * Fallback: queues locally if BREVO_API_KEY is missing.
 */

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const SENDER = { name: 'Guillaume \u2014 MonBalconSolaire', email: 'hello@monbalconsolaire.fr' };

// In-memory queue for when Brevo is unavailable
const emailQueue: Array<{ to: string; subject: string; html: string; text: string; tags: string[]; attachments?: Array<{ name: string; content: string }> }> = [];

type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
  text: string;
  tags?: string[];
  attachments?: Array<{ name: string; content: string }>; // base64
};

export async function sendEmail(params: SendEmailParams): Promise<{ success: boolean; queued?: boolean }> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.warn('[email] BREVO_API_KEY not set — queuing email for later');
    emailQueue.push({ to: params.to, subject: params.subject, html: params.html, text: params.text, tags: params.tags || [], attachments: params.attachments });
    return { success: true, queued: true };
  }

  const body: Record<string, unknown> = {
    sender: SENDER,
    to: [{ email: params.to }],
    subject: params.subject,
    htmlContent: params.html,
    textContent: params.text,
    tags: params.tags || [],
  };

  if (params.attachments && params.attachments.length > 0) {
    body.attachment = params.attachments.map(a => ({ name: a.name, content: a.content }));
  }

  try {
    const res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: { 'accept': 'application/json', 'content-type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[email] Brevo error:', res.status, err);
      emailQueue.push({ to: params.to, subject: params.subject, html: params.html, text: params.text, tags: params.tags || [] });
      return { success: true, queued: true };
    }

    return { success: true };
  } catch (error) {
    console.error('[email] Brevo network error:', error);
    emailQueue.push({ to: params.to, subject: params.subject, html: params.html, text: params.text, tags: params.tags || [] });
    return { success: true, queued: true };
  }
}

export function getEmailQueue() { return [...emailQueue]; }
export function clearEmailQueue() { emailQueue.length = 0; }

// ─── Unsubscribe token ───────────────────────────────────
const SECRET = process.env.UNSUBSCRIBE_SECRET || 'mbs-unsub-2026';

export function generateUnsubToken(email: string): string {
  // Simple hash — not cryptographic but sufficient for unsubscribe links
  let hash = 0;
  const str = email + SECRET;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

export function verifyUnsubToken(email: string, token: string): boolean {
  return generateUnsubToken(email) === token;
}

export function getUnsubscribeUrl(email: string): string {
  const token = generateUnsubToken(email);
  return `https://monbalconsolaire.fr/api/email/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;
}
