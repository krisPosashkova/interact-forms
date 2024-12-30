import React, { ReactNode } from "react";

import {
    Toolbar,
    Box, Typography, Container

} from "@mui/material";

import HeaderWithBar from "@/components/Header/HeaderWithBar";
import DashboardMenu from "@/components/UI/DashboardMenu/DashboardMenu";
import { DashboardMenuKey, DashboardTranslations } from "@/types/dashboard/dashboard.types";
import type { Session } from "next-auth";

type Props = {
    children?: ReactNode;
    translations: DashboardTranslations;
    session: Session | null
    menuKey: DashboardMenuKey
};

export default async function DashboardLayout({ children, menuKey, session, translations }: Props) {
    const { title, name, email, role } = translations;
    return (
        <Box sx={{ display: "flex" }}>
            <HeaderWithBar />
            <DashboardMenu menuKey={menuKey} />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Toolbar sx={{ mb: 5 }} />
                <Container maxWidth="xl">
                    {session &&
                      <Box>
                        <Typography variant={"h6"} component={"h1"}>{title}</Typography>
                          {[
                              { label: name, value: session.user.name },
                              { label: email, value: session.user.email },
                              { label: role, value: session.user.role }
                          ].map((item, index) => (
                              <Typography key={index}>
                                  <Box component="span" sx={{ fontWeight: "bold" }}>
                                      {item.label}:
                                  </Box>{" "}
                                  {item.value}
                              </Typography>
                          ))}
                      </Box>
                    }
                    {children}
                </Container>
            </Box>
        </Box>
    );
}
