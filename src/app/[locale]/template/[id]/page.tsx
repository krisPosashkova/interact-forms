import PageLayout from "@/components/Layout/PageLayout";

import { Container, Typography } from "@mui/material";
type Props = {
    params: Promise<{ id: string }>;
};
export default async function TemplatePage({ params }: Props) {
    const { id } = await params;
    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Typography>{id}</Typography>
            </Container>
        </PageLayout>
    );
}
