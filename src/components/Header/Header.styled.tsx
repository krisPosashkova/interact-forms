"use client";

import styled from "styled-components";

export const CustomHeader = styled.header(({ theme }) => ({
    position: "sticky",
    top: 0,
    left: 0,
    color: theme.vars.palette.text.primary,
    width: "100%",
    backgroundColor: theme.vars.palette.background.paper,

    ".logo": { whiteSpace: "nowrap" },

    ".p-0": {
        padding: 0,
    },

    ".flex-align-center": {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },

    [theme.breakpoints.between("xs", "md")]: {
        ".is-mobile": {
            display: "block",
        },
        ".is-desktop": {
            display: "none",
        },
    },

    [theme.breakpoints.up("md")]: {
        ".is-mobile": {
            display: "none",
        },
        ".is-desktop": {
            display: "block",
        },
    },
}));
