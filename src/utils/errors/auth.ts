import {AppError} from "@/utils/errors/base";
import {ERROR_CODES} from "@/utils/errors/constants";

export class AuthenticationError extends AppError {
    constructor(message: string = 'Authentication failed', details?: unknown) {
        super(message, 401, ERROR_CODES.AUTH.ERROR, details);
    }
}

export class AuthorizationError extends AppError {
    constructor(message: string = 'Access denied', details?: unknown) {
        super(message, 403, ERROR_CODES.AUTH.FORBIDDEN, details);
    }
}