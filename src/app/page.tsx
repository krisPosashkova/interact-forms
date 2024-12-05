import { redirect, routing } from "@/i18n/routing";

export default function RootPage() {
    redirect({
        href: "/",
        locale: routing.defaultLocale,
    });
}
