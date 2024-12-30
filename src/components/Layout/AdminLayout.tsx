import React, { ReactNode } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import type { Session } from "next-auth";

import { getTranslations } from "next-intl/server";
import { DashboardTranslations } from "@/types/dashboard/dashboard.types";

type Props = {
    children?: ReactNode;
    session: Session | null
};

export default async function AdminLayout({ children, session }: Props) {
    const t = await getTranslations("Dashboard");

    const translations: DashboardTranslations = {
        title: t("adminDashboard"),
        name: t("name"),
        email: t("email"),
        role: t("role")
    };
    return (
        <DashboardLayout menuKey={"admin"} session={session} translations={translations}>
            {children}
        </DashboardLayout>
    );
}
