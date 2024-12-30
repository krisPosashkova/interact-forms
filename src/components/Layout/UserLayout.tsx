import React, { ReactNode } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import type { Session } from "next-auth";

import { getTranslations } from "next-intl/server";
import { DashboardTranslations } from "@/types/dashboard/dashboard.types";

type Props = {
    children?: ReactNode;
    session: Session | null
};

export default async function UserLayout({ children, session }: Props) {
    const t = await getTranslations("Dashboard");

    const translations: DashboardTranslations = {
        title: t("profile"),
        name: t("name"),
        email: t("email"),
        role: t("role")
    };
    return (
        <DashboardLayout menuKey={"user"} session={session} translations={translations}>

            {children}

        </DashboardLayout>
    );
}
