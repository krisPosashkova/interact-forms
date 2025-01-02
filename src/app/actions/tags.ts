"use server";

import prisma from "@/lib/db";
import { handleError } from "@/utils/errors/handlers";
import { type ApiResponse } from "@/types/api/apiResponse.types";
import { getTranslations } from "next-intl/server";
import { ITag } from "@/types/api/tag.types";

export async function getAllTags(): Promise<ApiResponse<ITag[] | null>> {
    try {

        const t = await getTranslations("Success");
        const tags = await prisma.tag.findMany();

        if (tags.length === 0) {
            return {
                success: true,
                data: null,
                message: t("getTags")
            };
        }

        return {
            success: true,
            data: tags,
            message: t("getTags")
        };

    } catch (error) {
        return handleError(error);
    }
}