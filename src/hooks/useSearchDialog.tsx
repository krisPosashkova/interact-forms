import { useState, useEffect, useCallback } from "react";

export const useSearchDialog = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleOpenDialog = useCallback(() => setIsDialogOpen(true), []);
    const handleCloseDialog = useCallback(() => setIsDialogOpen(false), []);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "k") {
                event.preventDefault();
                handleOpenDialog();
            }
        },
        [handleOpenDialog]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return { isDialogOpen, handleOpenDialog, handleCloseDialog };
};
