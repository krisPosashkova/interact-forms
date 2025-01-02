"use server";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

import Banner from "@/components/Banner/Banner";
import PageLayout from "@/components/Layout/PageLayout";
import TemplatesList from "@/components/Templates/List";

import { Container } from "@mui/material";
import { mokTemplates } from "@/mocks/mockTemplates";
import { ITemplateMock } from "@/types/api/template.types";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const t = await getTranslations("Homepage");
    const session: Session | null = await auth();

    const templates: { name: string; data: ITemplateMock[] }[] = [
        {
            name: t("popularTemplates"),
            data: mokTemplates
        },
        {
            name: t("latestTemplates"),
            data: mokTemplates
        },
        {
            name: t("allTemplates"),
            data: mokTemplates
        }
    ];

    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Banner session={session} />
                <TemplatesList templates={templates} />
            </Container>
        </PageLayout>
    );
}
