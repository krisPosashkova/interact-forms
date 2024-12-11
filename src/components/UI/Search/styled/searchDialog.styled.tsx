export const searchDialogStyles = {
    title: {
        position: "relative",
    },

    close: {
        position: "absolute",
        top: "1rem",
        right: "1.2rem",
        padding: 0,
    },
    content: {
        overflow: "hidden",
    },
    box: { mt: 2, maxHeight: "50svh" },
    list: {
        gap: 1,
        display: "flex",
        flexDirection: "column",
    },
    listItem: {
        padding: "0",
        backgroundColor: " var(--palette-background-default)",
        borderRadius: 1,
    },
    link: {
        width: "100%",

        ":hover": {
            opacity: "1",
        },
    },
};
