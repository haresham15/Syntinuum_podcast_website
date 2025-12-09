import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Navbar from "@/components/layout/Navbar";
import LockScreen from "@/components/ui/LockScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: "Syntinuum: Endless Evolution",
    description: "Helping the World Adapt to its Growing Challenges in the World through Innovation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                suppressHydrationWarning
                className={clsx(
                    inter.variable,
                    jetbrainsMono.variable,
                    "antialiased bg-background text-foreground bg-grid min-h-screen selection:bg-neon-primary selection:text-black"
                )}
            >
                <LockScreen />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
