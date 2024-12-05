import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export type SupportedLocales = "en" | "ru";

export const routing = defineRouting<SupportedLocales[]>({
    locales: ["en", "ru"],
    defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
