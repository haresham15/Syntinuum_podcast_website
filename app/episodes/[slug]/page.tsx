import { getEpisodeById, getAllEpisodes, getRelatedEpisodes } from "@/lib/episodes";
import rehypeSlug from 'rehype-slug';
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import EpisodeJsonLd from "@/components/seo/EpisodeJsonLd";
import ShareButtons from "@/components/features/ShareButtons";
import { Play, ArrowLeft, User, Box, ChevronDown, Headphones, ListMusic, Radio, MonitorPlay } from "lucide-react";

// Generate metadata dynamically for this specific episode
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const p = await params;
    const episode = await getEpisodeById(p.slug);
    if (!episode) return {};

    const episodeDescription = `Listen to "${episode.title}" featuring ${episode.guest} on the Syntinuum Podcast. ${episode.content.substring(0, 130).trim()}... Available on Spotify, Apple Podcasts, YouTube, Amazon Music. Visit syntinuumpodcast.com for all episodes.`;

    return {
        title: `${episode.title} with ${episode.guest} - Syntinuum Podcast`,
        description: episodeDescription,
        keywords: [
            episode.title, episode.guest, episode.product,
            `${episode.title} podcast`, `${episode.guest} interview`,
            `${episode.product} technology`, `${episode.product} innovation`,
            'Syntinuum', 'Syntinuum Podcast', 'technology podcast',
            'innovation podcast', 'Haresh Murugesan',
        ].filter(Boolean),
        alternates: {
            canonical: `/episodes/${p.slug}`,
        },
        openGraph: {
            title: `${episode.title} with ${episode.guest} | Syntinuum Podcast`,
            description: episodeDescription,
            images: [
                {
                    url: episode.image || `/api/og?title=${encodeURIComponent(episode.title)}${episode.guest ? `&guest=${encodeURIComponent(episode.guest)}` : ''}`,
                    width: 1200,
                    height: 630,
                    alt: `${episode.title} – Syntinuum Podcast Episode featuring ${episode.guest}`,
                },
            ],
            type: "article",
            publishedTime: episode.date,
            authors: [episode.guest, "Haresh Murugesan"],
            siteName: "Syntinuum Podcast",
        },
        twitter: {
            card: "summary_large_image",
            title: `${episode.title} | Syntinuum Podcast`,
            description: `${episode.guest} discusses ${episode.product || episode.title} on the Syntinuum Podcast.`,
            images: [episode.image || `/api/og?title=${encodeURIComponent(episode.title)}${episode.guest ? `&guest=${encodeURIComponent(episode.guest)}` : ''}`],
            creator: "@AdaptPodcastCo",
        },
    };
}

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
    const p = await params;
    const episode = await getEpisodeById(p.slug);

    if (!episode) {
        notFound();
    }

    const relatedEpisodes = await getRelatedEpisodes(p.slug, 3);

    return (
        <main className="min-h-screen bg-black pt-24 pb-20 relative">
            <EpisodeJsonLd episode={episode} />

            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-neon-purple/20 to-transparent pointer-events-none" />

            <article className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Header Navigation */}
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 font-mono text-sm group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Transmissions
                </Link>

                {/* Top Section - Player View (Balanced Hybrid) */}
                <header className="flex flex-col md:flex-row gap-8 items-start mb-16">
                    <div className="w-full md:w-1/3 relative rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_-15px_rgba(168,85,247,0.3)] shrink-0">
                        <Image 
                            src={episode.image || '/icon.png'} 
                            alt={`Cover art for ${episode.title}`}
                            width={800}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Meta & Identity */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-6 leading-tight">
                            {episode.title}
                        </h1>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {episode.guest && (
                                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300">
                                    <User size={16} className="text-neon-purple" />
                                    <span>Guest: <span className="text-white font-medium">{episode.guest}</span></span>
                                </div>
                            )}
                            {episode.product && (
                                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300">
                                    <Box size={16} className="text-neon-blue" />
                                    <span>Topic: <span className="text-white font-medium">{episode.product}</span></span>
                                </div>
                            )}
                        </div>

                        {/* Player Buttons & Social */}
                        <div className="flex flex-col sm:flex-row gap-6 relative z-50 mt-4 md:mt-0">
                            <details className="group relative list-none [&::-webkit-details-marker]:hidden cursor-pointer">
                                <summary className="flex items-center gap-2 bg-neon-purple hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-full transition-colors outline-none select-none w-fit shadow-lg shadow-neon-purple/20">
                                    <Headphones size={20} />
                                    Choose Platform
                                    <ChevronDown size={16} className="group-open:rotate-180 transition-transform ml-2"/>
                                </summary>
                                <div className="absolute left-0 mt-3 w-64 bg-zinc-900 border border-zinc-700/50 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col pointer-events-auto">
                                    <a href={episode.spotifyLink || "https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98"} aria-label="Listen on Spotify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link">
                                        <div className="w-8 h-8 rounded-full bg-[#1DB954]/10 text-[#1DB954] flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform"><ListMusic size={16} /></div>
                                        Spotify
                                    </a>
                                    <a href={episode.appleLink || "https://podcasts.apple.com/us/podcast/syntinuum-endless-evolutions/id1729494958"} aria-label="Listen on Apple Podcasts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform"><Radio size={16} /></div>
                                        Apple Podcasts
                                    </a>
                                    <a href={episode.youtubeLink || "https://www.youtube.com/channel/UCg2BeZarXY7YLdnFYwRS_HQ"} aria-label="Watch on YouTube" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link">
                                        <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform"><MonitorPlay size={16} /></div>
                                        YouTube
                                    </a>
                                    <a href={episode.amazonLink || "https://music.amazon.com/podcasts/a9b7e115-185a-4324-ae2d-33488a4fd26c/syntinuum-endless-evolutions"} aria-label="Listen on Amazon Music" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform"><Headphones size={16} /></div>
                                        Amazon Music
                                    </a>
                                    <a href={episode.castboxLink || "https://castbox.fm/channel/Syntinuum%3A-Endless-Evolutions-id6033032?country=us"} aria-label="Listen on Castbox" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 group/link">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform"><ListMusic size={16} /></div>
                                        Castbox
                                    </a>
                                </div>
                            </details>

                            <ShareButtons title={episode.title} slug={episode.id} />
                        </div>
                    </div>
                </header>

                <hr className="border-t border-zinc-800 mb-12" />

                {/* Bottom Section - Article View (SEO content magnet) */}
                <div className="prose prose-invert prose-purple max-w-none">
                    <ReactMarkdown
                        rehypePlugins={[rehypeSlug]}
                        components={{
                            h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-12 mb-6" {...props} />,
                            p: ({node, ...props}) => <p className="text-zinc-400 leading-relaxed mb-6 text-lg" {...props} />,
                            ul: ({node, ...props}) => <ul className="space-y-2 mb-6" {...props} />,
                            li: ({node, ...props}) => <li className="text-zinc-300 flex items-start before:content-[''] before:w-1.5 before:h-1.5 before:bg-neon-purple before:rounded-full before:mt-2.5 before:mr-3" {...props} />,
                        }}
                    >
                        {episode.content}
                    </ReactMarkdown>
                </div>

                {/* Related Episodes Section */}
                {relatedEpisodes.length > 0 && (
                    <section className="mt-24 pt-12 border-t border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-8">Related Transmissions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {relatedEpisodes.map((ep) => (
                                <Link key={ep.id} href={`/episodes/${ep.id}`} className="block group">
                                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-neon-purple group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] group-hover:-translate-y-1">
                                        <div className="relative aspect-video overflow-hidden bg-zinc-800">
                                            {ep.image ? (
                                                <Image 
                                                    src={ep.image} 
                                                    alt={`Cover for ${ep.title}`} 
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                                    <Box size={48} className="text-white" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-neon-purple transition-colors">{ep.title}</h3>
                                            <p className="text-zinc-400 text-sm">{ep.guest}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </main>
    );
}

// Statically generate all episode routes at build time
export async function generateStaticParams() {
    const episodes = await getAllEpisodes();
    
    return episodes.map((episode) => ({
        slug: episode.id,
    }));
}
