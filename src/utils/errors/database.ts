import {AppError} from "@/utils/errors/base";
import {DBErrorCode, ERROR_CODES} from "@/utils/errors/constants";

export class DatabaseError extends AppError {
    constructor(message: string, code?: DBErrorCode, details?: unknown) {
        super(message, 500, ERROR_CODES.DB[code as keyof typeof ERROR_CODES.DB], details);

    }
}
