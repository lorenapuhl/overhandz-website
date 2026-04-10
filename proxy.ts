// proxy.ts — locale detection and routing
//
// Reads the Accept-Language header and redirects to /en or /fr if the
// incoming request has no locale prefix.
// Also sets the x-locale header so the root layout can set <html lang="">.

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const LOCALES = ["en", "fr"] as const
const DEFAULT_LOCALE = "en"

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") ?? ""
  // Simple detection: prefer French if any fr variant is listed first
  const preferred = acceptLang.split(",")[0]?.trim().toLowerCase() ?? ""
  if (preferred.startsWith("fr")) return "fr"
  return DEFAULT_LOCALE
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a supported locale prefix
  const pathnameHasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // Pass through — add x-locale header for the root layout
    const locale = LOCALES.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    ) ?? DEFAULT_LOCALE
    const response = NextResponse.next()
    response.headers.set("x-locale", locale)
    return response
  }

  // No locale prefix — detect preferred locale and redirect
  const locale = getLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Skip _next internals, static assets, and image optimization
    "/((?!_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
