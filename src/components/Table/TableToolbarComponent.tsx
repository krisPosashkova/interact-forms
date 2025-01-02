"use client";

import React from "react";
import {
    Toolbar,
    Typography,
    IconButton,
    Tooltip
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { TableToolbarProps } from "@/types/components/table.types";
import { useTranslations } from "next-intl";

type Props = {
    data: TableToolbarProps
}

function TableToolbarComponent({ data }: Props) {
    const { title, numSelected, alwaysVisibleActions, conditionalActions } = data;
    const t = useTranslations("Event");

    return (
        <Toolbar
            sx={(theme) => ({
                p: 1,
                [theme.breakpoints.between("xs", "md")]: {
                    flexWrap: "wrap",
                    gap: 1
                },
                ...(numSelected > 0 && {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.activatedOpacity
                    )
                })
            })}>

            <Typography sx={{ mr: 2 }} variant="h5" component="h2">
                {title}
            </Typography>


            {numSelected > 0 && (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="body1"
                    component="div">
                    {t("selected")}: {numSelected}
                </Typography>
            )}

            {numSelected > 0 &&
                conditionalActions?.map((action, index) => (
                    <Tooltip key={`conditional-${index}`} title={action.tooltip || ""}>
                        <IconButton onClick={action.onClick} color={action.color || "default"}>
                            {action.icon}
                        </IconButton>
                    </Tooltip>
                ))
            }

            {alwaysVisibleActions?.map((action, index) => (
                <Tooltip key={`always-visible-${index}`} title={action.tooltip || ""}>
                    <IconButton onClick={action.onClick} color={action.color || "default"}>
                        {action.icon}
                    </IconButton>
                </Tooltip>
            ))}


        </Toolbar>
    );
}

export default TableToolbarComponent;
