import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing, SupportedLocales } from "@/i18n/routing";
import { auth } from "@/lib/auth";

const intlMiddleware = createMiddleware(routing);
const supportedLocales = routing.locales;

const protectedRoutes = [
    "user",
    "admin"
];

const adminRoutes = [
    "admin"
];

const checkRoutes = (locale: SupportedLocales, route: string, arr: string[]) => {
    return supportedLocales.includes(locale) &&
        arr.includes(route);
};

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const response = intlMiddleware(request);

    const pathParts = pathname.split("/").filter(Boolean);
    const locale = pathParts[0];
    const route = pathParts[1];

    console.log(route);

    const isProtectedRoute = checkRoutes(locale as SupportedLocales, route, protectedRoutes);
    const isAdminRoute = checkRoutes(locale as SupportedLocales, route, adminRoutes);
    const isUserRoute = route === "user";

    if (isProtectedRoute || isAdminRoute) {
        const session = await auth();

        if (!session) {
            return NextResponse.redirect(
                new URL(`/${locale}/signin`, request.url)
            );
        }

        if (isAdminRoute && session.user?.role !== "admin") {
            return NextResponse.redirect(
                new URL(`/${locale}`, request.url)
            );
        }

        if (isUserRoute && session.user?.role === "admin") {
            return NextResponse.redirect(
                new URL(`/${locale}/admin/dashboard`, request.url)
            );
        }

    }

    return response;
}

export const config = {
    matcher: [
        "/((?!api|_next|_vercel|.*\\..*).*)",
        "/(ru|en)/admin/:path*",
        "/(ru|en)/user/:path*",
        "/",
        "/(ru|en)/:path*"
    ]
};
