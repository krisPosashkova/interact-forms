import { AuthError } from "next-auth";
import { IErrorResponse } from "@/types/api/apiResponse.types";
import { ERROR_CODES } from "@/utils/errors/constants";
import { getTranslationsFor } from "@/utils/getTranslationsFor";

interface AuthErrorMap {
    [key: string]: (error: AuthError, path?: string) => IErrorResponse;
}

const t = await getTranslationsFor("Errors");

const authErrorMap: AuthErrorMap = {
    CredentialsSignin: (_, path) => ({
        success: false,
        error: t.errors("invalidEmailOrPassword"),
        statusCode: 401,
        code: ERROR_CODES.AUTH.INVALID_CREDENTIALS,
        timestamp: new Date().toISOString(),
        path
    }),
    SessionRequired: (_, path) => ({
        success: false,
        error: t.errors("authenticationRequired"),
        statusCode: 401,
        code: ERROR_CODES.AUTH.SESSION_REQUIRED,
        timestamp: new Date().toISOString(),
        path
    }),
    CallbackRouteError: (_, path) => ({
        success: false,
        error: t.errors("authorizationError"),
        statusCode: 500,
        code: ERROR_CODES.AUTH.ERROR,
        timestamp: new Date().toISOString(),
        path
    })
};

export function handleAuthError(error: AuthError, path?: string): IErrorResponse {
    const handler = authErrorMap[error.type];
    if (handler) {
        return handler(error, path);
    }

    return {
        success: false,
        error: t.errors("authenticationRequired"),
        statusCode: 401,
        code: error.type,
        timestamp: new Date().toISOString(),
        path
    };
}