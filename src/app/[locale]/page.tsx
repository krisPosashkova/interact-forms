import Banner from "@/components/Banner/Banner";
import PageLayout from "@/components/Layout/PageLayout";
import TemplatesList from "@/components/Templates/List";
import {useTranslations} from "next-intl";
import { Container } from "@mui/material";
import {mokTemplates} from "@/mocks/mockTemplates";
import {ITemplate} from "@/types/templates/template.types";
export default function Home() {
    const t = useTranslations("Homepage");

    const templates: { name: string; data: ITemplate[] }[] = [
        {
            name: t("popularTemplates"),
            data: mokTemplates,
        },
        {
            name: t("latestTemplates"),
            data: mokTemplates,
        },
        {
            name: t("allTemplates"),
            data: mokTemplates,
        },
    ];

    return (
        <PageLayout>
            <Container maxWidth="xl">
                <Banner />
                <TemplatesList templates={templates}/>
            </Container>
        </PageLayout>
    );
}
