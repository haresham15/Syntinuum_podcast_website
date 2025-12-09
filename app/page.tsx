'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import HistorySwitch from '@/components/sections/HistorySwitch';
import Episodes from '@/components/sections/Episodes';
import Achievements from '@/components/sections/Achievements';
import Subscribe from '@/components/sections/Subscribe';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <main className="min-h-screen">
            <AnimatePresence mode="wait">
                {loading && (
                    <Loader onComplete={() => setLoading(false)} />
                )}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Hero />
                    <About />
                    <HistorySwitch />
                    <Episodes />
                    <Achievements />
                    <Subscribe />
                </motion.div>
            )}
        </main>
    );
}
