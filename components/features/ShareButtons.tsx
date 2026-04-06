'use client';

import { useState } from 'react';
import { Share2, Linkedin, Twitter, Check } from 'lucide-react';

export default function ShareButtons({ title, slug }: { title: string, slug: string }) {
    const [copied, setCopied] = useState(false);
    const url = `https://syntinuumpodcast.com/episodes/${slug}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-zinc-500 mr-2">SHARE:</span>
            
            <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Listening to ${title} on the Syntinuum Podcast`)}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all shadow-lg"
                title="Share on X / Twitter"
            >
                <Twitter size={18} />
            </a>

            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all shadow-lg"
                title="Share on LinkedIn"
            >
                <Linkedin size={18} />
            </a>

            <button
                onClick={handleCopy}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:bg-white/10 transition-all shadow-lg"
                title="Copy Link"
            >
                {copied ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
            </button>
        </div>
    );
}
