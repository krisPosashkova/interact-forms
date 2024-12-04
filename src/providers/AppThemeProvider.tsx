"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Header from "@/components/Header/Header";

export default function AppThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StyledComponentsRegistry>
            <MuiThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        <Header />

                        {children}
                    </>
                </StyledThemeProvider>
            </MuiThemeProvider>
        </StyledComponentsRegistry>
    );
}
