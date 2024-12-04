"use client";

import { useTheme } from "@/hooks/useTheme";
import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <IconButton
            type="button"
            sx={{
                transition: "background-color var(--custom-durations-ms300)",
            }}
            onClick={toggleTheme}>
            {theme === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};

export default ThemeSwitcher;
