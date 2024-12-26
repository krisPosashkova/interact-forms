import {ReactNode} from "react";
import {Box} from "@mui/material";
import HeaderWithBar from "@/components/Header/HeaderWithBar";

type Props = {
    children?: ReactNode;
};

export default function PageLayout({children}: Props) {
    return (
        <>
            <HeaderWithBar/>
            <Box sx={{height: "calc(100svh - 70px)", overflowY: "auto"}}>
                {children}
            </Box>
        </>
    );
}
