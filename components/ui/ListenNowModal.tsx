'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Headphones, Play, Music, Youtube, Cast } from 'lucide-react';
import { clsx } from 'clsx';

const platforms = [
    { name: 'Apple Podcasts', icon: Headphones, url: 'https://podcasts.apple.com/us/podcast/syntinuum-endless-evolutions/id1729494958', color: 'hover:bg-purple-600/20 hover:text-purple-400 hover:border-purple-500/50' },
    { name: 'Spotify', icon: Music, url: 'https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98?si=RHoeHK3RSM-ohTT9r6EvlA', color: 'hover:bg-green-600/20 hover:text-green-400 hover:border-green-500/50' },
    { name: 'Amazon Music', icon: Play, url: 'https://music.amazon.com/podcasts/a9b7e115-185a-4324-ae2d-33488a4fd26c/syntinuum-endless-evolutions', color: 'hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50' },
    { name: 'Castbox', icon: Cast, url: 'https://castbox.fm/channel/Syntinuum%3A-Endless-Evolutions-id6033032?country=us', color: 'hover:bg-orange-500/20 hover:text-orange-400 hover:border-orange-500/50' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/channel/UCg2BeZarXY7YLdnFYwRS_HQ', color: 'hover:bg-red-600/20 hover:text-red-500 hover:border-red-500/50' },
];

export default function ListenNowModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('open-listen-modal', handleOpen);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('open-listen-modal', handleOpen);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between p-6 border-b border-zinc-800/50 bg-zinc-900/50">
                            <div>
                                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                                    Listen Now
                                </h3>
                                <p className="text-zinc-400 text-sm mt-1">Select your preferred platform</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="grid gap-3">
                                {platforms.map((platform, idx) => {
                                    const Icon = platform.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={platform.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={clsx(
                                                "flex items-center gap-4 p-4 rounded-xl border border-zinc-800/80 bg-zinc-800/30 transition-all group",
                                                platform.color
                                            )}
                                        >
                                            <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-transparent transition-colors">
                                                <Icon size={20} />
                                            </div>
                                            <span className="font-bold font-mono text-zinc-200 group-hover:text-inherit transition-colors">
                                                {platform.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
