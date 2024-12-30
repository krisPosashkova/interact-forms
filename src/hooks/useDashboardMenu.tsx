import { useTranslations } from "next-intl";
import { DashboardMenuKey, DashboardMenuSection } from "@/types/dashboard/dashboard.types";
import { Logout, Person2 } from "@mui/icons-material";
import { logout } from "@/app/actions/auth";

export const useDashboardMenu = (menuKey: DashboardMenuKey): DashboardMenuSection[] => {
    const t = useTranslations("Dashboard");

    const MENU_SECTIONS: Record<DashboardMenuKey, DashboardMenuSection[]> = {
        admin: [
            {
                items: [
                    { text: t("users"), icon: <Person2 />, href: "/admin/dashboard/users" }
                ]
            },
            {
                items: [{ text: t("logout"), icon: <Logout />, onClick: logout }]
            }
        ],
        user: [
            {
                items: [
                    { text: t("templates"), icon: <Person2 />, href: "/user/profile" }
                ]
            },
            {
                items: [{ text: t("logout"), icon: <Logout />, onClick: logout }]
            }
        ]
    };

    return MENU_SECTIONS[menuKey];
};
