import { getAllEpisodes } from "@/lib/episodes";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, User, Box } from "lucide-react";

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {episodes.map((ep) => (
                        <Link
                            key={ep.id}
                            href={`/episodes/${ep.id}`}
                            className="group flex gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-neon-purple/50 hover:bg-zinc-900/80 transition-all"
                        >
                            {ep.image && (
                                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
                                    <Image
                                        src={ep.image}
                                        alt={`${ep.title} episode thumbnail`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col justify-center min-w-0">
                                <h2 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors truncate">
                                    {ep.title}
                                </h2>
                                {ep.guest && (
                                    <div className="flex items-center gap-1.5 text-sm text-zinc-400 mt-1">
                                        <User size={12} className="text-neon-purple shrink-0" />
                                        <span className="truncate">{ep.guest}</span>
                                    </div>
                                )}
                                {ep.product && (
                                    <div className="flex items-center gap-1.5 text-sm text-zinc-500 mt-0.5">
                                        <Box size={12} className="text-neon-blue shrink-0" />
                                        <span className="truncate">{ep.product}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-1 text-xs text-zinc-600 font-mono mt-2 group-hover:text-neon-purple/70 transition-colors">
                                    View Episode <ArrowRight size={10} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
