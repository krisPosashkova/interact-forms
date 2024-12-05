import BaseLayout from "@/components/Layout/BaseLayout";
import { routing } from "@/i18n/routing";

export default function GlobalNotFound() {
    return (
        <BaseLayout locale={routing.defaultLocale}>
            <div>Not found | 404</div>
        </BaseLayout>
    );
}
