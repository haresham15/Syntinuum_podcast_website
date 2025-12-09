'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Home, Play, Info, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Episodes', path: '#episodes', icon: Play },
    { name: 'About', path: '#about', icon: Info },
    { name: 'Subscribe', path: '#subscribe', icon: Mail },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.path.replace('/', '')); // Get headers like #about

            // Default to Home if at top
            if (window.scrollY < 100) {
                setActiveSection('/');
                return;
            }

            for (const section of sections) {
                if (section === '') continue; // Skip home root
                const element = document.querySelector(section); // e.g., #about
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is near the middle/top of the viewport
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
            className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-full px-6 py-3 shadow-2xl shadow-black/50"
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <ul className="flex items-center gap-6">
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
                                    "relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-neon-primary",
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
