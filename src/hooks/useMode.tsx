import { useColorScheme } from "@mui/material/styles";

export const useTheme = () => {
    const { mode, setMode } = useColorScheme();

    if (!mode || !setMode) {
        return { mode, toggleMode: () => {} };
    }

    const toggleMode = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return { mode, toggleMode };
};
