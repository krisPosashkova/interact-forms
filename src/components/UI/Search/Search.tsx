"use client";
import React from "react";
import { IconButton, Typography, Container } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "@/hooks/useSearch";
import { useSearchDialog } from "@/hooks/useSearchDialog";
import { searchStyles } from "./styled/search.styled";
import SearchDialog from "./SearchDialog";

const SearchComponent = () => {
    const { isDialogOpen, handleOpenDialog, handleCloseDialog } =
        useSearchDialog();
    const { content } = useSearch();

    return (
        <Container maxWidth="xl" sx={searchStyles.root}>
            <IconButton
                aria-label="open search"
                onClick={handleOpenDialog}
                sx={searchStyles.button}>
                <SearchIcon />
                <Typography variant="h5" component="p">
                    {content.title}
                </Typography>
                <Typography variant="caption" sx={searchStyles.caption}>
                    Ctrl+K
                </Typography>
            </IconButton>

            <SearchDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
        </Container>
    );
};

export default SearchComponent;
