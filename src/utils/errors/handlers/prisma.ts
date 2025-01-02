import { Prisma } from "@prisma/client";
import { IErrorResponse } from "@/types/api/apiResponse.types";
import { DatabaseError } from "@/utils/errors/database";
import { getTranslationsFor } from "@/utils/getTranslationsFor";
import { ERROR_CODES } from "@/utils/errors/constants";

interface PrismaErrorMap {
    [key: string]: (errors: Prisma.PrismaClientKnownRequestError) => IErrorResponse;
}

const t = await getTranslationsFor("Errors");

const prismaErrorMap: PrismaErrorMap = {
    P2002: (error) => ({
        success: false,
        error: t.errors("duplicateEntry"),
        statusCode: 409,
        code: error.code,
        details: error.meta,
        timestamp: new Date().toISOString()
    }),
    P2025: (error) => ({
        success: false,
        error: t.errors("databaseRecordNotFound"),
        statusCode: 404,
        code: error.code,
        details: error.meta,
        timestamp: new Date().toISOString()
    }),
    P2003: (error) => ({
        success: false,
        error: t.errors("foreignKeyConstraintViolation"),
        statusCode: 400,
        code: error.code,
        details: error.meta,
        timestamp: new Date().toISOString()
    }),
    P2014: (error) => ({
        success: false,
        error: t.errors("conflictUpdatingData"),
        statusCode: 409,
        code: error.code,
        details: error.meta,
        timestamp: new Date().toISOString()
    })
};

export function handlePrismaError(error: unknown, path?: string): IErrorResponse {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const handler = prismaErrorMap[error.code];
        if (handler) {
            const response = handler(error);
            return { ...response, path };
        }
        return {
            success: false,
            error: t.errors("databaseError"),
            statusCode: 500,
            code: error.code,
            details: error.meta,
            timestamp: new Date().toISOString(),
            path
        };
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
        return {
            success: false,
            error: t.errors("validationError"),
            statusCode: 400,
            code: "VALIDATION_ERROR",
            details: error.message,
            timestamp: new Date().toISOString(),
            path
        };
    }

    throw new DatabaseError(
        t.errors("databaseUnknownError"),
        ERROR_CODES.DB.UNKNOWN,
        error
    );
}