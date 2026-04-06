import { getAllEpisodes } from "@/lib/episodes";
import Link from "next/link";
import { Metadata } from "next";
import EpisodeSearch from "@/components/features/EpisodeSearch";

export const metadata: Metadata = {
    title: "All Episodes – Syntinuum Podcast",
    description: "Browse every episode of the Syntinuum Podcast. Explore interviews with tech founders, innovators, and visionaries covering AI, wearable technology, sustainable innovation, smart devices, neural interfaces, and more. Listen on Spotify, Apple Podcasts, YouTube, and Amazon Music.",
    keywords: [
        "Syntinuum episodes", "Syntinuum Podcast episodes", "all Syntinuum episodes",
        "technology podcast episodes", "innovation podcast episodes", "tech interview episodes",
        "AI podcast episodes", "wearable tech podcast", "Haresh Murugesan episodes",
    ],
    alternates: {
        canonical: "https://syntinuumpodcast.com/episodes",
    },
    openGraph: {
        title: "All Episodes – Syntinuum Podcast",
        description: "Browse every episode of the Syntinuum Podcast featuring tech founders and innovators.",
        url: "https://syntinuumpodcast.com/episodes",
        siteName: "Syntinuum Podcast",
        type: "website",
    },
};

export default async function EpisodesIndexPage() {
    const episodes = await getAllEpisodes();

    return (
        <main className="min-h-screen bg-black pt-24 pb-20 relative">
            <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-neon-purple/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <header className="mb-16">
                    <Link href="/" className="text-zinc-500 hover:text-white text-sm font-mono transition-colors mb-6 inline-block">
                        ← Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-4">
                        All Episodes
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Explore every Syntinuum episode. Deep dives into emerging technology, AI, wearable tech, sustainable innovation, and the visionary founders building the future.
                    </p>
                </header>

                <EpisodeSearch episodes={episodes} />
            </div>
        </main>
    );
}
