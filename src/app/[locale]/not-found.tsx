import { useTranslations } from "next-intl";
import PageLayout from "@/components/Layout/PageLayout";
import { Link } from "@/i18n/routing";
import { Container, Box, Button } from "@mui/material";

export default function NotFoundPage() {
    const t = useTranslations("NotFoundPage");
    return (
        <PageLayout>
            <Container maxWidth="xl" sx={{ height: "calc(100% - 70px)" }}>
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}>
                    <h1>{t("title")}</h1>
                    <Link href="/">
                        <Button
                            variant="outlined"
                            sx={{
                                mt: 2,
                                textTransform: "none",
                            }}>
                            {t("goBackButton")}
                        </Button>
                    </Link>
                </Box>
            </Container>
        </PageLayout>
    );
}
