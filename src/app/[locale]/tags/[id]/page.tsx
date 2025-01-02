"use server";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

import PageLayout from "@/components/Layout/PageLayout";
import Banner from "@/components/Banner/Banner";
import { Container } from "@mui/material";
import TemplatesList from "@/components/Templates/List";
import { ITemplate, ITemplateWithoutTags } from "@/types/api/template.types";
import { getAllTags } from "@/app/actions/tags";
import { ITag } from "@/types/api/tag.types";
import { getTemplatesByTagId } from "@/app/actions/templates";


type Props = {
    params: Promise<{ id: string }>;
};

export default async function TagsPage({ params }: Props) {
    const session: Session | null = await auth();
    const { id } = await params;
    const tagsData = await getAllTags();
    const tags: ITag[] | null = tagsData.success ? tagsData.data : null;

    const templatesData = await getTemplatesByTagId(+id, session);
    const result: {
        tag: ITag | null,
        templates: ITemplateWithoutTags[] | ITemplate[] | null
    } | null = templatesData.success ? templatesData.data : null;

    const templates = result?.templates ? result?.templates : null;
    const tagName = result?.tag ? result.tag.name : id;


    const templatesGroup: { name: string; data: ITemplate[] | ITemplateWithoutTags[] | null }[] = [
        {
            name: `${tagName}`,
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
