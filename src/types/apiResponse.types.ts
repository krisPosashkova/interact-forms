import { user_role as userRole } from "@prisma/client";

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

export interface IUser {
    id: number | string;
    username: string;
    email: string;
    role: string | null;
    created_at: string | Date | null;
    updated_at: string | Date | null;
}

export type DeleteResponse = ApiResponse<null>;
export type UpdateRoleResponse = ApiResponse<IUser | null>;

export type DeleteActionHandler = (selected: number[]) => Promise<ApiResponse<null>>;
export type UpdateRoleActionHandler = (id: number, newRole: userRole) => Promise<ApiResponse<IUser | null>>;

export type ActionHandlers = {
    delete: DeleteActionHandler;
    updateRole: UpdateRoleActionHandler;
};