'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, ExternalLink } from 'lucide-react';

const episodes = [
    {
        id: "v2.0.1",
        title: "Season 2: The Next Iteration",
        date: "2024-01-15",
        desc: "Upgrading the podcast core. New guests, higher fidelity production, and deeper analysis of product innovation in today's world and ends",
        link: "https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98"
    },
    {
        id: "v1.9.0",
        title: "Season 1 Retrospective Base Ground",
        date: "2023-12-01",
        desc: "Analyzing the base standards established in the initial run. Lessons from the leaders in implementation",
        link: "https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98"
    },
    // Add more placeholders or real data if available
];

export default function Episodes() {
    return (
        <section id="episodes" className="py-24 bg-zinc-900/30 relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-2">Changelog</h2>
                    <p className="text-zinc-500 font-mono">Latest deployed versions of the audio feed.</p>
                </motion.div>

                <div className="space-y-4">
                    {episodes.map((ep, i) => (
                        <motion.div
                            key={ep.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col md:flex-row gap-6 p-6 border border-zinc-800 bg-background/50 hover:bg-zinc-800/50 rounded-xl transition-all hover:border-neon-primary/50"
                        >
                            <div className="flex-shrink-0 flex md:flex-col items-baseline gap-2 min-w-[120px]">
                                <span className="font-mono text-neon-primary text-lg">{ep.id}</span>
                                <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                                    <Calendar size={12} />
                                    {ep.date}
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-primary transition-colors">{ep.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{ep.desc}</p>
                                <a
                                    href={ep.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-mono font-bold bg-white text-black px-4 py-2 rounded hover:scale-105 transition-transform"
                                >
                                    <Play size={12} fill="black" /> DEPLOY TO AUDIO
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
