import React from "react";
import {
    Table,
    TableBody,
    TableContainer,
    TablePagination,
    TableRow,
    TableCell,
    Checkbox,
    Box,
    Paper,
    Skeleton,
    CircularProgress
} from "@mui/material";

import { TableProps } from "@/types/components/table.types";
import TableHeadComponent from "@/components/Table/TableHeadComponent";

import TableToolbarComponent from "@/components/Table/TableToolbarComponent";

type Props<T> = {
    table: TableProps<T>;
    children?: React.ReactNode
}

export function TableComponent<T extends { id: number | string }>({ table, children }: Props<T>) {
    const {
        data,
        headCells,
        title,
        conditionalActions,
        columns,
        alwaysVisibleActions,
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
        loading,
        error,
        loadingRows,
        enableCheckbox
    } = table;

    const tableHeadProps = {
        headCells: headCells,
        onSelectAllClick: onSelectAllClick,
        order: order,
        orderBy: orderBy,
        numSelected: selected.length,
        rowCount: data.length,
        onRequestSort: onRequestSort,
        enableCheckbox: enableCheckbox
    };

    const tableToolbarProps = {
        numSelected: selected.length,
        title: title,
        conditionalActions: conditionalActions,
        alwaysVisibleActions: alwaysVisibleActions
    };

    if (loading) {
        return (
            <Box sx={{ width: "100%" }}>
                <Skeleton variant="rectangular" width="100%" height="450px" />
            </Box>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Box sx={{ display: "grid", width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2, overflow: "auto" }}>

                <TableToolbarComponent data={tableToolbarProps} />

                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">

                        <TableHeadComponent<T> data={tableHeadProps} />
                        <TableBody>
                            {sortedRows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    const isItemSelected = selected.includes(+row.id);
                                    const labelId = `enhanced-table-checkbox-${row.id}`;
                                    return (
                                        <TableRow
                                            hover
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}>

                                            {enableCheckbox && (
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        onClick={(event) =>
                                                            onClick(event, Number(row.id))
                                                        }
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            "aria-labelledby":
                                                            labelId
                                                        }}
                                                    />
                                                </TableCell>
                                            )}
                                            {columns.map((column, index) => (
                                                <TableCell key={index}>{column.render(row)}</TableCell>
                                            ))}
                                            <TableCell
                                                align="left"
                                                padding="none"
                                                sx={{ width: 60, textAlign: "center" }}
                                            >
                                                {loadingRows[+row.id] ? (
                                                    <CircularProgress
                                                        size={24}
                                                    />
                                                ) : null}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={headCells.length + 1} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    sx={{
                        "& .MuiTablePagination-toolbar": {
                            padding: 2
                        },
                        "& .MuiTablePagination-selectLabel": {
                            display: "none"
                        }
                    }}
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(_, newPage) => onChangePage(newPage)}
                    onRowsPerPageChange={(e) => onChangeRowsPerPage(e as React.ChangeEvent<HTMLInputElement>)}
                />
            </Paper>
            {children}
        </Box>
    );
}
