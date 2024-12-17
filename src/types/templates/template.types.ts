import {ITag} from "@/types/templates/tag.types";

export interface ITemplate {
    id: string | number;
    title: string;
    description: string;
    tags: ITag[];
    authorName: string
    imageUrl: string;
    isPublic: boolean;
    createdAt: string;
    updatedAt: string;
}
