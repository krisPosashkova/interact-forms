"use client";
import { memo } from "react";
import { Chip } from "@mui/material";
import { Link } from "@/i18n/routing";
import { useActiveTag } from "@/hooks/useActiveTag";

interface TagProps {
    id?: number | string;
    label: string;
}

const Tag = ({ id, label }: TagProps) => {
    const { hrefTag, isActive } = useActiveTag(id);

    return (
        <Chip
            label={label}
            component={Link}
            href={hrefTag}
            variant={isActive ? "filled" : "outlined"}
            clickable
            color="primary"
            sx={{
                fontWeight: isActive ? "bold" : "normal",
                borderColor: isActive ? "secondary.main" : "primary.main",
            }}
        />
    );
};

export default memo(Tag);
