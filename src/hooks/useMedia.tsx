import { useTheme, useMediaQuery } from "@mui/material";
export const useMedia = () => {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(
        theme.breakpoints.between("xs", "md")
    );

    return {
        theme,
        isMobileOrTablet,
    };
};
