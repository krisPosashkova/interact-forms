"use server";
import prisma from "@/lib/db";
import { handleError } from "@/utils/errors/handlers";
import { type ApiResponse } from "@/types/api/apiResponse.types";
import { IUser } from "@/types/api/user.type";
import { Session } from "next-auth";
import { ERROR_CODES } from "@/utils/errors/constants";
import type { UserRole } from "@prisma/client";
import { ValidationError } from "@/utils/errors/validation";
import { signOut } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { checkAdminRole } from "@/app/actions/auth";

export async function updateUserRole(
    userId: number,
    newRole: UserRole,
    session: Session | null
): Promise<ApiResponse<IUser | null>> {
    const t = await getTranslations("Success");

    try {
        const checkRole = await checkAdminRole(session);

        if (!checkRole.success) {
            return checkRole;
        }

        const validRoles: UserRole[] = ["admin", "user"];
        if (!validRoles.includes(newRole)) {

            return handleError(new ValidationError(
                "Invalid value",
                ERROR_CODES.VALIDATION.INVALID_VALUE
            ));
        }

        const updatedUser = await prisma.user.update({
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

        await prisma.user.deleteMany({
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
                message: t("Success.delete")
            };
        }

        return {
            success: true,
            data: null,
            message: t("Success.delete")
        };

    } catch (error) {
        return handleError(error);
    }
}

export async function getUsers(): Promise<ApiResponse<IUser[] | null>> {
    try {
        const t = await getTranslations();
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true
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
