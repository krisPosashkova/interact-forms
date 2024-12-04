import React from "react";
import { Drawer, IconButton, List } from "@mui/material";
import { Close } from "@mui/icons-material";
import { CustomMenuProps } from "./menu.types";

const CustomMenu: React.FC<CustomMenuProps> = ({
    openMenu,
    toggleMenu,
    children,
}) => {
    return (
        <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
            <IconButton
                onClick={toggleMenu}
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                }}>
                <Close />
            </IconButton>

            <List sx={{ width: "250px" }} onClick={toggleMenu}>
                {children}
            </List>
        </Drawer>
    );
};

export default CustomMenu;
