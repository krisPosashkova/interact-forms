import { Box, Divider, Grid2, Typography } from "@mui/material";
import TemplateCard from "@/components/UI/Card/CardTemplate";
import { ITemplateMock } from "@/types/api/template.types";

interface GalleryProps {
    category: string;
    data: ITemplateMock[];
}

const Gallery = ({ data, category }: GalleryProps) => {
    return (
        <Box>
            <Divider><Typography component="h2" variant="h4" sx={{ margin: 2 }}>{category}</Typography></Divider>
            <Grid2 container spacing={1}>
                {data.map((template, index) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <TemplateCard
                            {...template}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box>

    );
};

export default Gallery;
