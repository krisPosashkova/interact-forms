import Banner from "@/components/Banner/Banner";
import PageLayout from "@/components/Layout/PageLayout";
import SearchComponent from "@/components/UI/Search/Search";

import { Container } from "@mui/material";
export default function Home() {
    return (
        <PageLayout>
            <Container maxWidth="xl">
                <SearchComponent />
                <Banner />
            </Container>
        </PageLayout>
    );
}
