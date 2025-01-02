import React from "react";
import {
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel,
    Checkbox,
    Box
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { TableHeadProps } from "@/types/components/table.types";

type Props<T> = {
    data: TableHeadProps<T>
}

function TableHeadComponent<T>({ data }: Props<T>) {
    const { headCells, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, enableCheckbox } = data;

    const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {enableCheckbox && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{
                                "aria-label": "select all items"
                            }}
                        />
                    </TableCell>
                )}
                {headCells.map((headCell, index) => (
                    <TableCell
                        key={index}
                        align={headCell.align || (headCell.numeric ? "right" : "left")}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={headCell.sortable && orderBy === headCell.id ? order : false}
                        sx={{
                            fontWeight: "700"
                        }}
                    >
                        {headCell.sortable ? (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : "asc"}
                                onClick={createSortHandler(headCell.id as keyof T)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}

                <TableCell
                    align="left"
                    padding="none"
                    sx={{ width: 60, textAlign: "center" }}
                >

                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export default TableHeadComponent;
