"use client";
import React, { memo } from "react";
import { Link } from "@/i18n/routing";

import { logout } from "@/app/actions/auth";
import type { Session } from "next-auth";

import { IconButton, List, ListItem } from "@mui/material";
import { Login, Settings } from "@mui/icons-material";

import ProfileMenu from "@/components/UI/ProfileMenu/ProfileMenu";
import ModeSwitcher from "@/components/UI/Mode/ModeSwitcher";
// import SearchComponent from "@/components/UI/Search/Search";
import { headerBarStyles } from "@/components/Header/styled/headerBar.styled";

import { useMenu } from "@/hooks/useMenu";
import SettingsMenu from "@/components/UI/SettingsMenu/SettingsMenu";
import LocaleToggle from "@/components/UI/Locale/LocaleToggle";

const HeaderBar = ({ session }: { session: Session | null; }) => {
    const { openMenu, toggleMenu } = useMenu();

    return (
        <>
            <List sx={headerBarStyles.root}>
                <ListItem sx={[headerBarStyles.item, { display: { xs: "none", md: "flex" } }]}>
                    <ModeSwitcher />
                </ListItem>
                {/*to do: temporarily commented out until the search logic is implemented*/}
                {/*<ListItem sx={headerBarStyles.item}>*/}
                {/*    <SearchComponent />*/}
                {/*</ListItem>*/}

                <ListItem sx={[headerBarStyles.item, { display: { xs: "flex", md: "none" } }]}>
                    <IconButton sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                    }} onClick={toggleMenu}>
                        <Settings />
                    </IconButton>
                </ListItem>

                <ListItem sx={[headerBarStyles.item, { display: { xs: "none", md: "flex" } }]}>
                    <LocaleToggle />
                </ListItem>

                {session?.user ? (
                    <ListItem sx={headerBarStyles.item}>
                        <ProfileMenu session={session} onSignOut={logout} />
                    </ListItem>
                ) : (
                    <ListItem sx={headerBarStyles.item}>
                        <IconButton sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }} component={Link} href={"/signin"}>
                            <Login sx={{ fill: "var(--palette-primary-light)" }} />
                        </IconButton>
                    </ListItem>
                )}

            </List>
            <SettingsMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        </>

    );
};

export default memo(HeaderBar);
