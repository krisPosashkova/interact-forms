import { IErrorResponse } from "@/types/api/apiResponse.types";
import { handlePrismaError } from "@/utils/errors/handlers/prisma";
import { handleAuthError } from "@/utils/errors/handlers/auth";
import { AppError } from "@/utils/errors/base";
import { AuthError } from "next-auth";
import { Prisma } from "@prisma/client";
import { ERROR_CODES } from "@/utils/errors/constants";
import { getTranslationsFor } from "@/utils/getTranslationsFor";

const t = await getTranslationsFor("Errors");

export function handleError(error: unknown): IErrorResponse {
    if (error instanceof AppError) {
        return {
            success: false,
            error: error.message,
            statusCode: error.statusCode,
            code: error.code,
            details: error.details
        };
    }

    if (
        error instanceof Prisma.PrismaClientKnownRequestError ||
        error instanceof Prisma.PrismaClientValidationError
    ) {
        return handlePrismaError(error);
    }

    if (error instanceof AuthError) {
        return handleAuthError(error);
    }

    return {
        success: false,
        error: t.errors("unknownError"),
        statusCode: 500,
        code: ERROR_CODES.VALIDATION_ERROR,
        details: process.env.NODE_ENV === "development" ? error : undefined
    };
}