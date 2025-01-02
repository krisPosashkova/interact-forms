"use server";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

import PageLayout from "@/components/Layout/PageLayout";
import Banner from "@/components/Banner/Banner";
import { Container } from "@mui/material";
import TemplatesList from "@/components/Templates/List";
import { ITemplateMock } from "@/types/api/template.types";
import { mokTemplates } from "@/mocks/mockTemplates";


type Props = {
    params: Promise<{ id: string }>;
};

export default async function TagsPage({ params }: Props) {
    const session: Session | null = await auth();
    const { id } = await params;
    const templates: { name: string; data: ITemplateMock[] }[] = [
        {
            name: `${id}`,
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
