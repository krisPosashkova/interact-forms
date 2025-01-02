"use server";
import { auth } from "@/lib/auth";

import { Session } from "next-auth";
import UserLayout from "@/components/Layout/UserLayout";


export default async function AdminDashboardPage() {
    const session: Session | null = await auth();

    return (
        <UserLayout session={session}>

        </UserLayout>
    );
}
