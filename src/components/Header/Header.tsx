"use client";
import React from "react";
import { Typography, Container } from "@mui/material";
import Link from "next/link";
import { CustomHeader } from "./Header.styled";
import ThemeSwitcher from "./ThemeSwitcher";
import { DynamicForm } from "@mui/icons-material";

const Header = () => {
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
                        <ThemeSwitcher />
                    </div>
                </Typography>
            </Container>
        </CustomHeader>
    );
};

export default Header;
