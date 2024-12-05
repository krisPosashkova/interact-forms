import PageLayout from "@/components/Layout/PageLayout";

import { Container, Typography } from "@mui/material";
export default function Home() {
    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Typography component="h1" variant="h1">
                    Interact Forms
                </Typography>
            </Container>
        </PageLayout>
    );
}
