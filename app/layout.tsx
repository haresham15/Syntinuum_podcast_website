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
        default: "Syntinuum Podcast | Technology & Innovation Podcast | Endless Evolutions",
        template: "%s | Syntinuum Podcast"
    },
    description: "Syntinuum (formerly Adapt) is a technology and innovation podcast exploring emerging tech, product innovation, and the leaders building the future. Hosted by Haresh Murugesan. Listen on Spotify, Apple Podcasts, YouTube, and more.",
    keywords: [
        "Syntinuum", "Syntinuum Podcast", "Syntinuum Endless Evolutions",
        "technology podcast", "innovation podcast", "tech podcast",
        "emerging technology", "product innovation", "startup podcast",
        "AI podcast", "sustainability podcast", "wearable technology",
        "smart technology", "tech interviews", "future technology",
        "Haresh Murugesan", "Adapt Podcast", "Ohio State podcast",
        "podcast about innovation", "podcast about technology",
        "best tech podcasts", "new technology podcast"
    ],
    authors: [{ name: "Haresh Murugesan", url: "https://syntinuum.vercel.app" }],
    creator: "Haresh Murugesan",
    publisher: "Syntinuum",
    category: "Technology",
    alternates: {
        canonical: "https://syntinuum.vercel.app",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://syntinuum.vercel.app",
        title: "Syntinuum Podcast | Technology & Innovation | Endless Evolutions",
        description: "Syntinuum is a technology and innovation podcast exploring emerging tech, product innovation, and the leaders building the future. Listen on Spotify, Apple Podcasts, YouTube, and more.",
        siteName: "Syntinuum Podcast",
        images: [
            {
                url: "/icon.png",
                width: 1200,
                height: 630,
                alt: "Syntinuum Podcast – Technology and Innovation Podcast",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Syntinuum Podcast – Technology & Innovation | Endless Evolutions",
        description: "Explore emerging tech, product innovation, and the leaders building the future. Listen on Spotify, Apple Podcasts, YouTube, and more.",
        images: ["/icon.png"],
        creator: "@AdaptPodcastCo",
    },
    icons: {
        icon: "/icon.png",
        shortcut: "/icon.png",
        apple: "/icon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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
