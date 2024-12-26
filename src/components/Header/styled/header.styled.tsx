export const headerStyles = {
    root: {
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
    },

    box: {
        padding: "1rem 0",
        justifyContent: "space-between",
        height: "70px",
        display: "flex",
        alignItems: "center",
        gap: 2,
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
}