import { ReactNode } from "react";
import { Box, Toolbar } from "@mui/material";
import HeaderWithBar from "@/components/Header/HeaderWithBar";


type Props = {
    children?: ReactNode;
};

export default async function PageLayout({ children }: Props) {
    return (
        <Box sx={{ height: "100svh", overflowY: "auto" }}>
            <HeaderWithBar />
            <Toolbar />
            {children}
        </Box>
    );
}
