import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales: string[] = ["en", "ja"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  const headers = {
    "accept-language": request.headers.get("accept-language")?.toString(),
  };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  let { pathname } = request.nextUrl;
  pathname = pathname === "/" ? "/home" : pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
