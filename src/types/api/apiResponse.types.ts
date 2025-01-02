import { UserRole } from "@prisma/client";
import { IUser } from "@/types/api/user.type";

export interface ISuccessResponse<T = unknown> {
    data: T;
    success: true;
    message: string;
    redirect?: boolean;
}

export interface IErrorResponse {
    success: false;
    error: string;
    statusCode: number;
    code?: string;
    details?: unknown;
    timestamp?: string;
    path?: string;
}

export type ApiResponse<T> = IErrorResponse | ISuccessResponse<T>;


export type DeleteResponse = ApiResponse<null>;
export type UpdateRoleResponse = ApiResponse<IUser | null>;

export type DeleteActionHandler = (selected: number[]) => Promise<ApiResponse<null>>;
export type DeleteTemplatesActionHandler = (selected: number[] | number) => Promise<ApiResponse<null>>;
export type UpdateRoleActionHandler = (id: number, newRole: UserRole) => Promise<ApiResponse<IUser | null>>;

export type ActionHandlers = {
    delete?: DeleteActionHandler;
    updateRole?: UpdateRoleActionHandler;
    deleteTemplates?: DeleteTemplatesActionHandler
};