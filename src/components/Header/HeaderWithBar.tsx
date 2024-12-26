import React from "react";
import Header from "@/components/Header/Header";
import {auth} from "@/lib/auth";
import HeaderBar from "@/components/Header/HeaderBar";

const HeaderWithBar = async () => {
    const session = await auth();

    return (
        <Header>
            <HeaderBar session={session}/>
        </Header>
    );
};

export default HeaderWithBar;
