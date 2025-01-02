"use client";
import { useMemo } from "react";
import {
    Select,
    MenuItem
} from "@mui/material";

import { IUser } from "@/types/apiResponse.types";
import { TableComponent } from "@/components/Table/TableComponent";
import type { Session } from "next-auth";
import { Delete } from "@mui/icons-material";
import CustomSnackbars from "@/components/UI/CustomSnackbar";
import CustomDialog from "@/components/UI/Dialog";
import useUsersTable from "@/components/Table/Users/useUsersTable";
import { useTranslations } from "next-intl";
import { user_role } from "@prisma/client";
import { capitalize } from "@mui/material";

type Props = {
    session: Session | null;
    users: IUser[] | null;
};

export default function UsersTable({ session, users }: Props) {

    const t = {
        usersTable: useTranslations("UsersTable"),
        dialog: useTranslations("Dialog")
    };

    const usersData = useMemo(() =>
        users?.map((user) => ({
                ...user, id: Number(user.id)
            })
        ), [users]);


    const table = useUsersTable(usersData ?? [], session);
    const {
        emptyRows,
        sortedRows,
        selected,
        order,
        orderBy,
        page,
        rowsPerPage,
        onChangePage,
        onChangeRowsPerPage,
        onSelectAllClick,
        onClick,
        onRequestSort,
        snackbarState,
        confirmAction,
        setShowWarning,
        showWarning,
        handleUpdateRole,
        handleDeleteUsers,
        loading,
        error,
        loadingUsers
    } = table;


    if (!usersData || usersData.length === 0) {
        return null;
    }


    const headCells = [
        { id: "username" as keyof IUser, numeric: false, disablePadding: true, label: t.usersTable("username") },
        { id: "email" as keyof IUser, numeric: false, disablePadding: false, label: t.usersTable("email") },
        {
            id: "updated_at" as keyof IUser,
            numeric: false,
            disablePadding: false,
            label: t.usersTable("updatedAt")
        },
        { id: "role" as keyof IUser, numeric: false, disablePadding: false, label: t.usersTable("role") }
    ];

    const columns = [
        { id: "username", label: "Username", render: (row: IUser) => row.username },
        { id: "email", label: "Email", render: (row: IUser) => row.email },
        {
            id: "updated_at",
            label: "Update",
            render: (row: IUser) =>
                row.updated_at ? new Date(row.updated_at).toLocaleDateString() : "No data available"
        },
        {
            id: "role",
            label: "Role",
            render: (row: IUser) => (
                <Select
                    value={row.role || ""}
                    onChange={(event) => handleUpdateRole(event, +row.id)}
                    displayEmpty
                    variant="outlined"
                    inputProps={{ "aria-label": "Change Role" }}
                    sx={{ width: "100%" }}
                >

                    {Object.entries(user_role)
                        .filter(([key]) => isNaN(Number(key)))
                        .map(([key, value]) => (
                            <MenuItem key={value} value={value}>
                                {capitalize(key)}
                            </MenuItem>
                        ))}
                </Select>
            )
        }
    ];

    const conditionalActions = [
        {
            icon: <Delete />,
            onClick: () => handleDeleteUsers(selected)

        }
    ];

    const tableProps = {
        data: usersData,
        headCells,
        title: t.usersTable("title"),
        columns,
        alwaysVisibleActions: [],
        conditionalActions,
        loading,
        emptyRows,
        sortedRows,
        selected,
        order,
        orderBy,
        page,
        rowsPerPage,
        loadingUsers,
        onChangePage,
        onChangeRowsPerPage,
        onSelectAllClick,
        onClick,
        onRequestSort,
        error
    };

    return (
        <TableComponent<IUser> table={tableProps}>
            <CustomSnackbars {...snackbarState} />
            <CustomDialog
                showWarning={showWarning}
                setShowWarning={setShowWarning}
                confirmAction={confirmAction}
                title={t.dialog("warning")}
                content={t.dialog("yourselfActionContent")}
            />
        </TableComponent>
    );

}
