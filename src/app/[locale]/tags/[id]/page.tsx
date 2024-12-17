import PageLayout from "@/components/Layout/PageLayout";
import Banner from "@/components/Banner/Banner";
import { Container } from "@mui/material";
import TemplatesList from "@/components/Templates/List";
import {ITemplate} from "@/types/templates/template.types";
import {mokTemplates} from "@/mocks/mockTemplates";

type Props = {
    params: Promise<{ id: string }>;
};
export default async function TagsPage({ params }: Props) {

    const { id } = await params;
    const templates: { name: string; data: ITemplate[] }[] = [
        {
            name: `${id}`,
            data: mokTemplates,
        },
    ];
    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Banner />
                <TemplatesList templates={templates} />
            </Container>
        </PageLayout>
    );
}
