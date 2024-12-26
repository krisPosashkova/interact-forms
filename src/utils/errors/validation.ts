import {AppError} from "@/utils/errors/base";
import {ERROR_CODES, ValidationErrorCode} from "@/utils/errors/constants";

export class ValidationError extends AppError {
    constructor(
        message: string,
        code: ValidationErrorCode,
        details?: unknown
    ) {
        super(message, 400, ERROR_CODES.VALIDATION[code], details);
    }
}