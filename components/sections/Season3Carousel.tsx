'use client';

import { motion } from 'framer-motion';
import { Play, User, Box } from 'lucide-react';
import { useRef } from 'react';

const episodes = [
    {
        id: 's3-e1',
        title: 'Lotus Smart Rings',
        guest: 'Mr. Dhaval Patel',
        product: 'Lotus Smart Rings',
        desc: 'The episode delves into the intricacies of designing and manufacturing smart rings, exploring the challenges of miniaturization, power management, and user experience. Mr. Patel shares his insights on the future of wearable technology and the potential of smart rings to revolutionize the way we interact with our digital world.',
        image: '/media/s3/1.png',
        link: 'https://youtu.be/lZH9AY-B07M'
    },
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `s3-e${i + 2}`,
        title: 'Coming Soon',
        guest: 'TBA',
        product: '',
        desc: 'Stay tuned for more exciting episodes in Season 3!',
        image: '',
        link: '#'
    }))
];

export default function Season3Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <section id="season3" className="py-20 bg-transparent relative scroll-mt-24">
            {/* Background Ambience */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-3 py-1 mb-2 text-xs font-mono text-white bg-neon-purple rounded-full font-bold"
                >
                    NEW_TRANSMISSIONS
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500"
                >
                    SEASON 03: Growing and Learning
                </motion.h2>
            </div>

            <div className="overflow-x-auto pb-8 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))]">
                <div className="flex gap-6 w-max" ref={carouselRef}>
                    {episodes.map((ep, i) => (
                        <motion.div
                            key={ep.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group relative w-[300px] md:w-[350px] flex-shrink-0 bg-black/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                {ep.image ? (
                                    <img
                                        src={ep.image}
                                        alt={ep.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="bg-neon-purple/20 backdrop-blur-md border border-neon-purple/30 px-3 py-1 rounded-lg text-xs font-mono text-neon-purple">
                                        EP_{String(i + 1).padStart(2, '0')}
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-neon-purple text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-neon-purple/20">
                                        <Play size={16} fill="currentColor" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-3 line-clamp-1 transition-colors ${ep.title === 'Coming Soon' ? 'text-zinc-500' : 'text-white group-hover:text-neon-purple'}`}>{ep.title}</h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <User size={14} className="text-neon-purple" />
                                        <span className="font-mono">{ep.guest}</span>
                                    </div>
                                    {ep.product && (
                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <Box size={14} className="text-neon-blue" />
                                            <span className="font-mono">{ep.product}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                    {ep.desc}
                                </p>

                                <button onClick={(e) => { e.preventDefault(); if (ep.title !== 'Coming Soon') window.dispatchEvent(new CustomEvent('open-listen-modal')); }} className={`block w-full text-center py-2 rounded-lg border transition-all text-xs font-mono font-bold tracking-widest uppercase mt-auto ${ep.link === '#' ? 'border-zinc-800 text-zinc-600 cursor-not-allowed' : 'border-zinc-700 hover:bg-neon-purple hover:text-white hover:border-neon-purple'}`}>
                                    {ep.title === 'Coming Soon' ? 'Soon' : 'Start Transmission'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
