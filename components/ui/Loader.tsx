'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-64">
                <div className="flex justify-between mb-2 font-mono text-xs text-neon">
                    <span>INITIALIZING PROTOCOL</span>
                    <span>{Math.min(100, Math.floor(progress))}%</span>
                </div>
                <div className="h-1 bg-gray-800 w-full overflow-hidden">
                    <motion.div
                        className="h-full bg-neon-primary box-shadow-neon"
                        style={{ width: `${progress}%`, boxShadow: '0 0 10px var(--neon-primary)' }}
                    />
                </div>
                <div className="mt-2 font-mono text-[10px] text-gray-500 truncate">
                    {progress < 30 && "Loading Core Modules..."}
                    {progress >= 30 && progress < 70 && "Synthesizing UI..."}
                    {progress >= 70 && "Establishing Uplink..."}
                </div>
            </div>
        </motion.div>
    );
}
