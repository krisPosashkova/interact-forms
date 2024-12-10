export const bannerStyles = {
    root: {
        backgroundColor: "var(--palette-background-paper)",
        marginTop: 4,
        borderRadius: 10,
        padding: { xs: 2, md: 3 },
        textAlign: { xs: "start", md: "center" },
        boxShadow: 2,
        position: "relative",
        overflow: "hidden",
    },
    title: { marginBottom: "1rem" },
    content: {
        marginBottom: "2rem",
        whiteSpaceCollapse: "preserve-breaks",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: { xs: 1, md: 2 },
        flexDirection: { xs: "column", sm: "row" },
    },
};
