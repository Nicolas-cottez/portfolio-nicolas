import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/site";

function detectLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0].slice(0, 2).toLowerCase());

  return preferred.find((lang) => (LOCALES as readonly string[]).includes(lang)) ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Only intercept the bare root — everything else (assets, PDFs, /en, /fr) passes through untouched.
  matcher: ["/"],
};
