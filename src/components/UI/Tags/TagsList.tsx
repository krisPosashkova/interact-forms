import { memo } from "react";
import { Stack } from "@mui/material";
import Tag from "./Tag";
import {ITagList} from "@/types/templates/tag.types";



const TagsList = ({ tags }: ITagList) => {
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            p={2}
            component="nav"
            aria-label="tags navigation"
        >
            <Tag name="All" />
            {tags.map((tag) => (
                <Tag key={tag.id} id={tag.id} name={tag.name} />
            ))}
        </Stack>
    );
};

export default memo(TagsList);
