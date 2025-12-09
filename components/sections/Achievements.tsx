'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AchievementsImg from '../media/podcastAchievements.png';
import { Trophy, Star, TrendingUp, RefreshCcw } from 'lucide-react';

export default function Achievements() {
    return (
        <section className="py-24 px-4 bg-zinc-900/30 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">System Milestones</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Quantifiable metrics of our impact on the listener base.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-zinc-700 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] group h-full">
                            <Image
                                src={AchievementsImg}
                                alt="Podcast Achievements"
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
                                <div>
                                    <div className="text-2xl font-bold text-white mb-2">Top Charts</div>
                                    <div className="text-sm text-zinc-400 font-mono">RANKING_ALGORITHM_SUCCESS</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: Trophy, title: "Top 50 Tech", desc: "Consistently ranked in Technology charts" },
                            { icon: TrendingUp, title: "10k+ Downloads", desc: "Growing listener base across platforms" },
                            { icon: Star, title: "5 Star Rating", desc: "Community validated content quality" },
                            { icon: RefreshCcw, title: "Global Reach", desc: "Listeners from 15+ countries" } // Reusing RefreshCcw as generic cycle/globe ish
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-neon-primary/50 transition-colors group"
                            >
                                <item.icon className="w-8 h-8 text-zinc-500 group-hover:text-neon-primary transition-colors mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
