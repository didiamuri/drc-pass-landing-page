import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { i18n } from "@/i18n/i18n.config";
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

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({
        locale,
    }));
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode, params: Promise<{ locale: string }> }>) {

    const { locale } = await params;
    const dictionary: Translation = await getDictionary(locale);

    return (
        <html lang={(await params).locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Toaster position="bottom-center" richColors />
                <Header dictionary={dictionary} />
                {children}
                <Footer dictionary={dictionary} />
            </body>
        </html>
    );
}
