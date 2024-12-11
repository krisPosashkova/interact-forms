import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    cssVariables: {
        cssVarPrefix: "",
        colorSchemeSelector: "data",
    },
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: "#f5f5f5",
                    paper: "#eeeeee",
                },
                text: {
                    primary: "#202020",
                    secondary: "#444444",
                },
                primary: {
                    main: "#5356fcf0",
                    light: "#8F8FFF",
                    dark: "#5b5bb1",
                    contrastText: "#f5f5f5",
                },
                secondary: {
                    main: "#e782a5",
                    light: "#ffb3c1",
                    dark: "#b36b7e",
                },
                error: {
                    main: "#ac0e0e",
                },
                action: {
                    hoverOpacity: 0.09,
                },
            },
        },
        dark: {
            palette: {
                background: {
                    default: "#2e2e2e",
                    paper: "#1b1b1b",
                },
                text: {
                    primary: "#f7f7f7",
                    secondary: "#f3f3ef",
                },
                primary: {
                    main: "#474ae4ef",
                    light: "#8F8FFF",
                    dark: "#3739b1ee",
                    contrastText: "#1b1b1b",
                },
                secondary: {
                    main: "#e782a5",
                    light: "#ffb3c1",
                    dark: "#b36b7e",
                },
                error: {
                    main: "#ac0e0e",
                },
            },
        },
    },

    typography: {
        fontFamily: "var(--font-primary)",
        button: {
            fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)",
            fontWeight: 400,
            lineHeight: 1.2,
        },
        caption: {
            fontSize: "clamp(0.6rem, 1.5vw + 0.5rem, 0.7rem)",
            fontWeight: 400,
            lineHeight: "normal",
        },

        body1: {
            fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)",
            fontWeight: 400,
            lineHeight: 1.3,
        },

        h1: {
            fontSize: "clamp(1.5rem, 2vw + 1rem, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h2: {
            fontSize: "clamp(1.25rem, 1.5vw + 0.75rem, 2.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "clamp(1rem, 1.5vw + 0.75rem, 2rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h5: {
            fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },

        h6: {
            fontFamily: "var(--font-secondary)",
            fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: 1.5,
        },
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    "&:before": {
                        content: '""',
                        borderBottom: "1px solid transparent",
                    },
                    "&.Mui-focused:after": {
                        borderBottom: "1px solid transparent",
                    },

                    "&:active": {
                        "&:before": {
                            borderBottom: "1px solid transparent",
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                },
                contained: {
                    color: "var(--palette-text-primary)",
                },
                outlined: {
                    borderColor: "var(--variant-outlinedColor)",
                    color: "var(--variant-outlinedColor)",
                    "--variant-outlinedColor": "var(--palette-text-primary)",

                    "&:hover": {
                        backgroundColor: "var(--variant-outlinedColor)",
                        color: "var(--palette-primary-contrastText)",
                    },
                },
            },
        },
    },

    custom: {
        opacity: 0.7,
        gradient: "linear-gradient(21deg, #e782a5, #5356fcf0)",

        // z-index
        order: {
            header: 10,
        },

        spacer: 0.25,

        // in ms
        durations: {
            ms300: "0.3s",
        },
    },
});
