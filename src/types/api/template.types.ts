import { ITag, ITemplateTag } from "@/types/api/tag.types";
import { IUser } from "@/types/api/user.type";

export interface ITemplateMock {
    id: string | number;
    title: string;
    description: string | null;
    tags: ITag[];
    authorName: string;
    imageUrl: string;
    isPublic: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ITemplate {
    id: number;
    userId: number;
    title: string;
    description?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    isPublic?: boolean | null;
    templateTags: ITemplateTag[];
    user: IUser;
}