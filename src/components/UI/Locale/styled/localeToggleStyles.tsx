export const localeToggleStyles = {
    root: {
        "& .MuiToggleButton-root": {
            border: "none",
            padding: 1.2,
            transition: "opacity var(--custom-durations-ms300)",

            ":hover": {
                opacity: 0.6,
                background: "none"
            },

            "&.Mui-selected": {
                color: "var(--palette-primary-light) !important",
                background: "none !important"
            },

            "&.Mui-selected:hover": {
                opacity: 0.8,
                background: "none"
            }
        }
    },

    divider: {
        width: "1px",
        backgroundColor: "var(--palette-action-active)"
    }
};
