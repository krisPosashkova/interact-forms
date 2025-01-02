"use server";
import { auth } from "@/lib/auth";
import AdminLayout from "@/components/Layout/AdminLayout";

import { Session } from "next-auth";

import { getTemplatesForAdmin } from "@/app/actions/templates";
import { ITemplate } from "@/types/api/template.types";
import TemplateTable from "@/components/Table/Templates/TemplateTable";


export default async function AdminDashboardTemplatesPage() {
    const session: Session | null = await auth();
    const templatesData = await getTemplatesForAdmin(session);
    const templates: ITemplate[] | null = templatesData.success ? templatesData.data : null;

    return (
        <AdminLayout session={session}>
            <TemplateTable session={session} templates={templates} />
        </AdminLayout>
    );
};
