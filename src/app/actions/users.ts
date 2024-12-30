"use server";
import prisma from "@/lib/db";
import { handleError } from "@/utils/errors/handlers";
import { type ApiResponse, IUser } from "@/types/apiResponse.types";

export async function getUsers(): Promise<ApiResponse<IUser[]>> {
    try {
        const users = await prisma.users.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true
            }
        });


        return {
            success: true,
            data: users,
            message: "Successfully fetched users"
        };

    } catch (error) {
        return handleError(error);
    }
}