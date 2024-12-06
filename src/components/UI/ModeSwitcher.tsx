"use client";

import { useTheme } from "@/hooks/useMode";
import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ModeSwitcher = () => {
    const { mode, toggleMode } = useTheme();

    if (mode === undefined) {
        return null;
    }

    return (
        <IconButton
            type="button"
            sx={{
                transition: "background-color var(--custom-durations-ms300)",
            }}
            onClick={toggleMode}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};

export default ModeSwitcher;
