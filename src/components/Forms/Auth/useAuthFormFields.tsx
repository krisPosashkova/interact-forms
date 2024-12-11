import * as z from "zod";
import { useTranslations } from "next-intl";

export const useAuthFormFields = () => {
    const t = useTranslations("AuthForm");

    const signInFields = [
        {
            name: "email",
            label: t("email.label"),
            type: "email",
            validation: z.string().min(1, t("email.validation.required")),
        },
        {
            name: "password",
            label: t("password.label"),
            type: "password",
            validation: z.string().min(1, t("password.validation.required")),
        },
    ];

    const signUpFields = [
        {
            name: "name",
            label: t("name.label"),
            type: "text",
            validation: z.string().min(1, t("name.validation.required")),
        },
        {
            name: "email",
            label: t("email.label"),
            type: "email",
            validation: z.string().email(t("email.validation.invalid")),
        },
        {
            name: "password",
            label: t("password.label"),
            type: "password",
            validation: z.string().min(6, t("password.validation.minLength")),
        },
    ];

    return { signInFields, signUpFields };
};
