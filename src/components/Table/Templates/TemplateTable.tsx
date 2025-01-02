"use client";
import { ITemplate } from "@/types/api/template.types";
import { TableComponent } from "@/components/Table/TableComponent";
import type { Session } from "next-auth";
import { Delete } from "@mui/icons-material";
import { useTranslations } from "next-intl";

import { Action } from "@/types/components/table.types";
import useTemplateTable from "@/components/Table/Templates/useTeplateTable";
import { Typography, Tooltip, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Link } from "@/i18n/routing";

type Props = {
    session: Session | null;
    templates: ITemplate[] | null;
};

export default function TemplateTable({ session, templates }: Props) {

    const t = useTranslations();

    const table = useTemplateTable(templates ?? [], session);
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
        handleDeleteTemplates,
        loading,
        error,
        loadingRows
    } = table;


    if (!templates || templates.length === 0) {
        return (
            <Typography variant={"h4"}>{t("TemplatesTable.emptyTable")}</Typography>
        );
    }

    const headCells = [
        {
            id: "title" as keyof ITemplate,
            numeric: false,
            disablePadding: false,
            sortable: true,
            label: t("TemplatesTable.titleTemplate")
        },
        {
            id: "description" as keyof ITemplate,
            numeric: false,
            disablePadding: false,
            sortable: true,
            label: t("TemplatesTable.description")
        },
        {
            id: "createdAt" as keyof ITemplate,
            numeric: false,
            disablePadding: false,
            sortable: true,
            label: t("TemplatesTable.createdAt")
        },
        {
            id: "updatedAt" as keyof ITemplate,
            numeric: false,
            disablePadding: false,
            sortable: true,
            label: t("TemplatesTable.updatedAt")
        },
        {
            id: "user" as keyof ITemplate,
            numeric: false,
            disablePadding: false,
            label: t("TemplatesTable.author"),
            sortable: true
        },
        {
            id: "templateTags" as keyof ITemplate,
            numeric: false,
            disablePadding: false,
            sortable: true,
            label: t("TemplatesTable.tags")
        },
        {
            id: "actions" as string,
            numeric: false,
            disablePadding: false,
            label: "",
            sortable: false
        }

    ];

    const columns = [
        { id: "title", label: "Title", render: (row: ITemplate) => row.title },
        { id: "description", label: "Description", render: (row: ITemplate) => row.description },
        {
            id: "updated_at",
            label: "Update",
            render: (row: ITemplate) =>
                row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "No data available"
        },
        {
            id: "created_at",
            label: "Created",
            render: (row: ITemplate) =>
                row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "No data available"
        },
        {
            id: "user",
            label: "User",
            render: (row: ITemplate) => row.user.username
        },
        {
            id: "tags",
            label: "Tags",
            render: (row: ITemplate) => row.templateTags.map(tag => tag.tag.name).join(", ")
        },
        {
            id: "actions",
            label: "Actions",
            render: (row: ITemplate) => (


                <Tooltip title={t("Event.editTemplate")}>
                    <IconButton
                        component={Link}
                        href={`/template/${row.id}`}
                        color="primary"
                        size="small"
                    >
                        <Edit />
                    </IconButton>
                </Tooltip>

            )
        }


    ];

    const conditionalActions: Action[] = [
        {
            icon: <Delete />,
            onClick: () => handleDeleteTemplates(selected),
            tooltip: t("Event.delete")

        }
    ];

    const tableProps = {
        data: templates,
        enableCheckbox: true,
        headCells,
        title: t("TemplatesTable.title"),
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
        loadingRows,
        onChangePage,
        onChangeRowsPerPage,
        onSelectAllClick,
        onClick,
        onRequestSort,
        error
    };

    return (
        <TableComponent<ITemplate> table={tableProps} />
    );

}
