'use client';

import { motion } from 'framer-motion';
import { Play, User, Box } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const episodes = [
    {
        id: 's1-e1',
        title: 'Tevel Aerobotics',
        guest: 'Tevel Team',
        product: 'Flying Robots',
        desc: 'Autonomous flying robots for fruit picking. Solving labor shortages in agriculture with advanced robotics.',
        image: '/media/s1/9.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's1-e2',
        title: 'AI Architecture',
        guest: 'Architecture Team',
        product: 'AI Design',
        desc: 'How AI is shaping the skyline. The role of generative design in modern construction and urban planning.',
        image: '/media/s1/10.png',
        link: 'https://youtube.com/watch?v=YKkqn0x3mEQ'
    },
    {
        id: 's1-e3',
        title: 'XVision Headset',
        guest: 'Augmedics Team',
        product: 'XVision',
        desc: 'Augmented reality for surgeons. Giving doctors x-ray vision to see through anatomy during complex procedures.',
        image: '/media/s1/11.png',
        link: 'https://youtube.com/watch?v=z6naGP1PY74'
    },
    {
        id: 's1-e4',
        title: 'NAQI Neural Earbuds',
        guest: 'Dave Segal',
        product: 'NAQI Earbuds',
        desc: 'Control digital devices with your mind? Neural earbuds and the future of human-computer interfaces.',
        image: '/media/s1/12.png',
        link: 'https://youtube.com/watch?v=-fH-FkjSY-s'
    },
    {
        id: 's1-e5',
        title: 'Rainstick Shower',
        guest: 'Alisha McFetridge',
        product: 'Rainstick',
        desc: 'The sustainable shower of the future. Saving water and energy without compromising the shower experience.',
        image: '/media/s1/13.png',
        link: 'https://youtube.com/watch?v=Q4RHkE_ojBE'
    },
    {
        id: 's1-e6',
        title: 'GACW',
        guest: 'GACW Team',
        product: 'Air Sus. Wheels',
        desc: 'Reinventing the wheel. Air suspension technology for heavy machinery that improves efficiency and durability.',
        image: '/media/s1/14.png',
        link: 'https://youtube.com/watch?v=oljsu5EuXZw'
    },
    {
        id: 's1-e7',
        title: 'FeaturePrint',
        guest: 'Alitheon Team',
        product: 'FeaturePrint',
        desc: 'Authenticating products with a single photo. The physics of uniqueness and the end of counterfeiting.',
        image: '/media/s1/15.png',
        link: 'https://youtube.com/watch?v=ZFkU_g8cGI0'
    },
    {
        id: 's1-e8',
        title: 'Ehrman Crest School',
        guest: 'Timothy J. Eiler',
        product: 'Ehrman Crest',
        desc: 'Exploring the layout of the future. How Ehrman Crest is redefining education through architecture and design.',
        image: '/media/s1/16.png',
        link: 'https://youtube.com/watch?v=CRt8Whi_K4c'
    }
];

export default function Season1Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 mb-8 flex items-end justify-between">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 mb-2 text-xs font-mono text-black bg-neon-primary rounded-full font-bold"
                    >
                        ARCHIVE_DETECTED
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500"
                    >
                        SEASON 01
                    </motion.h2>
                </div>
                {/* Scroll Indicators / Controls could go here */}
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
                            className="group relative w-[300px] md:w-[350px] flex-shrink-0 bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-neon-primary/50 transition-all hover:shadow-[0_0_30px_-5px_var(--neon-primary-dim)]"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                <img
                                    src={ep.image}
                                    alt={ep.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="bg-black/60 backdrop-blur-md border border-zinc-700 px-3 py-1 rounded-lg text-xs font-mono text-neon-primary">
                                        EP_{String(i + 1).padStart(2, '0')}
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-white/20">
                                        <Play size={16} fill="currentColor" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-1 group-hover:text-neon-primary transition-colors">{ep.title}</h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <User size={14} className="text-neon-blue" />
                                        <span className="font-mono">{ep.guest}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <Box size={14} className="text-neon-purple" />
                                        <span className="font-mono">{ep.product}</span>
                                    </div>
                                </div>

                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                    {ep.desc}
                                </p>

                                <a href={ep.link} className="block w-full text-center py-2 rounded-lg border border-zinc-700 hover:bg-white hover:text-black hover:border-white transition-all text-xs font-mono font-bold tracking-widest uppercase">
                                    Listen Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
