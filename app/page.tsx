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
import SeasonCarousel from '@/components/sections/SeasonCarousel';
import { season1Episodes, season2Episodes, season3Episodes } from '@/lib/episodes';
import ListenNowModal from '@/components/ui/ListenNowModal';
import JsonLd from '@/components/seo/JsonLd';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <main className="min-h-screen">
            <JsonLd />
            <AnimatePresence mode="wait">
                {loading && (
                    <Loader onComplete={() => setLoading(false)} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className={loading ? "pointer-events-none" : ""}
            >
                <Hero />
                <About />
                <HistorySwitch />
                <Achievements />
                <Episodes />
                <SeasonCarousel id="season3" seasonTitle="SEASON 03: Growing and Learning" badgeText="NEW_TRANSMISSIONS" episodes={season3Episodes} colorTheme="purple" />
                <SeasonCarousel id="season2" seasonTitle="SEASON 02: The Next Iteration" badgeText="CURRENT_SESSIONS" episodes={season2Episodes} colorTheme="purple" />
                <SeasonCarousel id="season1" seasonTitle="SEASON 01: Retrospective Base Ground" badgeText="ARCHIVE_DETECTED" episodes={season1Episodes} colorTheme="primary" />
                <Subscribe />
            </motion.div>
            <ListenNowModal />
        </main>
    );
}
