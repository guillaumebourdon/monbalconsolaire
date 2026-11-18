/**
 * Mise en avant Black Friday 2026 (bannière du site, encadré de l'accueil, liens internes).
 * Tout disparaît seul après BF_PROMO_ENDS_AT (date de Paris), sans nouveau déploiement :
 * les composants de `components/ui/BlackFriday.tsx` revérifient la date dans le navigateur.
 */
export const BF_ARTICLE_PATH = '/blog/black-friday-kit-solaire-2026';
export const BF_ARTICLE_URL = `https://monbalconsolaire.fr${BF_ARTICLE_PATH}`;

/** Dernier jour d'affichage de la bannière et de l'encadré (inclus), au format AAAA-MM-JJ. */
export const BF_PROMO_ENDS_AT = '2026-12-01';

/** Dates 2026 (lendemain de Thanksgiving, jeudi 26 novembre). */
export const BLACK_FRIDAY_2026 = '2026-11-27';
export const CYBER_MONDAY_2026 = '2026-11-30';

/** Date du jour à Paris au format AAAA-MM-JJ (comparable lexicographiquement). */
export function todayParis(): string {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date());
}

/** Vrai tant que la date `endsAt` (incluse) n'est pas dépassée à Paris. */
export function isActiveUntil(endsAt: string): boolean {
  return todayParis() <= endsAt;
}

export const isBlackFridayPromoActive = () => isActiveUntil(BF_PROMO_ENDS_AT);
