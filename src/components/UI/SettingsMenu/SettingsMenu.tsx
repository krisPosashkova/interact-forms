import React, { memo } from "react";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import { Close } from "@mui/icons-material";
import { settingsMenuStyles } from "@/components/UI/SettingsMenu/styled/settingsMenu.styled";
import ModeToggle from "@/components/UI/Mode/ModeToggle";
import LocaleToggle from "@/components/UI/Locale/LocaleToggle";

export interface SettingsMenuProps {
    children?: React.ReactNode;
    openMenu: boolean;
    toggleMenu: () => void;
}

const settingsItems = [
    { component: LocaleToggle, key: "localeToggle" },
    { component: ModeToggle, key: "modeToggle" }
];

const SettingsMenu: React.FC<SettingsMenuProps> = ({
                                                       openMenu,
                                                       toggleMenu,
                                                       children
                                                   }) => {
    return (
        <Drawer sx={settingsMenuStyles.root} anchor="left" open={openMenu} onClose={toggleMenu} keepMounted>
            <ListItem sx={settingsMenuStyles.closeWrapper} component={"div"}>
                <IconButton
                    onClick={toggleMenu}
                    sx={settingsMenuStyles.close}
                >
                    <Close />
                </IconButton>
            </ListItem>

            <List
                sx={settingsMenuStyles.list}
                onClick={toggleMenu}>

                {settingsItems.map(({ component: Component, key }) => (
                    <ListItem key={key} sx={settingsMenuStyles.listItem}>
                        <Component />
                    </ListItem>
                ))}

                {children}
            </List>
        </Drawer>
    );
};

export default memo(SettingsMenu);
