import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Box,
    Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "@/hooks/useSearch";
import { Close } from "@mui/icons-material";
import { Link } from "@/i18n/routing";
import { searchDialogStyles } from "./styled/searchDialog.styled";

interface SearchDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
    const { content, results, searchTerm, handleInputChange } = useSearch();
    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle sx={searchDialogStyles.title}>
                {content.title}
                <IconButton onClick={onClose} sx={searchDialogStyles.close}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={searchDialogStyles.content}>
                <TextField
                    type="search"
                    placeholder={content.placeholder}
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleInputChange}
                    slotProps={{
                        input: {
                            startAdornment: <SearchIcon sx={{ mr: 1.2 }} />,
                        },
                    }}
                />
                <Box sx={searchDialogStyles.box}>
                    {results.length > 0 ? (
                        <List sx={searchDialogStyles.list}>
                            {results.map((result, index) => (
                                <ListItem
                                    key={index}
                                    sx={searchDialogStyles.listItem}>
                                    <Button
                                        LinkComponent={Link}
                                        href={`/template/${result.id}`}
                                        sx={searchDialogStyles.link}>
                                        <ListItemText primary={result.title} />
                                        <ListItemText
                                            primary={result.description}
                                        />
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <p>{content.noResult}</p>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default SearchDialog;
