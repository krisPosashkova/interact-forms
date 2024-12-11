import { useTranslations } from "next-intl";

export const useAuthProps = (formKey: string) => {
    const t = useTranslations(formKey);

    const props = {
        layout: {
            prompt: t("prompt"),
            linkText: t("link.text"),
            linkHref: t("link.href"),
        },
        form: {
            title: t("title"),
            description: t("description"),
        },
    };

    return props;
};
