import React from "react";

export type Order = "asc" | "desc";
export type OrderBy<T> = keyof T;

export interface TableHeadProps<T> {
    headCells: readonly HeadCell<T>[];
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: OrderBy<T>;
    numSelected: number;
    rowCount: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
}

export type TableProps<T> = {
    data: TableData<T>;
    headCells: readonly HeadCell<T>[];
    title: string;
    alwaysVisibleActions?: Action[];
    conditionalActions?: Action[];
    columns: Columns<T>;
    error: string | null;
    loadingUsers: Record<number, boolean>;
} & Omit<UseTableReturn<T>, "setRows" | "setSelected" | "rows" | "setLoading">

export type Action = {
    icon: React.ReactNode;
    onClick: () => void;
    tooltip?: string;
    color?: "inherit" | "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning";
};


export interface HeadCell<T> {
    disablePadding: boolean;
    id: keyof T;
    label: string;
    numeric: boolean;
}

export interface TableToolbarProps {
    numSelected: number;
    title: string;
    alwaysVisibleActions?: Action[];
    conditionalActions?: Action[];
}

export type Column<T> = {
    id: keyof T | string;
    label: string;
    render: (row: T) => React.ReactNode;
};

export type Columns<T> = Column<T>[];

export type UseTableReturn<T> = {
    emptyRows: number;
    sortedRows: TableData<T>;
    selected: number[];
    setSelected: React.Dispatch<React.SetStateAction<number[]>>;
    order: Order;
    orderBy: OrderBy<T>;
    page: number;
    rowsPerPage: number;
    rows: TableData<T>;
    setRows: React.Dispatch<React.SetStateAction<TableData<T>>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    onChangePage: (newPage: number) => void;
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
    onClick: (event: React.MouseEvent<unknown>, id: number) => void;
};

export type TableData<T> = T[];


