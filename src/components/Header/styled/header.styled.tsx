export const headerStyles = {
    root: {
        zIndex: "calc(var(--zIndex-drawer) + 1)"
    },

    box: {
        justifyContent: "space-between",
        alignItems: "center"
    },

    logo: {
        whiteSpace: "nowrap"
    },

    logoLink: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        transition: "opacity var(--custom-durations-ms300)",
        whiteSpace: "nowrap",
        ":hover": {
            opacity: "var(--custom-opacity)"
        }
    }
};