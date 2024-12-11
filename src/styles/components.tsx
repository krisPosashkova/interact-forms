"use client";

import { Link } from "@/i18n/routing";
import styled from "styled-components";

export const CustomLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: "transparent",
    transition: `text-decoration ${theme.custom.durations.ms300}s`,

    "&:hover": {
        textDecoration: "underline",
    },

    "&:focus-visible": {
        textDecoration: "underline",
        outline: "1px solid",
    },
}));

export const CusomForm = styled.form(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    marginTop: theme.spacing(4),
    width: "100%",
}));
