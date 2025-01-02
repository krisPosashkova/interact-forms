"use server";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

import Banner from "@/components/Banner/Banner";
import PageLayout from "@/components/Layout/PageLayout";
import TemplatesList from "@/components/Templates/List";

import { Container } from "@mui/material";
import { ITemplate } from "@/types/api/template.types";
import { getTranslations } from "next-intl/server";
import { getAllTags } from "@/app/actions/tags";
import { ITag } from "@/types/api/tag.types";
import { getTemplatesForUserOrAdmin } from "@/app/actions/templates";

export default async function Home() {
    const t = await getTranslations("Homepage");
    const session: Session | null = await auth();
    const tagsData = await getAllTags();
    const tags: ITag[] | null = tagsData.success ? tagsData.data : null;

    const templatesData = await getTemplatesForUserOrAdmin(session);
    const templates: ITemplate[] | null = templatesData.success ? templatesData.data : null;


    const templatesGroup: { name: string; data: ITemplate[] | null }[] = [
        // {
        //     name: t("popularTemplates"),
        //     data: templates
        // },
        // {
        //     name: t("latestTemplates"),
        //     data: templates
        // },
        {
            name: t("allTemplates"),
            data: templates
        }
    ];

    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Banner session={session} />
                <TemplatesList tags={tags} templates={templatesGroup} />
            </Container>
        </PageLayout>
    );
}
