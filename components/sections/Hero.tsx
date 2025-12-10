'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import mainLogo from '../media/mainlogo.png';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full bg-grid z-0 opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-primary/20 rounded-full blur-[100px] animate-pulse" />

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mb-8 relative w-56 h-56 md:w-72 md:h-72 mx-auto"
                >
                    <div className="absolute inset-0 bg-neon-primary/20 rounded-full blur-[200px] animate-pulse" />
                    <Image
                        src={mainLogo}
                        alt="Syntinuum Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-neon-primary backdrop-blur-sm"
                >
                    v2.0 :: SYSTEM ONLINE
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="relative text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 animate-glitch"
                >
                    SYNTINUUM
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.0 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-zinc-500 font-mono mb-2"
                >
                    <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-800">
                        <span className="text-neon-purple md:text-xl tracking-wider">/sin-te-num/</span>
                        <span className="italic text-xs md:text-sm text-zinc-600">noun</span>
                    </div>
                    <span className="hidden md:inline text-zinc-700">|</span>
                    <span className="text-sm md:text-base text-zinc-400">1. A continuous synthesis of innovation.</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="mt-4 text-xl md:text-2xl font-mono text-zinc-400 max-w-2xl mx-auto"
                >
                    Endless Evolution. <span className="text-white">Infinite Innovation.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#episodes" className="group relative px-6 py-3 font-mono font-bold text-black bg-[var(--neon-primary)] rounded-lg overflow-hidden transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_20px_var(--neon-purple)]">
                        <span className="relative z-10 flex items-center gap-2">
                            START LISTENING
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight size={16} />
                            </motion.span>
                        </span>
                    </a>
                    <a href="#about" className="px-6 py-3 font-mono border border-zinc-700 rounded-lg hover:border-neon-purple hover:text-neon-purple transition-all bg-zinc-900/50 backdrop-blur-sm">
                        VIEW SOURCE
                    </a>
                </motion.div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
