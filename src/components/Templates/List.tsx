import TagsList from "@/components/UI/Tags/TagsList";
import Gallery from "@/components/Gallery/GalleryTemplates";

import { ITemplate, ITemplateWithoutTags } from "@/types/api/template.types";
import { ITag } from "@/types/api/tag.types";

interface TemplatesListProps {
    templates: { name: string; data: ITemplate[] | ITemplateWithoutTags[] | null }[];
    tags: ITag[] | null;
}

const TemplatesList = ({ templates, tags }: TemplatesListProps) => {

    return (
        <>
            {tags && (<TagsList tags={tags} />)}

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