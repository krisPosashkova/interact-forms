import { useState, useCallback } from "react";
import { toggleState } from "@/utils/toggleState";

export const useMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = useCallback(() => {
        toggleState(setOpenMenu);
    }, []);

    return {
        openMenu,
        toggleMenu,
    };
};
