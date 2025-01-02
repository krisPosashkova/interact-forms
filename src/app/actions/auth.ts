"use server";

import { signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { hash } from "bcryptjs";
import { handleError } from "@/utils/errors/handlers";
import { ValidationError } from "@/utils/errors/validation";
import { AuthenticationError, AuthorizationError } from "@/utils/errors/auth";
import { ERROR_CODES } from "@/utils/errors/constants";
import { getTranslationsFor } from "@/utils/getTranslationsFor";
import { ApiResponse, IErrorResponse } from "@/types/api/apiResponse.types";
import { Session } from "next-auth";

export const checkAdminRole = async (session: Session | null): Promise<{ success: true } | IErrorResponse> => {
    if (!session || session.user?.role !== "admin") {
        return handleError(new AuthorizationError(
            ERROR_CODES.AUTH.FORBIDDEN
        ));
    }
    return { success: true };
};

export const checkAuthorRole = async (templateIds: number[], session: Session | null): Promise<{
    success: true
} | IErrorResponse> => {
    if (!session || !session.user?.id) {
        return handleError(new AuthorizationError(
            ERROR_CODES.AUTH.FORBIDDEN
        ));
    }

    const userId = parseInt(session.user.id, 10);

    const templates = await prisma.template.findMany({
        where: { id: { in: templateIds } },
        select: { userId: true }
    });

    const allOwnedByUser = templates.every(template => template.userId === userId);

    if (!allOwnedByUser) {
        return handleError(new AuthorizationError(
            ERROR_CODES.AUTH.FORBIDDEN
        ));
    }

    return { success: true };
};

export const login = async (provider: string) => {
    await signIn(provider, { redirectTo: "/" });
    revalidatePath("/");
};

export const loginWithCreds = async (
    formData: Record<string, string>
): Promise<ApiResponse<null>> => {
    try {
        const t = await getTranslationsFor("Errors", "Success");
        const { email, password } = formData;

        if (!email || !password) {
            return handleError(new ValidationError(
                t.errors("allFieldsRequired"),
                ERROR_CODES.VALIDATION.REQUIRED_FIELD
            ));
        }

        const rawFormData = {
            email: email,
            password: password,
            redirect: false
        };
        await signIn("credentials", rawFormData);

        revalidatePath("/");
        return {
            success: true,
            redirect: true,
            data: null,
            message: t.success("loginSuccessful")
        };

    } catch (error) {
        return handleError(error);
    }
};

export const logout = async () => {
    await signOut({ redirectTo: "/signin" });
};

export async function register<T>(
    formData: Record<string, string>
): Promise<ApiResponse<T>> {
    try {
        const t = await getTranslationsFor("Errors", "Success");
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            return handleError(new ValidationError(
                t.errors("allFieldsRequired"),
                ERROR_CODES.VALIDATION.REQUIRED_FIELD
            ));
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return handleError(new AuthenticationError(
                t.errors("userAlreadyExists"),
                ERROR_CODES.AUTH.DUPLICATE_USER
            ));
        }

        const hashedPassword = await hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username: name,
                email,
                passwordHash: hashedPassword,
                role: "user"
            }
        });

        return {
            data: user as T,
            success: true,
            message: t.success("registrationSuccessful")
        };
    } catch (error) {
        return handleError(error);
    }
}
