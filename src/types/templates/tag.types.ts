export interface ITag {
    id?: number | string;
    name: string;
}

export interface ITagList {
    tags: ITag[];
}