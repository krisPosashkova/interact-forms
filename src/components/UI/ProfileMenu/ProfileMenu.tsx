"use client";
import React, {useState} from "react";
import {IconButton, Menu, MenuItem, Tooltip, Typography, ListItemIcon, Divider} from "@mui/material";
import {Person2, Logout} from "@mui/icons-material";
import type {Session} from "next-auth";
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";


interface ProfileMenuProps {
    session: Session | null;
    onSignOut: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({session, onSignOut}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const t = useTranslations("MenuProfile");

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (!session) {
        return null;
    }

    return (
        <>
            <Tooltip title={`${t("openMenuProfile")} ${session.user?.name}`}>
                <IconButton
                    onClick={handleClick}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Person2/>
                </IconButton>
            </Tooltip>


            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}

            >
                <MenuItem disabled>
                    <Typography component={"div"} sx={{
                        whiteSpace: "pre-line",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "200px",
                    }}
                                variant={"caption"}>
                        {session.user?.name}: {session.user?.email}
                    </Typography>
                </MenuItem>
                <Divider/>
                <MenuItem component={"li"}>
                    <Typography sx={{display: "flex", alignItems: "center"}} component={Link} href="/profile"
                                onClick={handleClose}>
                        <ListItemIcon>
                            <Person2 fontSize="small"/>
                        </ListItemIcon> {t("profile")}
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography sx={{display: "flex", alignItems: "center"}} component={"button"}
                                onClick={onSignOut}>
                        <ListItemIcon>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        {t("logout")}
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default ProfileMenu;