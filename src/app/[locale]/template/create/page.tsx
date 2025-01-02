"use server";
// import { auth } from "@/lib/auth";
// import { Session } from "next-auth";

import PageLayout from "@/components/Layout/PageLayout";


import { Container, Typography } from "@mui/material";
// import { getTranslations } from "next-intl/server";

export default async function CreateTemplatesPage() {
    // const t = await getTranslations();
    // const session: Session | null = await auth();
    //

    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Typography component={"h1"} variant={"h6"}>Create Templates</Typography>
            </Container>
        </PageLayout>
    );
}
