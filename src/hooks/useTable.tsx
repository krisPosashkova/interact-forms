import React, { useState, useEffect } from "react";
import { Order, OrderBy } from "@/types/components/table.types";
import { getComparator } from "@/utils/sorting";
import { createRows } from "@/utils/createRows";


import { UseTableReturn, TableData } from "@/types/components/table.types";


const useTable = <T extends { id: number | string }>(
    data: TableData<T> | null
): UseTableReturn<T> => {

    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<OrderBy<T>>("id");
    const [selected, setSelected] = useState<number[]>([]);

    const [rows, setRows] = useState<TableData<T>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        if (data) {
            setLoading(true);
            setRows(createRows(data));
            setLoading(false);
        }
    }, [data]);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const sortedRows = rows.slice().sort(getComparator(order, orderBy));

    const onChangePage = (newPage: number) => setPage(newPage);
    const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const onClick = (event: React.MouseEvent<unknown>, id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        );
    };
    const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.checked ? rows.map((n) => +n.id) : []);
    };


    const onRequestSort = (event: React.MouseEvent<unknown>, property: keyof T) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    return {
        emptyRows,
        sortedRows,
        selected,
        setSelected,
        order,
        orderBy,
        page,
        rows,
        setRows,
        rowsPerPage,
        loading,
        setLoading,
        onChangePage,
        onChangeRowsPerPage,
        onSelectAllClick,
        onClick,
        onRequestSort
    };
};

export default useTable;
