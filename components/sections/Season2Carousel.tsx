'use client';

import { motion } from 'framer-motion';
import { Play, User, Box } from 'lucide-react';
// import Image from 'next/image';
import { useRef } from 'react';

const episodes = [
    {
        id: 's2-e1',
        title: 'Nuwa Smart Pen',
        guest: 'Marc Tuinier',
        product: 'Nuwa Pen',
        desc: 'Reinventing the pen for the digital age. This AI-powered ballpoint pen digitizes your handwriting on any paper.',
        image: '/media/s2/1.png',
        link: 'https://youtube.com/watch?v=TRuFpK_j-YE'
    },
    {
        id: 's2-e2',
        title: 'Neuro-Law Special',
        guest: 'Joseph Wszalek',
        product: 'Neuro-Law',
        desc: 'A deep dive into the intersection of neuroscience and law. How brain science is changing the way we understand justice and responsibility.',
        image: '/media/s2/2.png',
        link: 'https://youtube.com/watch?v=Tt4CBcyt-2c'
    },
    {
        id: 's2-e3',
        title: 'Honda Hydrogen',
        guest: 'Honda R&D',
        product: 'CR-V e:FCEV',
        desc: 'Implementing innovations in hydrogen fuel cell technology. Exploring the future of sustainable mobility with Honda\'s latest advancements.',
        image: '/media/s2/3.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e4',
        title: 'Notpla',
        guest: 'Callum Rhodes',
        product: 'Notpla Packaging',
        desc: 'Revolutionary packaging that disappears. Made from seaweed and plants, Notpla offers a sustainable alternative to single-use plastics.',
        image: '/media/s2/4.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e5',
        title: 'Baracoda',
        guest: 'Thomas Serval',
        product: 'BMind Mirror',
        desc: 'Pioneering the daily healthtech revolution with the world\'s first AI-powered smart mirror for mental wellness and stress management.',
        image: '/media/s2/5.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e6',
        title: 'Whispp',
        guest: 'Joris Castermans',
        product: 'Whispp App',
        desc: 'AI-powered speech technology that converts whispered speech into a clear and natural voice for people with voice disabilities.',
        image: '/media/s2/6.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e7',
        title: 'BackAware Workout Belt',
        guest: 'Dr. Peter O\'Sullivan',
        product: 'BackAware',
        desc: 'A smart belt utilizing AI to provide real-time feedback on back posture during workouts, preventing injury and maximizing efficiency.',
        image: '/media/s2/7.png',
        link: 'https://youtube.com/watch?v=Dx08Oxq65eg'
    },
    {
        id: 's2-e8',
        title: 'Colorpik AI Smart Pen',
        guest: 'Steve Wang',
        product: 'Colorpik',
        desc: 'The world\'s first pen that can scan and reproduce any color in the universe. A revolutionary tool for artists and designers.',
        image: '/media/s2/8.png',
        link: 'https://youtube.com/watch?v=V-xad4CYvis'
    }
];

export default function Season2Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 bg-transparent relative">
            {/* Background Ambience */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-3 py-1 mb-2 text-xs font-mono text-black bg-neon-purple rounded-full font-bold"
                >
                    CURRENT_SESSIONS
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-white"
                >
                    SEASON 02 :: PRODUCTION GROWTH
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
                            <div className="h-48 bg-zinc-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                <img
                                    src={ep.image}
                                    alt={ep.title}
                                    className="w-full h-full object-cover"
                                />
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
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-1 group-hover:text-neon-purple transition-colors">{ep.title}</h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <User size={14} className="text-neon-purple" />
                                        <span className="font-mono">{ep.guest}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <Box size={14} className="text-neon-blue" />
                                        <span className="font-mono">{ep.product}</span>
                                    </div>
                                </div>

                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                    {ep.desc}
                                </p>

                                <a href={ep.link} className="block w-full text-center py-2 rounded-lg border border-zinc-700 hover:bg-neon-purple hover:text-white hover:border-neon-purple transition-all text-xs font-mono font-bold tracking-widest uppercase">
                                    Start Transmission
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
