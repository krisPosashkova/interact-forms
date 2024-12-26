import {createTheme} from "@mui/material/styles";

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
                    main: "#e58be2",
                    light: "#e167dd",
                    dark: "#b83cb4",
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
                    contrastText: "#2e2e2e",
                },
                secondary: {
                    main: "#e58be2",
                    light: "#e167dd",
                    dark: "#b83cb4",
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
            fontSize: "clamp(0.2rem, 1vw + 0.4rem, 1.125rem)",
            fontWeight: 400,
            lineHeight: "normal",
        },

        caption: {
            fontSize: "clamp(0.2rem, 1vw + 0.3rem, 0.7rem)",
            fontWeight: 400,
            lineHeight: "normal",
        },

        body1: {
            fontSize: "clamp(0.2rem, 1vw + 0.4rem, 1.125rem)",
            fontWeight: 400,
            lineHeight: "normal"
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
            fontSize: "clamp(0.4rem, 1vw + 0.4rem, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: 1.5,
        },
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "clamp(0.2rem, 1vw + 0.3rem, 1.125rem)",
                    height: "clamp(1rem, 1.5vw + 0.3rem, 1.5rem)",
                    width: "auto",
                    // width: "clamp(1rem, 2vw + 0.3rem, 2rem)",

                    whiteSpace: "nowrap"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: "clamp(0.2rem, 1vw + 0.4rem, 1.125rem)",
                    height: "clamp(1.5rem, 2vw + 0.3rem, 2rem)",
                    whiteSpace: "nowrap"
                }
            }

        },
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
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: 5,
                    borderRadius: 8,
                    boxShadow: "var(--shadows-5)"
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderRadius: 8,
                    lineHeight: "normal"
                },
                contained: {
                    // color: "var(--palette-text-primary)",
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
