import PageLayout from "@/components/Layout/PageLayout";
import Banner from "@/components/Banner/Banner";

import { Container, Typography } from "@mui/material";
import TemplatesList from "@/components/TemplatesList";

type Props = {
    params: Promise<{ id: string }>;
};
export default async function TagsPage({ params }: Props) {
    const { id } = await params;
    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Banner />
                <TemplatesList />
                <Typography>Tags {id}</Typography>
            </Container>
        </PageLayout>
    );
}
