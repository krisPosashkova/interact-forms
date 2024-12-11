export const searchStyles = {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        border: "1px solid",
        borderRadius: 3,
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        gap: 2,
        mt: 3,
        overflow: "hidden",
        width: { xs: "100%", md: "fit-content" },
    },
    caption: {
        ml: 1,
        p: 1,
        backgroundColor: "var(--palette-background-paper)",
        borderRadius: 2,
        display: { xs: "none", md: "block" },
    },
};
