"use client";
import React from "react";

import {
    Drawer,
    Toolbar,
    Box,
    List,
    ListItem,
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import { Link } from "@/i18n/routing";
import { DashboardMenuKey } from "@/types/dashboard/dashboard.types";
import { useDashboardMenu } from "@/hooks/useDashboardMenu";

type Props = {
    menuKey: DashboardMenuKey
};

export default function DashboardMenu({ menuKey }: Props) {
    const menuSections = useDashboardMenu(menuKey);

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: { xs: 50, md: 240 },
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: { xs: 50, md: 240 }, boxSizing: "border-box" }
            }}
        >
            <Toolbar sx={{ mb: 3 }} />

            <Box sx={{ overflow: "auto" }}>
                {menuSections.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                        <List>
                            {section.items.map((item, itemIndex) => (
                                <ListItem key={itemIndex} disablePadding>

                                    {item.href ? (
                                        <ListItemButton component={Link} href={item.href}
                                                        sx={{ justifyContent: { xs: "center", md: "start" } }}>

                                            <ListItemIcon
                                                sx={{
                                                    minWidth: {
                                                        xs: "min-content",
                                                        md: 56
                                                    }
                                                }}>{item.icon}</ListItemIcon>
                                            <ListItemText sx={{ display: { xs: "none", md: "flex" } }}
                                                          primary={item.text} />
                                        </ListItemButton>
                                    ) : (
                                        <ListItemButton component={"button"} onClick={item.onClick}
                                                        sx={{ justifyContent: { xs: "center", md: "start" } }}>

                                            <ListItemIcon
                                                sx={{
                                                    minWidth: {
                                                        xs: "min-content",
                                                        md: 56
                                                    }
                                                }}>{item.icon}</ListItemIcon>
                                            <ListItemText sx={{ display: { xs: "none", md: "flex" } }}
                                                          primary={item.text} />
                                        </ListItemButton>
                                    )}

                                </ListItem>
                            ))}
                        </List>
                        {sectionIndex < menuSections.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </Box>
        </Drawer>

    );
}
