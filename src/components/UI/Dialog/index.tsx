import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    Button
} from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomDialogProps {
    showWarning: boolean;
    title: string;
    content: string;
    setShowWarning: (show: boolean) => void;
    confirmAction: () => void;
}

export default function CustomDialog({
                                         showWarning,
                                         title,
                                         content,
                                         setShowWarning,
                                         confirmAction
                                     }: CustomDialogProps) {
    const t = useTranslations("Event");
    return (
        <Dialog open={showWarning} onClose={() => setShowWarning(false)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShowWarning(false)} color="secondary">
                    {t("close")}
                </Button>
                <Button onClick={confirmAction} color="primary">
                    {t("proceed")}
                </Button>
            </DialogActions>
        </Dialog>
    );
}