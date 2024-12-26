import React from "react";

export const toggleState = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setState((prev) => !prev);
};
