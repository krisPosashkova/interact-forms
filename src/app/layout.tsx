import type { Metadata } from "next";
import { Inter, Zen_Dots } from "next/font/google";
import AppThemeProvider from "@/providers/AppThemeProvider";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-primary",
    display: "swap",
});

const zen_dots = Zen_Dots({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-secondary",
    display: "swap",
});

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
        <html
            lang="en"
            className={`${inter.variable} ${zen_dots.variable}`}
            suppressHydrationWarning>
            <body>
                <InitColorSchemeScript attribute="data" />

                <AppThemeProvider>{children}</AppThemeProvider>
            </body>
        </html>
    );
}
