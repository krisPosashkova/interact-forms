import { useState } from "react";
import { toggleState } from "@/utils/toggleState";
export const useMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => toggleState(setOpenMenu);

    return {
        openMenu,
        toggleMenu,
    };
};
