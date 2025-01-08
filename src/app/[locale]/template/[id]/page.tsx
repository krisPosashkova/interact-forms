"use server";

import PageLayout from "@/components/Layout/PageLayout";
import { Container, Typography } from "@mui/material";
import {getTemplateById} from "@/app/actions/templates";
import {ITemplate} from "@/types/api/template.types";
type Props = {
    params: Promise<{ id: string }>;
};
export default async function TemplatePage({ params }: Props) {
    const { id } = await params;

    const templateData = await getTemplateById(+id);
    const template: ITemplate | null = templateData.success ? templateData.data : null;

    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Typography variant={"h6"} component={"h1"}>{template?.title}</Typography>
                <Typography>{template?.description}</Typography>
                <Typography>{template?.user.username}</Typography>
            </Container>
        </PageLayout>
    );
}
