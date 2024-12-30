"use server";
import React from "react";
import { Container, Box, Grid2, Typography, Toolbar } from "@mui/material";
import { CustomLink } from "@/styles/components";
import { authStyles } from "./styled/authLayout.styled";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";

interface AuthLayoutProps {
    children: ReactNode;
    props: {
        linkText: string;
        linkHref: string;
        prompt: string;
    };
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children, props }) => {
    const { prompt, linkHref, linkText } = props;
    return (
        <Box sx={authStyles.root}>
            <Header />
            <Container maxWidth="xl">
                <Toolbar />
                <Grid2 container sx={authStyles.container}>
                    <Grid2
                        size={{ xs: 0, md: 6 }}
                        sx={authStyles.background}></Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }} sx={authStyles.content}>
                        <Container maxWidth="sm" sx={authStyles.containerForm}>
                            <Box component="main" sx={authStyles.box}>
                                {children}
                            </Box>
                            <Typography
                                component="div"
                                variant="body1"
                                sx={authStyles.typography}>
                                <Typography>{prompt}</Typography>
                                <CustomLink href={linkHref}>
                                    {linkText}
                                </CustomLink>
                            </Typography>
                        </Container>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
};

export default AuthLayout;
