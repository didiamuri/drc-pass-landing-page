import Negotiator from "negotiator";
import { MiddlewareFactory } from "./types";
import { i18n } from "@/i18n/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const locales = [...i18n.locales];
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

    return matchLocale(languages, locales, i18n.defaultLocale)
}

const PUBLIC_FILE = /\.(.*)$/;

export const locales: MiddlewareFactory = (next: NextMiddleware) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {

        const pathname = request.nextUrl.pathname

        if (PUBLIC_FILE.test(pathname)) {
            return next(request, _next);
        }

        const search = request.nextUrl.search
        const locale = getLocale(request) ?? i18n.defaultLocale;

        const localeIsInPath = i18n.locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

        if (!localeIsInPath) {
            const newPathname = `/${locale}${pathname}`;
            const redirectUrl = new URL(newPathname + search, request.url);
            return NextResponse.redirect(redirectUrl);
        }

        return next(request, _next);
    }
}