'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Home, Play, Info, Mail, History, Trophy, FileText, Disc } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '#about', icon: Info },
    { name: 'History', path: '#history', icon: History },
    { name: 'Achievements', path: '#achievements', icon: Trophy },
    { name: 'Changelog', path: '#episodes', icon: FileText },
    { name: 'Seasons', path: '#season3', icon: Disc },
    { name: 'Subscribe', path: '#subscribe', icon: Mail },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.path.replace('/', ''));

            if (window.scrollY < 100) {
                setActiveSection('/');
                return;
            }

            for (const section of sections) {
                if (section === '') continue; 
                const element = document.querySelector(section); 
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed top-4 inset-x-0 mx-auto z-40 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-full px-5 py-2 shadow-2xl shadow-black/50 w-max max-w-[90vw] overflow-x-auto hide-scrollbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <ul className="flex items-center gap-1 md:gap-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    // Logic: item.path is like '#episodes'. activeSection is '#episodes'.
                    // For home ('/'), we check if activeSection is '/'.
                    const isActive = activeSection === item.path || (item.path === '/' && activeSection === '') || (item.path === '/' && activeSection === '/');

                    return (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                onClick={() => setActiveSection(item.path)}
                                className={clsx(
                                    "relative flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium transition-colors hover:text-neon-primary rounded-full hover:bg-white/5",
                                    isActive ? "text-white" : "text-zinc-400"
                                )}
                            >
                                <Icon size={16} />
                                <span className="hidden sm:inline">{item.name}</span>
                                {isActive && (
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-neon-primary shadow-[0_0_8px_var(--neon-primary)]"
                                        layoutId="navbar-underline"
                                    />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </motion.nav>
    );
}
