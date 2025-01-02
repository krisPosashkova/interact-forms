import TagsList from "@/components/UI/Tags/TagsList";
import Gallery from "@/components/Gallery/GalleryTemplates";

import { mockTags } from "@/mocks/mockTags";
import { ITemplateMock } from "@/types/api/template.types";

interface TemplatesListProps {
    templates: { name: string; data: ITemplateMock[] }[];
}

const TemplatesList = ({ templates }: TemplatesListProps) => {

    return (
        <>
            <TagsList tags={mockTags} />
            {templates.map((item, index) => (
                <Gallery
                    key={index}
                    category={item.name}
                    data={item.data}
                />
            ))}
        </>
    );
};
export default TemplatesList;