"use server";
import { auth } from "@/lib/auth";

import { Session } from "next-auth";
import UserLayout from "@/components/Layout/UserLayout";
import TemplateTable from "@/components/Table/Templates/TemplateTable";
import { getTemplatesForUser } from "@/app/actions/templates";
import { ITemplate } from "@/types/api/template.types";


export default async function AdminDashboardPage() {
    const session: Session | null = await auth();
    const templatesData = await getTemplatesForUser(session);
    const templates: ITemplate[] | null = templatesData.success ? templatesData.data : null;

    return (
        <UserLayout session={session}>
            <TemplateTable session={session} templates={templates} />
        </UserLayout>
    );
}
