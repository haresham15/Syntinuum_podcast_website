'use client';

import { motion } from 'framer-motion';
import { User, Terminal, Cpu } from 'lucide-react';

import Image from 'next/image';
import MeImg from '../media/me.jpg';

export default function About() {
    return (
        <section id="about" className="py-24 px-4 relative max-w-7xl mx-auto scroll-mt-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Visual/Image Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/3 relative rounded-2xl overflow-hidden group border border-zinc-800"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-50 group-hover:opacity-0 transition-opacity z-10" />

                    <Image
                        src={MeImg}
                        alt="Haresh Murugesan"
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        placeholder="blur"
                    />

                    {/* Decorative code lines */}
                    <div className="absolute bottom-4 left-4 text-[10px] font-mono text-neon-primary/80 z-20 bg-black/50 backdrop-blur-sm p-2 rounded border border-zinc-800/50">
                        <div>&gt; ENTITY: HOST</div>
                        <div>&gt; STATUS: OPERATIONAL</div>
                        <div>&gt; LOC: OHIO_STATE_UNIV</div>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="w-full md:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2 text-neon-primary font-mono text-sm mb-4">
                            <Terminal size={16} />
                            <span>SOURCE_CODE.md</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">The Architect</h2>
                        <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                            <p>
                                <span className="text-white font-semibold">Haresh Murugesan</span> // Computer Science Engineering Student @ OSU.
                            </p>
                            <p>
                                The world is a rapidly compiling codebase. New frameworks for living are introduced daily.
                                Most impact people's lives in minute ways. Others are generational creations helping milions navigate the world.

                            </p>
                            <p>
                                <strong className="text-white">Syntinuum</strong> (formerly Adapt) is the documentation for this new reality.
                                We analyze the different innovations and inventions that are in the birth form. These creations are begging to be puth through countless unit tests.
                                Creators continously checking to see how their creation will change the world and help it adapt to the growing challenges and systemic errors.
                                Seeing how implementing the newest innovations can spark change.
                                Our goal here at Syntinuum is to document the progress of these creations and motivate the next generation to continue the creative and breakthrough process for meaningfull change.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                            <Cpu className="text-neon-blue mb-2" />
                            <h3 className="text-white font-bold mb-1">Tech Implementations</h3>
                            <p className="text-sm text-zinc-500">Analysis of emerging tech stacks in material reality.</p>
                        </div>
                        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                            <Terminal className="text-neon-purple mb-2" />
                            <h3 className="text-white font-bold mb-1">System Updates</h3>
                            <p className="text-sm text-zinc-500">Tracking the evolution of global adaptation strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
