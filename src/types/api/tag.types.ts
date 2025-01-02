export interface ITagList {
    tags: ITag[];
}

export interface ITag {
    id: number;
    name: string;
}

export interface ITemplateTag {
    templateId: number;
    tagId: number;
    tag: ITag;
}