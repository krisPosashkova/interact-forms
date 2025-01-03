"use server";
import { auth } from "@/lib/auth";
import AdminLayout from "@/components/Layout/AdminLayout";

import { Session } from "next-auth";
import { getUsers } from "@/app/actions/users";
import { IUser } from "@/types/api/user.type";
import UsersTable from "@/components/Table/Users/UsersTable";


export default async function AdminDashboardUserPage() {
    const session: Session | null = await auth();
    const usersData = await getUsers();
    const users: IUser[] | null = usersData.success ? usersData.data : null;

    return (
        <AdminLayout session={session}>
            <UsersTable session={session} users={users} />
        </AdminLayout>
    );
};
