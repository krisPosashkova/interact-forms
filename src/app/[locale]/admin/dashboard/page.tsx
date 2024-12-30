"use server";
import { auth } from "@/lib/auth";

import AdminLayout from "@/components/Layout/AdminLayout";
import { Session } from "next-auth";


export default async function AdminDashboardPage() {
    const session: Session | null = await auth();

    return (
        <AdminLayout session={session}>

        </AdminLayout>
    );
}
