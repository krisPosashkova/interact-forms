"use server";
import prisma from "@/lib/db";
import { handleError } from "@/utils/errors/handlers";
import { type ApiResponse, IErrorResponse, IUser } from "@/types/apiResponse.types";
import { Session } from "next-auth";
import { AuthorizationError } from "@/utils/errors/auth";
import { ERROR_CODES } from "@/utils/errors/constants";
import type { user_role as userRole } from "@prisma/client";
import { ValidationError } from "@/utils/errors/validation";
import { signOut } from "@/lib/auth";
import { getTranslations } from "next-intl/server";

export async function checkAdminRole(session: Session | null): Promise<{ success: true } | IErrorResponse> {

    if (!session || session.user?.role !== "admin") {
        return handleError(new AuthorizationError(
            ERROR_CODES.AUTH.FORBIDDEN
        ));
    }
    return { success: true };
}

export async function updateUserRole(
    userId: number,
    newRole: userRole,
    session: Session | null
): Promise<ApiResponse<IUser | null>> {
    const t = await getTranslations("Success");

    try {
        const checkRole = await checkAdminRole(session);

        if (!checkRole.success) {
            return checkRole;
        }

        const validRoles: userRole[] = ["admin", "user"];
        if (!validRoles.includes(newRole)) {

            return handleError(new ValidationError(
                "Invalid value",
                ERROR_CODES.VALIDATION.INVALID_VALUE
            ));
        }

        const updatedUser = await prisma.users.update({
            where: { id: userId },
            data: { role: newRole }
        });

        if (session?.user?.id && +session.user.id === userId) {
            await signOut({ redirect: false });
            return {
                success: true,
                data: updatedUser,
                redirect: true,
                message: t("updateRole", { newRole: `${newRole}` })
            };
        }

        return {
            success: true,
            data: updatedUser,
            message: t("updateRole", { newRole: `${newRole}` })
        };

    } catch (error) {
        return handleError(error);
    }
}

export async function deleteUser(userIds: number[], session: Session | null): Promise<ApiResponse<null>> {
    try {
        const t = await getTranslations();
        const checkRole = await checkAdminRole(session);

        if (!checkRole.success) {
            return checkRole;
        }

        await prisma.users.deleteMany({
            where: {
                id: {
                    in: userIds
                }
            }
        });

        if (userIds.includes(Number(session?.user?.id))) {
            await signOut({ redirect: false });
            return {
                success: true,
                data: null,
                redirect: true,
                message: t("Success.deleteUser")
            };
        }

        return {
            success: true,
            data: null,
            message: t("Success.deleteUser")
        };

    } catch (error) {
        return handleError(error);
    }
}

export async function getUsers(): Promise<ApiResponse<IUser[] | null>> {
    try {
        const t = await getTranslations();
        const users = await prisma.users.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true
            }
        });

        if (users.length === 0) {
            return {
                success: true,
                data: null,
                message: t("Errors.usersNotFound")
            };
        }

        return {
            success: true,
            data: users,
            message: t("Success.getUsers")
        };

    } catch (error) {
        return handleError(error);
    }
}
