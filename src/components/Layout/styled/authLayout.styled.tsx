export const authStyles = {
    root: {
        background: "var(--palette-background-paper)",
        height: "100svh"
    },

    container: {
        height: "100%",
        overflow: "hidden"
    },

    containerForm: {
        height: "100%",
        display: "grid",
        gridTemplateRows: " 3fr 1fr"
    },

    background: {
        background: "var(--custom-gradient)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100svh - (70px + 4rem))",
        borderRadius: 4,
        marginTop: "2rem"
    },

    content: {
        overflow: "auto",
        height: "calc(100svh - 70px)"
    },

    box: {
        display: "flex",
        alignItems: "center"
    },

    typography: {
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(0.2rem, 1.5vw + 0.5rem, 0.5rem)",
        alignItems: "end",
        padding: "2rem 0"
    }
};
