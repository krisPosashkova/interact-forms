"use client";
import React, { useMemo, memo } from "react";
import { Link } from "@/i18n/routing";

import {
    Typography,
    Container,
    IconButton,
    List,
    ListItem,
} from "@mui/material";
import { DynamicForm, Menu } from "@mui/icons-material";
import { CustomHeader } from "./Header.styled";

import CustomMenu from "@/components/CustomMenu/Menu";
import ListItems from "@/components/Common/ListItems";
import ModeSwitcher from "@/components/UI/ModeSwitcher";
import LocaleSwitcher from "@/components/UI/LocaleSwitcher";

import { useMedia } from "@/hooks/useMedia";
import { useMenu } from "@/hooks/useMenu";

const Header = () => {
    const { isMobileOrTablet } = useMedia();
    const { openMenu, toggleMenu } = useMenu();
    const menuItems = useMemo(
        () => [
            <ModeSwitcher key="modeSwitcher" />,
            <LocaleSwitcher key="localeSwitcher" />,
        ],
        []
    );
    return (
        <CustomHeader>
            <Container maxWidth="xl">
                <Typography
                    variant="h6"
                    component="div"
                    className="flex-align-center"
                    sx={{
                        padding: "1rem 0",

                        justifyContent: "space-between",
                        height: "70px",
                    }}>
                    <Link href={"/"} className="flex-align-center">
                        <DynamicForm />
                        <span>InteractForms</span>
                    </Link>

                    <List className="flex-align-center">
                        {isMobileOrTablet ? (
                            <ListItem component="li">
                                <IconButton onClick={toggleMenu}>
                                    <Menu />
                                </IconButton>
                            </ListItem>
                        ) : (
                            <ListItems nameComponent="li" items={menuItems} />
                        )}
                    </List>
                </Typography>
            </Container>
            <CustomMenu openMenu={openMenu} toggleMenu={toggleMenu}>
                <ListItems nameComponent="li" items={menuItems} />
            </CustomMenu>
        </CustomHeader>
    );
};

export default memo(Header);
