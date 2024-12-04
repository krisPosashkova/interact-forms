import { useColorScheme } from "@mui/material/styles";

export const useTheme = () => {
    const { mode, setMode } = useColorScheme();

    if (!mode || !setMode) {
        return { theme: "light", toggleTheme: () => {} };
    }

    const toggleTheme = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return { theme: mode, toggleTheme };
};
