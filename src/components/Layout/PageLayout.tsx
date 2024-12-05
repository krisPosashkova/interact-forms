import { ReactNode } from "react";
import Header from "@/components/Header/Header";

type Props = {
    children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
