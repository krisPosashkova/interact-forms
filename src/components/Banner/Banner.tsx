"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "@/i18n/routing";
import { bannerStyles } from "./banner.styled";
import { useTranslations } from "next-intl";

const Banner = () => {
    const t = useTranslations("Homepage");

    return (
        <Box sx={bannerStyles.root}>
            <Container maxWidth="md">
                <Typography variant="h6" component="h1" sx={bannerStyles.title}>
                    {t("title")}
                </Typography>
                <Typography sx={bannerStyles.content}>
                    {t("content")}
                </Typography>
                <Box sx={bannerStyles.buttonContainer}>
                    <Button
                        variant="contained"
                        LinkComponent={Link}
                        href="/signin">
                        {t("getStarted")}
                    </Button>
                    <Button variant="outlined">{t("viewTemplates")}</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;
