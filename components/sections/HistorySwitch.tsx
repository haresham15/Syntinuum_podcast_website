'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HistoryIcon from '../media/historyicon.png';
import { ArrowRight, RefreshCcw } from 'lucide-react';

export default function HistorySwitch() {
    return (
        <section className="py-24 px-4 relative max-w-7xl mx-auto overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="order-2 md:order-1">
                    <div className="flex items-center gap-2 text-neon-blue font-mono text-sm mb-4">
                        <RefreshCcw size={16} />
                        <span>REFACTORING_COMPLETE</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        From <span className="text-zinc-500 line-through decoration-neon-primary/50">Adapt</span> to <span className="text-white">Syntinuum</span>
                    </h2>

                    <div className="space-y-6 text-zinc-400 leading-relaxed">
                        <p>
                            We started as "Adapt: Implementing Innovations". The mission was clear, but the scope was limited.
                            We realized that adaptation isn't just a reaction—it's a continuous synthesis of new variables.
                            Adapt isn't the only lesson the leaders I talked to had to offer...
                        </p>
                        <p>
                            The rebrand to <strong className="text-white">Syntinuum</strong> represents this shift.
                            It is the continuum of synthesis. A platform where we don't just talk about change, we decode the
                            patterns that make innovation recurring and sustainable and the leaders behind it.
                            Because simply, adapting and change can't be taught like algebra...

                            <br />
                            <br />
                            <strong className="text-white">It needs to be ingested like a film or album</strong>
                        </p>
                        <p>
                            This podcast is a dedication to the leaders that I talk to and the <strong className="text-white">lessons</strong> they display.
                            <br />
                            What it means to be a <strong className="text-white">leader</strong> and <strong className="text-white">innovator</strong>.
                            <br />
                            What it takes to be the life changing creation in the world.
                            <br />
                            <strong className="text-white">The strive for greatness and generational impact</strong>
                        </p>
                    </div>

                    <div className="mt-8 p-4 bg-zinc-900/30 border-l-2 border-neon-blue">
                        <p className="font-mono text-sm text-zinc-300">
                            "The old name was a command. The new name is a state of thinking and learning."
                        </p>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center relative">
                    <motion.div
                        className="relative w-64 h-64 md:w-80 md:h-80"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-neon-primary/20 rounded-full blur-xl animate-pulse" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl">
                            <Image
                                src={HistoryIcon}
                                alt="History of Adaptation"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay for "Old vs New" feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                <span className="font-mono text-xs text-zinc-400 border border-zinc-600 px-2 py-1 rounded bg-black/50">
                                    v1.0_LEGACY_ARCHIVE
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
