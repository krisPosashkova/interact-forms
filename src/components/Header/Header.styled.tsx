"use client";

import styled from "styled-components";

export const CustomHeader = styled.header(({ theme }) => ({
    position: "sticky",
    top: 0,
    left: 0,
    color: theme.vars.palette.text.primary,
    width: "100%",
    boxShadow: "0 -2px 6px #5d5c5c",

    ".flex-align-center": {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
}));
