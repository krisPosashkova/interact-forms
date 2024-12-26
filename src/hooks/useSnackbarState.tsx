"use client";
import {useState, useCallback} from "react";
import {CustomSnackbarProps} from "@/types/components/snackbar.types";

export function useSnackbarState() {

    const [snackbarState, setSnackbarState] = useState<CustomSnackbarProps>({
        severity: "info",
        message: "",
        open: false,
        onClose: () => setSnackbarState((prev) => ({...prev, open: false})),
    });

    const handleSnackbar = useCallback(
        (severity: CustomSnackbarProps["severity"], message: string) => {
            setSnackbarState({
                severity,
                message,
                open: true,
                onClose: () =>
                    setSnackbarState((prev) => ({...prev, open: false})),
            });
        },
        []
    );
    return {snackbarState, handleSnackbar};
}