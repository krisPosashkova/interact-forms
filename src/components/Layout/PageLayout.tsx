import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import { Box } from "@mui/material";
import SearchComponent from "@/components/UI/Search/Search";

type Props = {
    children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <>
            <Header />
            <Box sx={{ height: "calc(100svh - 70px)", overflowY: "auto" }}>
                <SearchComponent />
                {children}
            </Box>
        </>
    );
}
