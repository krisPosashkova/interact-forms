import { useState, useCallback, useMemo } from "react";
import { ActionHandlers, DeleteResponse, UpdateRoleResponse } from "@/types/api/apiResponse.types";
import { useSnackbarState } from "@/hooks/useSnackbarState";
import type { Session } from "next-auth";
import { deleteTemplates } from "@/app/actions/templates";

import useTable from "@/hooks/useTable";
import { useRouter } from "@/i18n/routing";
import { ITemplate } from "@/types/api/template.types";


const useUsersTable = (templatesData: ITemplate[] | null, session: Session | null) => {
    const table = useTable<ITemplate>(templatesData);
    const router = useRouter();
    const { snackbarState, handleSnackbar } = useSnackbarState();
    const [error, setError] = useState<string | null>(null);
    const [loadingRows, setLoadingRows] = useState<Record<number, boolean>>({});

    const updateLoadingState = (selected: number[] | number, isLoading: boolean) => {
        const selectedArray = Array.isArray(selected) ? selected : [selected];
        setLoadingRows((prevState) => ({
            ...prevState,
            ...selectedArray.reduce<Record<number, boolean>>(
                (acc, id) => ({ ...acc, [id]: isLoading }),
                {}
            )
        }));
    };

    const handleActionResponse = useCallback((
        response: DeleteResponse | UpdateRoleResponse | void,
        action: keyof ActionHandlers
    ) => {
        if (response && response.success) {
            table.setSelected([]);
            handleSnackbar("success", response.message || `${action} completed successfully`);
            if (response.redirect) {
                router.push("/");
            }
        } else if (response && !response.success) {
            setError(response.error);
            handleSnackbar("error", response.error || `Error when ${action}`);
        }
    }, [handleSnackbar, router, table]);


    const actionHandlers: ActionHandlers = useMemo(() => ({
        deleteTemplates: async (selected: number[] | number) => {
            const response = await deleteTemplates(selected, session);
            if (response?.success) {
                const selectedArray = Array.isArray(selected) ? selected : [selected];
                table.setRows((prevRows) =>
                    prevRows.filter((row) => !selectedArray.includes(+row.id))
                );
            }
            return response;
        }
    }), [session, table]);

    const handleAction = useCallback(async (action: keyof ActionHandlers, ...args: [number[] | number]): Promise<void> => {
        console.log();
        if (action === "deleteTemplates") {
            const selected = args[0];
            updateLoadingState(selected, true);

            try {
                const response = await actionHandlers[action]?.(selected);
                handleActionResponse(response, action);
            } catch (err) {
                handleSnackbar("error", err instanceof Error ? err.message : "Unknown error");
            } finally {
                updateLoadingState(selected, false);
            }

        }
    }, [actionHandlers, handleActionResponse, handleSnackbar]);

    const handleDeleteTemplates = (selected: number[] | number) => handleAction("deleteTemplates", selected);


    return {
        ...table,
        error,
        snackbarState,
        loadingRows,
        setError,
        handleDeleteTemplates
    };
};

export default useUsersTable;