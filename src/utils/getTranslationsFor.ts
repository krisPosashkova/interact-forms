import {getTranslations} from 'next-intl/server';

export async function getTranslationsFor(...namespaces: string[]) {
    const translations: Record<string, Awaited<ReturnType<typeof getTranslations>>> = {};

    for (const namespace of namespaces) {
        translations[namespace.toLowerCase()] = await getTranslations(namespace);
    }

    return translations;
};