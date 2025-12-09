'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LockScreen() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isLocked, setIsLocked] = useState(true);

    useEffect(() => {
        // Target Date: December 15, 2025 18:00:00
        const targetDate = new Date('2025-12-15T18:00:00').getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
                setIsLocked(true);
            } else {
                setIsLocked(false);
            }
        };

        // Calculate immediately
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isLocked) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            <div className="z-10 text-center space-y-8 p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">ADAPT RELOADED</h1>
                    <p className="text-neon-primary font-mono text-sm tracking-widest">SYSTEM LOCKED</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="text-zinc-500 text-xs mt-2">DAYS</span>
                    </div>
                    <div className="text-4xl md:text-6xl font-bold text-zinc-700">:</div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-zinc-500 text-xs mt-2">HOURS</span>
                    </div>
                    <div className="text-4xl md:text-6xl font-bold text-zinc-700">:</div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-zinc-500 text-xs mt-2">MINUTES</span>
                    </div>
                    <div className="text-4xl md:text-6xl font-bold text-zinc-700">:</div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-bold text-neon-purple">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="text-zinc-500 text-xs mt-2">SECONDS</span>
                    </div>
                </div>

                <motion.div
                    className="mt-12 text-zinc-500 text-sm"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Preparing Implementation...
                </motion.div>
            </div>
        </motion.div>
    );
}
