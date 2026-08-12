'use client';

import { motion } from 'framer-motion';
import { Play, User, Box } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Episode } from '@/lib/episodes';

export type ColorTheme = 'primary' | 'purple' | 'blue';

interface SeasonCarouselProps {
    id: string;
    seasonTitle: string;
    badgeText: string;
    episodes: Episode[];
    colorTheme: ColorTheme;
}

const colorConfig = {
    primary: {
        bg: 'bg-black/40',
        text: 'text-neon-primary',
        hoverBorder: 'hover:border-neon-primary/50',
        shadow: 'hover:shadow-[0_0_30px_-5px_var(--neon-primary-dim)]',
        badgeBg: 'bg-neon-primary',
        badgeText: 'text-white',
        playBtnBg: 'bg-white',
        playBtnText: 'text-black',
        playBtnShadow: 'shadow-white/20',
        viewBtnHoverBg: 'hover:bg-white',
        viewBtnHoverText: 'hover:text-black',
        viewBtnHoverBorder: 'hover:border-white'
    },
    purple: {
        bg: 'bg-black/40',
        text: 'text-neon-purple',
        hoverBorder: 'hover:border-neon-purple/50',
        shadow: 'hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]',
        badgeBg: 'bg-neon-purple',
        badgeText: 'text-white',
        playBtnBg: 'bg-neon-purple',
        playBtnText: 'text-white',
        playBtnShadow: 'shadow-neon-purple/20',
        viewBtnHoverBg: 'hover:bg-neon-purple',
        viewBtnHoverText: 'hover:text-white',
        viewBtnHoverBorder: 'hover:border-neon-purple'
    },
    blue: {
        bg: 'bg-black/40',
        text: 'text-neon-blue',
        hoverBorder: 'hover:border-neon-blue/50',
        shadow: 'hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]',
        badgeBg: 'bg-neon-blue',
        badgeText: 'text-white',
        playBtnBg: 'bg-neon-blue',
        playBtnText: 'text-white',
        playBtnShadow: 'shadow-neon-blue/20',
        viewBtnHoverBg: 'hover:bg-neon-blue',
        viewBtnHoverText: 'hover:text-white',
        viewBtnHoverBorder: 'hover:border-neon-blue'
    }
};

export default function SeasonCarousel({ id, seasonTitle, badgeText, episodes, colorTheme }: SeasonCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const theme = colorConfig[colorTheme];

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id={id} className="py-20 bg-transparent relative scroll-mt-24">
            {/* Background Ambience */}
            <div className={`absolute ${colorTheme === 'purple' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-96 h-96 ${theme.bg.replace('black/40', colorTheme === 'purple' ? 'neon-purple/10' : 'neon-primary/10')} rounded-full blur-[100px] pointer-events-none`} />

            <div className="max-w-7xl mx-auto px-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`inline-block px-3 py-1 mb-2 text-xs font-mono ${theme.badgeText} ${theme.badgeBg} rounded-full font-bold`}
                >
                    {badgeText}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500"
                >
                    {seasonTitle}
                </motion.h2>
            </div>

            <div 
                className={`overflow-x-auto pb-8 pt-4 hide-scrollbar select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))]`}
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="flex gap-6 w-max">
                    {episodes.map((ep, i) => (
                        <motion.div
                            key={ep.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`group relative w-[300px] md:w-[350px] flex-shrink-0 ${theme.bg} border border-zinc-800 rounded-2xl overflow-hidden ${theme.hoverBorder} transition-all ${theme.shadow}`}
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                {ep.image ? (
                                    <img
                                        src={ep.image}
                                        alt={ep.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className={`bg-${colorTheme === 'primary' ? 'black/60' : 'neon-purple/20'} backdrop-blur-md border border-${colorTheme === 'primary' ? 'zinc-700' : 'neon-purple/30'} px-3 py-1 rounded-lg text-xs font-mono ${theme.text}`}>
                                        EP_{String(i + 1).padStart(2, '0')}
                                    </div>
                                    <button 
                                        aria-label={`Play episode ${ep.title}`}
                                        className={`w-10 h-10 rounded-full ${theme.playBtnBg} ${theme.playBtnText} flex items-center justify-center hover:scale-110 transition-transform shadow-lg ${theme.playBtnShadow}`}
                                    >
                                        <Play size={16} fill="currentColor" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-3 line-clamp-1 transition-colors ${ep.title === 'Coming Soon' ? 'text-zinc-500' : `text-white group-hover:${theme.text.split(' ')[0]}`}`}>{ep.title}</h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <User size={14} className={colorTheme === 'primary' ? 'text-neon-blue' : theme.text} />
                                        <span className="font-mono">{ep.guest}</span>
                                    </div>
                                    {ep.product && (
                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <Box size={14} className={colorTheme === 'primary' ? 'text-neon-purple' : 'text-neon-blue'} />
                                            <span className="font-mono">{ep.product}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6 pointer-events-none">
                                    {ep.desc}
                                </p>

                                {ep.title === 'Coming Soon' ? (
                                    <button disabled className="block w-full text-center py-2 rounded-lg border transition-all text-xs font-mono font-bold tracking-widest uppercase mt-auto border-zinc-800 text-zinc-600 cursor-not-allowed">
                                        Soon
                                    </button>
                                ) : (
                                    <Link 
                                        href={`/episodes/${ep.id}`} 
                                        onClick={(e) => {
                                            // Prevent click if we were dragging
                                            if (isDragging) {
                                                e.preventDefault();
                                            }
                                        }}
                                        className={`block w-full text-center py-2 rounded-lg border transition-all text-xs font-mono font-bold tracking-widest uppercase mt-auto border-zinc-700 ${theme.viewBtnHoverBg} ${theme.viewBtnHoverText} ${theme.viewBtnHoverBorder}`}
                                    >
                                        View Episode
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
