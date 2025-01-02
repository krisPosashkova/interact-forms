"use server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function getTranslationsFor(...namespaces: string[]) {
    const translations: Record<string, Awaited<ReturnType<typeof getTranslations>>> = {};

    for (const namespace of namespaces) {
        try {
            translations[namespace.toLowerCase()] = await getTranslations({
                locale: routing.defaultLocale,
                namespace
            });
        } catch (error) {
            console.warn(`Failed to load translations for namespace ${namespace}, using default locale`, error);

            translations[namespace.toLowerCase()] = await getTranslations({
                locale: "en",
                namespace
            });
        }
    }

    return translations;
}