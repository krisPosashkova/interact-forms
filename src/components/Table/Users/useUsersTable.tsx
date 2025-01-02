import { useState, useEffect, useCallback, useMemo } from "react";
import { IUser, ActionHandlers, DeleteResponse, UpdateRoleResponse } from "@/types/apiResponse.types";
import { SelectChangeEvent } from "@mui/material";
import { useSnackbarState } from "@/hooks/useSnackbarState";
import type { Session } from "next-auth";
import { deleteUser, updateUserRole } from "@/app/actions/users";
import { user_role as userRole } from "@prisma/client";
import useTable from "@/hooks/useTable";
import { useRouter } from "@/i18n/routing";


const useUsersTable = (usersData: IUser[] | null, session: Session | null) => {
    const currentUserId = session?.user?.id;
    const table = useTable<IUser>(usersData);
    const router = useRouter();
    const { snackbarState, handleSnackbar } = useSnackbarState();

    const [error, setError] = useState<string | null>(null);
    const [loadingUsers, setLoadingUsers] = useState<Record<number, boolean>>({});
    const [showWarning, setShowWarning] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [actionType, setActionType] = useState<keyof ActionHandlers>("delete");
    const [selectedForAction, setSelectedForAction] = useState<number[]>([]);
    const [tempRole, setTempRole] = useState<userRole>(session?.user.role);


    const updateLoadingState = (selected: number[] | number, isLoading: boolean) => {
        const selectedArray = Array.isArray(selected) ? selected : [selected];
        setLoadingUsers((prevState) => ({
            ...prevState,
            ...selectedArray.reduce<Record<number, boolean>>(
                (acc, userId) => ({ ...acc, [userId]: isLoading }),
                {}
            )
        }));
    };

    const isCurrentUserSelected = useCallback((selected: number[] | number): boolean => {
        const selectedArray = Array.isArray(selected) ? selected : [selected];
        return selectedArray.includes(Number(currentUserId));
    }, [currentUserId]);


    const promptConfirmation = (action: keyof ActionHandlers, selected: number[] | number) => {
        const selectedArray = Array.isArray(selected) ? selected : [selected];
        setActionType(action);
        setSelectedForAction(selectedArray);
        setShowWarning(true);
    };

    const confirmAction = () => {
        if (actionType && selectedForAction.length) {
            setIsConfirm(true);
            setShowWarning(false);
        }
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
        delete: async (selected: number[]) => {
            const response = await deleteUser(selected, session);
            if (response?.success) {
                table.setRows((prevRows) =>
                    prevRows.filter((row) => !selected.includes(+row.id))
                );
            }
            return response;
        },
        updateRole: async (id: number, newRole: userRole) => {
            const response = await updateUserRole(id, newRole, session);
            if (response.success) {
                table.setRows((prevRows) =>
                    prevRows.map((row) =>
                        row.id === id ? { ...row, role: newRole } : row
                    )
                );
            }
            return response;
        }
    }), [session, table]);

    const handleAction = useCallback(async (action: keyof ActionHandlers, ...args: [number[]] | [number, userRole]): Promise<void> => {

        if (action === "delete") {
            const selected = args[0];
            if (isCurrentUserSelected(selected) && !isConfirm) {
                promptConfirmation(action, selected);
                return;
            }
            if (!Array.isArray(selected)) return;

            updateLoadingState(selected, true);

            try {
                const response = await actionHandlers[action](selected);
                console.log(response, "res");
                handleActionResponse(response, action);

            } catch (err) {
                handleSnackbar("error", err instanceof Error ? err.message : "Unknown error");
            } finally {
                updateLoadingState(selected, false);
                setIsConfirm(false);
            }
        }

        if (action === "updateRole") {
            const [id, newRole] = args;
            if (!newRole) return;
            const selectedId = Array.isArray(id) ? id[0] : id;

            if (isCurrentUserSelected(selectedId) && !isConfirm) {
                console.log(action, id);
                promptConfirmation(action, selectedId);
                return;
            }
            updateLoadingState(selectedId, true);

            console.log("updateUserRole");

            try {
                const response = await actionHandlers[action](selectedId, newRole);
                handleActionResponse(response, action);
            } catch (err) {

                handleSnackbar("error", err instanceof Error ? err.message : "Unknown error");
            } finally {
                updateLoadingState(selectedId, false);
                setIsConfirm(false);
            }
        }
    }, [actionHandlers, handleActionResponse, handleSnackbar, isConfirm, isCurrentUserSelected]);

    const handleDeleteUsers = (selected: number[]) => handleAction("delete", selected);

    const handleUpdateRole = async (event: SelectChangeEvent<string | null>, id: number) => {
        const newRole = event.target.value as userRole;
        if (newRole === "admin" || newRole === "user") {
            setTempRole(newRole);
            await handleAction("updateRole", id, newRole);
        }
    };


    useEffect(() => {
        console.log(isConfirm, actionType, "use effect");

        if (isConfirm && actionType) {
            if (actionType === "updateRole" && tempRole) {
                const selectedId = Array.isArray(selectedForAction) ? selectedForAction[0] : selectedForAction;
                handleAction(actionType, selectedId, tempRole);
            } else {
                handleAction(actionType, selectedForAction);
            }

            setIsConfirm(false);
        }
    }, [isConfirm, actionType, selectedForAction, handleAction, tempRole]);

    return {
        ...table,
        error,
        snackbarState,
        loadingUsers,
        showWarning,
        setShowWarning,
        confirmAction,
        setError,
        handleDeleteUsers,
        handleUpdateRole
    };
};

export default useUsersTable;