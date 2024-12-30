import React, { ReactNode } from "react";

export type DashboardMenuItem = {
    text: string;
    icon: ReactNode;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type DashboardMenuSection = {
    title?: string;
    items: DashboardMenuItem[];
};

export type DashboardMenuKey = "admin" | "user";

export type DashboardTranslations = {
    title: string;
    name: string;
    email: string;
    role: string;
};


