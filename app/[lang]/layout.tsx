import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { LOCALES, SITE_URL, isLocale, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// Anything outside /en and /fr 404s instead of being rendered on-demand.
export const dynamicParams = false;

const titles: Record<Locale, string> = {
  en: "Nicolas Cottez-Abrate — Data & AI Engineering Student",
  fr: "Nicolas Cottez-Abrate — Étudiant Ingénieur Data & IA",
};

const descriptions: Record<Locale, string> = {
  en: "Final-year Data & AI engineering student (ECE) seeking a 6-month internship from January 2027 — local AI, RAG and data projects.",
  fr: "Étudiant ingénieur en dernière année Data & IA (ECE), à la recherche d'un stage de fin d'études de 6 mois à partir de janvier 2027 — projets IA locale, RAG et data.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";

  return {
    metadataBase: new URL(SITE_URL),
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body className="bg-[#070b12] text-white overflow-x-hidden">
        <LanguageProvider language={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
