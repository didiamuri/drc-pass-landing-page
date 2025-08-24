import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Locale } from "@/i18n/i18n.config";
import { getDictionary } from "@/i18n/dictionary";
import { Translation } from "@/types/translation";
import { Toaster } from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DRC Pass",
    description: "A simple app to manage your DRC passes.",
};

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode, params: Promise<{ locale: Locale }> }>) {

    const { locale } = await params;
    const param = await params;

    console.log("Locale in layout:", param);

    const dict: Translation = await getDictionary(locale);

    return (
        <html lang={(await params).locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster position="bottom-center" richColors />
                <Header dictionary={dict} />
                {children}
                <Footer dictionary={dict} />
            </body>
        </html>
    );
}
