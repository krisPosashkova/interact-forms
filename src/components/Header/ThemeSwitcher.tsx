"use client";

import { useTheme } from "@/hooks/useTheme";
import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    if (theme === undefined) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}>
            <IconButton
                type="button"
                sx={{
                    transition:
                        "background-color var(--custom-durations-ms300)",
                }}
                onClick={toggleTheme}>
                {theme === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
        </motion.div>
    );
};

export default ThemeSwitcher;
