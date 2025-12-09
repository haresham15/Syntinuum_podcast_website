'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter, Mail, Music } from 'lucide-react';

const socialLinks = [
    { name: 'Spotify', icon: Music, url: 'https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98', color: 'hover:text-green-500' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@AdaptPodcast', color: 'hover:text-red-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/adapt_podcast', color: 'hover:text-pink-500' },
    { name: 'X / Twitter', icon: Twitter, url: 'https://x.com/AdaptPodcastCo', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: 'mailto:adaptpodcast@gmail.com', color: 'hover:text-yellow-400' }, // Placeholder email
];

export default function Subscribe() {
    return (
        <section id="subscribe" className="py-24 px-4 text-center relative overflow-hidden scroll-mt-24">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-5xl font-black mb-6 tracking-tight">JOIN THE <span className="text-neon-primary">NETWORK</span></h2>
                <p className="text-zinc-400 mb-12 text-lg">
                    Connect with the Syntinuum node. Stay updated on the latest protocol changes and innovations.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 bg-zinc-900 border border-zinc-800 rounded-full transition-all hover:-translate-y-2 hover:border-zinc-600 ${social.color}`}
                            >
                                <Icon size={24} />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        );
                    })}
                </div>

                <footer className="mt-24 text-zinc-600 text-sm font-mono border-t border-zinc-900 pt-8">
                    <p>&copy; {new Date().getFullYear()} SYNTINUUM PODCAST. ALL RIGHTS RESERVED.</p>
                    <p className="mt-2 text-xs">SYSTEM STATUS: OPERATIONAL</p>
                </footer>
            </motion.div>
        </section>
    );
}
