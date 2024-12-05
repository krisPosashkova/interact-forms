import React, { memo } from "react";
import { ListItem } from "@mui/material";

interface ListItemsProps {
    items: React.ReactNode[];
    nameComponent: React.ElementType;
    className?: string;
}

const ListItems: React.FC<ListItemsProps> = ({
    items,
    nameComponent,
    className,
}) => {
    return (
        <>
            {items.map((item, index) => (
                <ListItem
                    component={nameComponent}
                    key={index}
                    className={className}>
                    {item}
                </ListItem>
            ))}
        </>
    );
};

export default memo(ListItems);
