import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interact forms",
    description:
        "Interact Forms – a versatile tool for creating interactive forms, surveys, and questionnaires. It offers flexibility and ease of customization, ensuring a seamless user experience. Perfect for data collection, process automation, and audience engagement.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
