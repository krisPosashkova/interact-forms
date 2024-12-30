import React, { ReactNode } from "react";
import { Link } from "@/i18n/routing";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { DynamicForm } from "@mui/icons-material";
import { headerStyles } from "@/components/Header/styled/header.styled";

interface HeaderBaseProps {
    children?: ReactNode;
}

const HeaderBase: React.FC<HeaderBaseProps> = async ({ children }) => {

    return (
        <AppBar position="fixed" sx={headerStyles.root}>

            <Toolbar sx={headerStyles.box}>
                <Link href={"/"}>
                    <Typography component={"div"} sx={headerStyles.logoLink}>
                        <DynamicForm />
                        <Typography variant={"h6"}>I-Forms</Typography>
                    </Typography>
                </Link>
                {children}
            </Toolbar>
        </AppBar>

    );
};

export default HeaderBase;
