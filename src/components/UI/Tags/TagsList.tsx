import { memo } from "react";
import { Stack } from "@mui/material";
import Tag from "./Tag";

interface TagsListProps {
    tags: { id: number | string; name: string }[];
}

const TagsList = ({ tags }: TagsListProps) => {
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            p={2}
            component="nav"
            aria-label="tags navigation"
        >
            <Tag label="All" />
            {tags.map((tag) => (
                <Tag key={tag.id} id={tag.id} label={tag.name} />
            ))}
        </Stack>
    );
};

export default memo(TagsList);
