import React, { memo } from "react";
import { Drawer, IconButton, List } from "@mui/material";
import { Close } from "@mui/icons-material";
import { CustomMenuProps } from "./menu.types";

const CustomMenu: React.FC<CustomMenuProps> = ({
    openMenu,
    toggleMenu,
    children,
}) => {
    return (
        <Drawer anchor="left" open={openMenu} onClose={toggleMenu} keepMounted>
            <IconButton
                onClick={toggleMenu}
                sx={{
                    justifyContent: "end",
                }}>
                <Close />
            </IconButton>

            <List
                sx={{
                    width: {
                        xs: "100svw",
                        sm: "250px",
                    },
                }}
                onClick={toggleMenu}>
                {children}
            </List>
        </Drawer>
    );
};

export default memo(CustomMenu);
