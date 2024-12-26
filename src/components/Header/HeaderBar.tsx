"use client";
import React, {memo} from "react";
import {Link} from "@/i18n/routing";

import {logout} from "@/app/actions/auth";
import type {Session} from "next-auth";

import {IconButton, List, ListItem} from "@mui/material";
import {Login, Settings} from "@mui/icons-material";

import ProfileMenu from "@/components/UI/ProfileMenu/ProfileMenu";
import ModeSwitcher from "@/components/UI/ModeSwitcher";
import LocaleSwitcher from "@/components/UI/LocaleSwitcher";
import CustomMenu from "@/components/CustomMenu/Menu";
import SearchComponent from "@/components/UI/Search/Search";
import {headerBarStyles} from "@/components/Header/styled/headerBar.styled";

import {useMenu} from "@/hooks/useMenu";

const HeaderBar = ({session}: { session: Session | null; }) => {
    const {openMenu, toggleMenu} = useMenu();

    return (
        <>
            <List sx={headerBarStyles.root}>
                <ListItem sx={headerBarStyles.item}>
                    <SearchComponent/>
                </ListItem>

                <ListItem sx={headerBarStyles.item}>
                    <IconButton sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }} onClick={toggleMenu}>
                        <Settings/>
                    </IconButton>
                </ListItem>

                {session?.user ? (
                    <ListItem sx={headerBarStyles.item}>
                        <ProfileMenu session={session} onSignOut={logout}/>
                    </ListItem>
                ) : (
                    <ListItem sx={headerBarStyles.item}>
                        <IconButton sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }} component={Link} href={'/signin'}>
                            <Login sx={{fill: "var(--palette-primary-main)"}}/>
                        </IconButton>
                    </ListItem>
                )}

            </List>
            <CustomMenu openMenu={openMenu} toggleMenu={toggleMenu}>
                <ListItem>
                    <ModeSwitcher/>
                </ListItem>
                <ListItem>
                    <LocaleSwitcher/>
                </ListItem>
            </CustomMenu>
        </>

    );
};

export default memo(HeaderBar);
