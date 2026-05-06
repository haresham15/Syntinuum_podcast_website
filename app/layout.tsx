import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Navbar from "@/components/layout/Navbar";
import LockScreen from "@/components/ui/LockScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    metadataBase: new URL('https://syntinuumpodcast.com'),
    title: {
        default: "Syntinuum Podcast | Technology & Innovation Podcast | Emerging Tech, AI, Sustainability",
        template: "%s | Syntinuum Podcast"
    },
    description: "Syntinuum (formerly Adapt: Implementing Innovations) is a technology and innovation podcast by Haresh Murugesan. Each episode explores emerging tech, AI, wearable technology, sustainable innovation, hydrogen fuel cells, smart devices, neural interfaces, and the visionary founders building the future. Listen free on Spotify, Apple Podcasts, YouTube, Amazon Music, and Castbox. New episodes weekly at syntinuumpodcast.com.",
    keywords: [
        // Brand terms - exact match
        "Syntinuum", "Syntinuum Podcast", "Syntinuum Endless Evolutions",
        "syntinuumpodcast", "syntinuumpodcast.com", "www.syntinuumpodcast.com",
        "Syntinuum host", "Syntinuum episodes", "Syntinuum meaning",
        "Syntinuum podcast episodes", "Syntinuum technology", "Syntinuum AI",
        "what is Syntinuum", "Syntinuum interview", "Syntinuum youtube",
        "Syntinuum spotify", "Syntinuum apple podcasts", "Syntinuum amazon music",
        "Syntinuum season 1", "Syntinuum season 2", "Syntinuum season 3",
        // Legacy brand
        "Adapt Podcast", "Adapt Implementing Innovations", "Adapt podcast Ohio State",
        // Host
        "Haresh Murugesan", "Haresh Murugesan podcast", "Haresh Murugesan Syntinuum",
        "Haresh Murugesan Ohio State", "Haresh Murugesan technology",
        // Tech & Innovation - broad match
        "technology podcast", "innovation podcast", "tech podcast", "tech podcast 2024",
        "best tech podcasts", "new technology podcast", "technology podcast episodes",
        "emerging technology podcast", "product innovation podcast", "startup podcast",
        "AI podcast", "artificial intelligence podcast", "machine learning podcast",
        "sustainability podcast", "clean technology podcast", "green innovation",
        "wearable technology podcast", "smart technology podcast", "IoT podcast",
        "smart rings", "neural earbuds", "smart pen", "hydrogen fuel cell",
        "augmented reality surgery", "AR headset", "sustainable packaging",
        "AI art protection", "speech technology", "mental health tech",
        "smart mirror", "posture technology", "color scanning pen",
        "future technology podcast", "tech interviews", "tech founder interviews",
        // Topic-specific long-tails
        "podcast about innovation", "podcast about technology", "podcast about AI",
        "podcast about wearables", "podcast about sustainability",
        "podcast about emerging tech", "podcast about startup founders",
        "technology trends podcast", "innovation leadership podcast",
        "tech product reviews podcast", "hardware innovation podcast",
        // University & Location
        "Ohio State podcast", "OSU podcast", "college tech podcast",
        "Ohio State University podcast", "Columbus Ohio podcast"
    ],
    authors: [{ name: "Haresh Murugesan", url: "https://syntinuumpodcast.com" }],
    creator: "Haresh Murugesan",
    publisher: "Syntinuum",
    category: "Technology",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://syntinuumpodcast.com",
        title: "Syntinuum Podcast | Technology & Innovation | Emerging Tech, AI, Sustainability",
        description: "Syntinuum is a technology and innovation podcast exploring emerging tech, AI, wearable technology, sustainable innovation, and the visionary founders building the future. Listen free on Spotify, Apple Podcasts, YouTube, and more.",
        siteName: "Syntinuum Podcast",
        images: [
            {
                url: "/icon.png",
                width: 1200,
                height: 630,
                alt: "Syntinuum Podcast – Technology and Innovation Podcast by Haresh Murugesan",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Syntinuum Podcast – Technology & Innovation | Endless Evolutions",
        description: "Explore emerging tech, AI, wearable technology, sustainable innovation, and the founders building the future. Listen free on Spotify, Apple Podcasts, YouTube, and more.",
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
    verification: {
        google: "YOUR_GOOGLE_SEARCH_CONSOLE_HTML_TAG_ID_HERE",
        yandex: "YOUR_YANDEX_VERIFICATION_ID_HERE",
        // Bing uses a meta tag approach handled by the same field
        other: {
            'msvalidate.01': 'YOUR_BING_WEBMASTER_VERIFICATION_ID_HERE',
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
                <Analytics />
                <GoogleAnalytics gaId="G-YOUR_GA_MEASUREMENT_ID" />
            </body>
        </html>
    );
}
