"use server";

import prisma from "@/lib/db";
import { handleError } from "@/utils/errors/handlers";
import { type ApiResponse } from "@/types/api/apiResponse.types";
import { Session } from "next-auth";
import { getTranslations } from "next-intl/server";
import { checkAdminRole, checkAuthorRole } from "@/app/actions/auth";
import { ITemplate } from "@/types/api/template.types";
import { AuthorizationError } from "@/utils/errors/auth";
import { ERROR_CODES } from "@/utils/errors/constants";

export async function getTemplatesForAdmin(session: Session | null): Promise<ApiResponse<ITemplate[] | null>> {
    try {
        const checkRole = await checkAdminRole(session);
        if (!checkRole.success) {
            return checkRole;
        }

        const t = await getTranslations("Success");

        const templates: ITemplate[] = await prisma.template.findMany({
            include: {
                templateTags: {
                    include: {
                        tag: true
                    }
                },
                user: true
            }
        });

        console.log(templates);

        return {
            success: true,
            data: templates,
            message: t("getTemplates")
        };

    } catch (error) {
        return handleError(error);
    }
}

export async function getTemplatesForUser(session: Session | null): Promise<ApiResponse<ITemplate[] | null>> {
    try {

        if (!session || !session.user?.id) {
            return handleError(new AuthorizationError(
                ERROR_CODES.AUTH.FORBIDDEN
            ));
        }

        const userId = +session.user.id;

        const t = await getTranslations("Success");

        // Находим шаблоны, принадлежащие текущему пользователю
        const templates: ITemplate[] = await prisma.template.findMany({
            where: {
                userId: userId
            },
            include: {
                templateTags: {
                    include: {
                        tag: true
                    }
                },
                user: true
            }
        });

        return {
            success: true,
            data: templates,
            message: t("getTemplates")
        };

    } catch (error) {
        return handleError(error);
    }
}


export async function deleteTemplates(ids: number[] | number, session: Session | null): Promise<ApiResponse<null>> {
    try {

        const checkRole = await checkAdminRole(session);
        const templateIds = Array.isArray(ids) ? ids : [ids];

        if (!checkRole.success) {
            const checkAuthor = await checkAuthorRole(templateIds, session);

            if (!checkAuthor.success) {
                return checkAuthor;
            }
        }

        await prisma.template.deleteMany({
            where: { id: { in: templateIds } }
        });

        return {
            success: true,
            data: null,
            message: "Templates deleted successfully"
        };


    } catch (error) {
        return handleError(error);
    }
}