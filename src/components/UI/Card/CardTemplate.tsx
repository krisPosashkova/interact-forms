import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import {ITemplate} from "@/types/templates/template.types";
import { useTranslations} from "next-intl";
import { Link } from "@/i18n/routing";
import { cardTemplateStyles } from "./styled/cardTemplate.styled";

const TemplateCard = ({
    id,
    title,
    description,
    imageUrl,
    authorName,
}: ITemplate) => {
    const t = useTranslations("Template")
    return (
    <Link href={`/template/${id}`}>
        <Card sx={cardTemplateStyles.root}>
            <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "700" }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                >
                    {description}
                </Typography>
                <Box sx={{ marginTop: 2, textAlign: "right" }}>
                    <Typography variant="caption" color="text.secondary">
                        {t("author")}: {authorName}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Link>

    );
};

export default TemplateCard;
