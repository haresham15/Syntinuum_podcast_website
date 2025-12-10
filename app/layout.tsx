import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Navbar from "@/components/layout/Navbar";
import LockScreen from "@/components/ui/LockScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    metadataBase: new URL('https://syntinuum.vercel.app'),
    title: {
        default: "Syntinuum - Adapting to Innovation",
        template: "%s | Syntinuum"
    },
    description: "Join us on Syntinuum as we explore how humanity adapts to technological innovations and growing global challenges.",
    keywords: ["Syntinuum", "Podcast", "Technology", "Innovation", "Adaptation", "Future", "AI", "Society"],
    authors: [{ name: "Syntinuum Team" }],
    creator: "Syntinuum Team",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://syntinuum.vercel.app",
        title: "Syntinuum - Adapting to Innovation",
        description: "Join us on Syntinuum as we explore how humanity adapts to technological innovations and growing global challenges.",
        siteName: "Syntinuum",
        images: [
            {
                url: "/icon.png",
                width: 1200,
                height: 630,
                alt: "Syntinuum Podcast",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Syntinuum - Adapting to Innovation",
        description: "Join us on Syntinuum as we explore how humanity adapts to technological innovations and growing global challenges.",
        images: ["/icon.png"],
    },
    icons: {
        icon: "/icon.png",
        shortcut: "/icon.png",
        apple: "/icon.png",
    },
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
