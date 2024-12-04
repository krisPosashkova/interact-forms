"use client";
import React from "react";
import Link from "next/link";

import { Typography, Container, IconButton, ListItem } from "@mui/material";
import { DynamicForm, Menu } from "@mui/icons-material";
import { CustomHeader } from "./Header.styled";

import CustomMenu from "@/components/CustomMenu/Menu";
import ModeSwitcher from "@/components/UI/ModeSwitcher";

import { useMedia } from "@/hooks/useMedia";
import { useMenu } from "@/hooks/useMenu";

const Header = () => {
    const { isMobileOrTablet } = useMedia();
    const { openMenu, toggleMenu } = useMenu();
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

                    <div className="flex-align-center">
                        {isMobileOrTablet ? (
                            <IconButton onClick={toggleMenu}>
                                <Menu />
                            </IconButton>
                        ) : (
                            <ModeSwitcher />
                        )}
                    </div>
                </Typography>
            </Container>
            <CustomMenu openMenu={openMenu} toggleMenu={toggleMenu}>
                <ListItem>
                    <ModeSwitcher />
                </ListItem>
            </CustomMenu>
        </CustomHeader>
    );
};

export default Header;
