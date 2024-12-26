import React, {ReactNode} from "react";
import {Link} from "@/i18n/routing";
import {Typography, Container, Box} from "@mui/material";
import {DynamicForm} from "@mui/icons-material";
import {auth} from "@/lib/auth";
import {headerStyles} from "@/components/Header/styled/header.styled";

interface HeaderBaseProps {
    children?: ReactNode;
}

const HeaderBase: React.FC<HeaderBaseProps> = async ({children}) => {
    const session = await auth();
    console.log(session, 'ses header')

    return (
        <Box sx={headerStyles.root} component={"header"}>
            <Container maxWidth="xl">
                <Box
                    sx={headerStyles.box}>
                    <Link href={"/"}>
                        <Typography component={"div"} sx={headerStyles.logoLink}>
                            <DynamicForm/>
                            <Typography variant={"h6"}>I-Forms</Typography>
                        </Typography>
                    </Link>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};

export default HeaderBase;
