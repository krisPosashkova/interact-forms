import PageLayout from "@/components/Layout/PageLayout";

import { Box, Container, Typography } from "@mui/material";
import { auth } from "@/lib/auth";

export default async function UserProfilePage() {
    const session = await auth();
    console.log(session, "session user page");

    return (
        <PageLayout>
            <Container maxWidth="xl">

                {session &&
                  <Box>
                    <Typography variant={"h6"} component={"h1"}>User Profile</Typography>
                    <Typography>Name: {session.user.name}</Typography>
                    <Typography>Email: {session.user.email}</Typography>
                    <Typography>Role: {session.user.role}</Typography>
                  </Box>
                }

            </Container>
        </PageLayout>
    );
}
