import { ReactNode } from "react";
import PageLayout from "@/components/Layout/PageLayout";

type Props = {
    children?: ReactNode;
};

export default function PageNotFoundLayout({ children }: Props) {
    return (
        <PageLayout>
            {children}
        </PageLayout>
    );
}
