// import type { Metadata } from "next";
import {ReactNode} from "react";
import {Inter, Zen_Dots} from "next/font/google";
import AppThemeProvider from "@/providers/AppThemeProvider";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/lib/auth";

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

// export const metadata: Metadata = {
//     title: "Interact forms",
//     description:
//         "Interact Forms – a versatile tool for creating interactive forms, surveys, and questionnaires. It offers flexibility and ease of customization, ensuring a seamless user experience. Perfect for data collection, process automation, and audience engagement.",
// };

type Props = {
    children: ReactNode;
    locale: string;
};

export default async function BaseLayout({children, locale}: Props) {
    const messages = await getMessages();
    const session = await auth();

    return (
        <SessionProvider session={session}>

            <html
                lang={locale}
                className={`${inter.variable} ${zen_dots.variable}`}
                suppressHydrationWarning>
            <body>
            <NextIntlClientProvider messages={messages}>
                <InitColorSchemeScript attribute="data"/>
                <AppThemeProvider>{children}</AppThemeProvider>
            </NextIntlClientProvider>


            </body>
            </html>
        </SessionProvider>

    );
}
