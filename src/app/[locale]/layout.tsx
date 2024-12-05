import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import BaseLayout from "@/components/Layout/BaseLayout";
import { routing, SupportedLocales } from "@/i18n/routing";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: SupportedLocales }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//     params: { locale },
// }: Omit<Props, "children">) {
//     const t = await getTranslations({ locale, namespace: "LocaleLayout" });

//     return {
//         title: t("title"),
//     };
// }

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
