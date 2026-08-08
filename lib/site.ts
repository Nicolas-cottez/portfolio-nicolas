export const SITE_URL = "https://nicolascottez.vercel.app";

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

// Display order for the language switcher (FR | EN). Kept separate from LOCALES,
// which generateStaticParams()/proxy.ts depend on and must not be reordered.
export const LOCALE_ORDER: readonly Locale[] = ["fr", "en"];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function resumeHref(lang: Locale): string {
  return `/Nicolas-Cottez-Abrate-CV-${lang.toUpperCase()}.pdf`;
}
