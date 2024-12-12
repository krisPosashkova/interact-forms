import Banner from "@/components/Banner/Banner";
import PageLayout from "@/components/Layout/PageLayout";

import { Container } from "@mui/material";
export default function Home() {
    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Banner />
            </Container>
        </PageLayout>
    );
}
