export const searchStyles = {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        display: "flex",
        justifyContent: {xs: "center", md: "space-between"},
        alignItems: "center",
        gap: 1,
        maxHeight: "36px",
        overflow: "hidden",
        width: {xs: "100%", md: "fit-content"},
    },
    typography: {
        mr: "0.5rem",
        display: {xs: "none", md: "block"},
    },
    caption: {
        ml: 1,
        p: 0.5,
        backgroundColor: "var(--palette-background-paper)",
        borderRadius: 2,
        display: {xs: "none", md: "block"},
    },
};
