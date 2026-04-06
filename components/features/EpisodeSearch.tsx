'use client';

import { useState } from 'react';
import { EpisodeData } from '@/lib/episodes';
import Link from 'next/link';
import Image from 'next/image';
import { Search, User, Box, ArrowRight } from 'lucide-react';

export default function EpisodeSearch({ episodes }: { episodes: EpisodeData[] }) {
    const [query, setQuery] = useState('');

    const filteredEpisodes = episodes.filter(ep => {
        const searchContent = `${ep.title} ${ep.guest || ''} ${ep.product || ''} ${ep.content || ''}`.toLowerCase();
        return searchContent.includes(query.toLowerCase());
    });

    return (
        <div>
            <div className="relative mb-8 max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                <input
                    type="text"
                    placeholder="Search episodes, guests, or topics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-neon-purple rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-500 outline-none transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEpisodes.length > 0 ? (
                    filteredEpisodes.map((ep) => (
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
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 text-center py-12 text-zinc-500 font-mono bg-zinc-900/30 rounded-xl border border-zinc-800/50">
                        No transmissions found matching "{query}"
                    </div>
                )}
            </div>
        </div>
    );
}
