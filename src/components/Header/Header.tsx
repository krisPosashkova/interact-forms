"use client";
import React, { useMemo, memo } from "react";
import { Link } from "@/i18n/routing";

import { Typography, Container, IconButton, List } from "@mui/material";
import { DynamicForm, Menu } from "@mui/icons-material";
import { CustomHeader } from "./Header.styled";

import CustomMenu from "@/components/CustomMenu/Menu";
import ListItems from "@/components/Common/ListItems";
import ModeSwitcher from "@/components/UI/ModeSwitcher";
import LocaleSwitcher from "@/components/UI/LocaleSwitcher";

import { useMenu } from "@/hooks/useMenu";

const Header = () => {
    const { openMenu, toggleMenu } = useMenu();
    const menuItems = useMemo(
        () => [
            <>
                <ModeSwitcher key="modeSwitcher" />
                <LocaleSwitcher key="localeSwitcher" />
            </>,
        ],
        []
    );
    const headerItems = useMemo(
        () => [
            <ModeSwitcher key="modeSwitcher" />,
            <LocaleSwitcher key="localeSwitcher" />,
        ],
        []
    );
    const headerMobileItems = useMemo(
        () => [
            <IconButton className="p-0" key="menuButton" onClick={toggleMenu}>
                <Menu />
            </IconButton>,
        ],
        [toggleMenu]
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
                    <Link href={"/"} className="logo flex-align-center">
                        <DynamicForm />
                        <span>I-Forms</span>
                    </Link>

                    <List className="flex-align-center">
                        <ListItems
                            className="is-desktop p-0"
                            nameComponent="li"
                            items={headerItems}
                        />

                        <ListItems
                            nameComponent="li"
                            className="is-mobile p-0"
                            items={headerMobileItems}
                        />
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
