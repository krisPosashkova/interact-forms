import { ITemplateTag } from "@/types/api/tag.types";
import { IUser } from "@/types/api/user.type";

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

export type ITemplateWithoutTags = Omit<ITemplate, "templateTags">;