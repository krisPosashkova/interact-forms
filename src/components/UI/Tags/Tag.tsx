"use client";
import { memo } from "react";
import { Chip } from "@mui/material";
import { Link } from "@/i18n/routing";
import { useActiveTag } from "@/hooks/useActiveTag";
import {ITag} from "@/types/templates/tag.types"


const Tag = ({ id, name }: ITag) => {
    const { hrefTag, isActive } = useActiveTag(id);

    return (
        <Chip
            label={name}
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
