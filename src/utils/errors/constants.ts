export const ERROR_CODES = {

    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    NOT_FOUND: 'NOT_FOUND',

    AUTH: {
        ERROR: 'AUTH_ERROR',
        INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
        SESSION_REQUIRED: 'AUTH_REQUIRED',
        FORBIDDEN: 'FORBIDDEN',
        TOKEN_EXPIRED: 'TOKEN_EXPIRED',
        INVALID_TOKEN: 'INVALID_TOKEN',
        DUPLICATE_USER: 'DUPLICATE_USER'
    },

    DB: {
        ERROR: 'DB_ERROR',
        UNKNOWN: 'UNKNOWN_DB_ERROR',
        DUPLICATE: 'DUPLICATE_ENTRY',
        FOREIGN_KEY: 'FOREIGN_KEY_VIOLATION',
        CONNECTION: 'CONNECTION_ERROR',
        TRANSACTION: 'TRANSACTION_ERROR'
    },

    VALIDATION: {
        REQUIRED_FIELD: 'REQUIRED_FIELD',
        INVALID_FORMAT: 'INVALID_FORMAT',
        INVALID_LENGTH: 'INVALID_LENGTH',
        INVALID_VALUE: 'INVALID_VALUE'
    },

    PRISMA: {
        P2002: 'P2002', // Unique constraint violation
        P2025: 'P2025', // Record not found
        P2003: 'P2003', // Foreign key constraint violation
        P2014: 'P2014'  // Relation violation
    },

    HTTP: {
        BAD_REQUEST: 'BAD_REQUEST',
        UNAUTHORIZED: 'UNAUTHORIZED',
        FORBIDDEN: 'FORBIDDEN',
        NOT_FOUND: 'NOT_FOUND',
        CONFLICT: 'CONFLICT',
        INTERNAL_ERROR: 'INTERNAL_ERROR'
    }
} as const;

export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES];
export type AuthErrorCode = typeof ERROR_CODES.AUTH[keyof typeof ERROR_CODES.AUTH];
export type DBErrorCode = typeof ERROR_CODES.DB[keyof typeof ERROR_CODES.DB];
export type ValidationErrorCode = typeof ERROR_CODES.VALIDATION[keyof typeof ERROR_CODES.VALIDATION];
export type PrismaErrorCode = typeof ERROR_CODES.PRISMA[keyof typeof ERROR_CODES.PRISMA];
export type HTTPErrorCode = typeof ERROR_CODES.HTTP[keyof typeof ERROR_CODES.HTTP];

export const HTTP_STATUS_CODES: Record<HTTPErrorCode, number> = {
    [ERROR_CODES.HTTP.BAD_REQUEST]: 400,
    [ERROR_CODES.HTTP.UNAUTHORIZED]: 401,
    [ERROR_CODES.HTTP.FORBIDDEN]: 403,
    [ERROR_CODES.HTTP.NOT_FOUND]: 404,
    [ERROR_CODES.HTTP.CONFLICT]: 409,
    [ERROR_CODES.HTTP.INTERNAL_ERROR]: 500
};