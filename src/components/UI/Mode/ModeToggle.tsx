"use client";

import { useTheme } from "@/hooks/useMode";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const ModeToggle = () => {
    const { mode, toggleMode } = useTheme();

    if (mode === undefined) return null;

    return (
        <ToggleButtonGroup
            value={mode}
            sx={{ width: "100%" }}
            exclusive
            onChange={toggleMode}
            aria-label="theme mode"
        >
            <ToggleButton sx={{ width: "100%" }} value="light" aria-label="light mode">
                <LightMode />
            </ToggleButton>
            <ToggleButton sx={{ width: "100%" }} value="dark" aria-label="dark mode">
                <DarkMode />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ModeToggle;