export interface IUser {
    id: number | string;
    username: string;
    email: string;
    role: string | null;
    createdAt: string | Date | null;
    updatedAt: string | Date | null;
}