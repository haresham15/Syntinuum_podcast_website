module.exports = [
"[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/episodes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllEpisodes",
    ()=>getAllEpisodes,
    "getEpisodeById",
    ()=>getEpisodeById,
    "getRelatedEpisodes",
    ()=>getRelatedEpisodes,
    "season1Episodes",
    ()=>season1Episodes,
    "season2Episodes",
    ()=>season2Episodes,
    "season3Episodes",
    ()=>season3Episodes
]);
const season1Episodes = [
    {
        id: 's1-e1',
        title: 'AI Assisted Architecture',
        guest: 'Architecture Team',
        product: 'AI Design',
        desc: 'How AI is shaping the skyline. The role of generative design in modern construction and urban planning.',
        image: '/media/s1/9.png',
        link: 'https://youtu.be/YKkqn0x3mEQ'
    },
    {
        id: 's1-e2',
        title: 'XVision Headset',
        guest: 'Augmedics Team',
        product: 'XVision',
        desc: 'Augmented reality for surgeons. Giving doctors x-ray vision to see through anatomy during complex procedures.',
        image: '/media/s1/10.png',
        link: 'https://youtu.be/z6naGP1PY74'
    },
    {
        id: 's1-e3',
        title: 'NAQi Neural Earbuds',
        guest: 'Dave Segal',
        product: 'NAQI Earbuds',
        desc: 'Control digital devices with your mind? Neural earbuds and the future of human-computer interfaces.',
        image: '/media/s1/11.png',
        link: 'https://youtu.be/-fH-FkjSY-s'
    },
    {
        id: 's1-e4',
        title: 'Rainstick Shower',
        guest: 'Alisha McFetridge',
        product: 'Rainstick',
        desc: 'The sustainable shower of the future. Saving water and energy without compromising the shower experience.',
        image: '/media/s1/12.png',
        link: 'https://youtu.be/Q4RHkE_ojBE'
    },
    {
        id: 's1-e5',
        title: 'AI Art Theft Prevention',
        guest: 'Dr. Shawn Shan',
        product: 'Glaze AI Prevention',
        desc: 'Protecting art from theft. How AI is revolutionizing the art world and keeping priceless works safe.',
        image: '/media/s1/13.png',
        link: 'https://youtu.be/FaUqpbqMcps'
    },
    {
        id: 's1-e6',
        title: 'GACW',
        guest: 'Dr. Zoltan Kemeney',
        product: 'Air Sus. Wheels',
        desc: 'Reinventing the wheel. Air suspension technology for heavy machinery that improves efficiency and durability.',
        image: '/media/s1/14.png',
        link: 'https://youtu.be/oljsu5EuXZw'
    },
    {
        id: 's1-e7',
        title: 'FeaturePrint',
        guest: 'Mr.Roei Ganzarski',
        product: 'FeaturePrint',
        desc: 'Authenticating products with a single photo. The physics of uniqueness and the end of counterfeiting.',
        image: '/media/s1/15.png',
        link: 'https://youtu.be/ZFkU_g8cGI0'
    },
    {
        id: 's1-e8',
        title: 'Ehrman Crest School',
        guest: 'Timothy J. Eiler',
        product: 'Ehrman Crest',
        desc: 'Exploring the layout of the future. How Ehrman Crest is redefining education through architecture and design.',
        image: '/media/s1/16.png',
        link: 'https://youtu.be/CRt8Whi_K4c'
    }
];
const season2Episodes = [
    {
        id: 's2-e1',
        title: 'Nuwa Smart Pen',
        guest: 'Marc Tuinier',
        product: 'Nuwa Pen',
        desc: 'Reinventing the pen for the digital age. This AI-powered ballpoint pen digitizes your handwriting on any paper.',
        image: '/media/s2/1.png',
        link: 'https://youtube.com/watch?v=TRuFpK_j-YE'
    },
    {
        id: 's2-e2',
        title: 'Neuro-Law Special',
        guest: 'Joseph Wszalek',
        product: 'Neuro-Law',
        desc: 'A deep dive into the intersection of neuroscience and law. How brain science is changing the way we understand justice and responsibility.',
        image: '/media/s2/2.png',
        link: 'https://youtube.com/watch?v=Tt4CBcyt-2c'
    },
    {
        id: 's2-e3',
        title: 'Honda Hydrogen',
        guest: 'Honda R&D',
        product: 'CR-V e:FCEV',
        desc: 'Implementing innovations in hydrogen fuel cell technology. Exploring the future of sustainable mobility with Honda\'s latest advancements.',
        image: '/media/s2/3.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e4',
        title: 'Notpla',
        guest: 'Callum Rhodes',
        product: 'Notpla Packaging',
        desc: 'Revolutionary packaging that disappears. Made from seaweed and plants, Notpla offers a sustainable alternative to single-use plastics.',
        image: '/media/s2/4.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e5',
        title: 'Baracoda',
        guest: 'Thomas Serval',
        product: 'BMind Mirror',
        desc: 'Pioneering the daily healthtech revolution with the world\'s first AI-powered smart mirror for mental wellness and stress management.',
        image: '/media/s2/5.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e6',
        title: 'Whispp',
        guest: 'Joris Castermans',
        product: 'Whispp App',
        desc: 'AI-powered speech technology that converts whispered speech into a clear and natural voice for people with voice disabilities.',
        image: '/media/s2/6.png',
        link: 'https://www.youtube.com/@Adapt-ImplementingInnovations'
    },
    {
        id: 's2-e7',
        title: 'BackAware Workout Belt',
        guest: 'Dr. Peter O\'Sullivan',
        product: 'BackAware',
        desc: 'A smart belt utilizing AI to provide real-time feedback on back posture during workouts, preventing injury and maximizing efficiency.',
        image: '/media/s2/7.png',
        link: 'https://youtube.com/watch?v=Dx08Oxq65eg'
    },
    {
        id: 's2-e8',
        title: 'Colorpik AI Smart Pen',
        guest: 'Steve Wang',
        product: 'Colorpik',
        desc: 'The world\'s first pen that can scan and reproduce any color in the universe. A revolutionary tool for artists and designers.',
        image: '/media/s2/8.png',
        link: 'https://youtube.com/watch?v=V-xad4CYvis'
    }
];
const season3Episodes = [
    {
        id: 's3-e1',
        title: 'Lotus Smart Rings',
        guest: 'Mr. Dhaval Patel',
        product: 'Lotus Smart Rings',
        desc: 'The episode delves into the intricacies of designing and manufacturing smart rings, exploring the challenges of miniaturization, power management, and user experience. Mr. Patel shares his insights on the future of wearable technology and the potential of smart rings to revolutionize the way we interact with our digital world.',
        image: '/media/s3/1.png',
        link: 'https://youtu.be/lZH9AY-B07M'
    },
    {
        id: 's3-e2',
        title: 'Sustainable Food Tech & Mycoprotein Synthesis',
        guest: 'Paul Shapiro',
        product: 'The Better Meat Company',
        desc: 'In this episode, we dive into sustainable food tech and mycoprotein synthesis with Paul Shapiro from The Better Meat Company. We explore how growing meat without animals could revolutionize dinner and the world.',
        image: '/media/s3/2.png',
        link: 'https://youtu.be/oaZFKyy7Kc4'
    },
    {
        id: 's3-e3',
        title: 'CAS Newton',
        guest: 'Andrea Jacobs',
        product: 'CAS Newton',
        desc: 'In this special in-person episode, we explore the intersection of artificial intelligence, data science, and the future of scientific discovery with Andrea Jacobs, the Director of Artificial Intelligence at Chemical Abstracts Service (CAS).\n\nWe dive deep into how CAS Newton is leveraging advanced AI models to accelerate chemical research, manage massive datasets, and uncover new scientific breakthroughs. Discover the behind-the-scenes challenges of building AI tools for scientists and what the future holds for data-driven discovery.',
        image: '/media/s3/3.png',
        link: 'https://youtu.be/6Pk0pJTrRrs'
    },
    ...Array.from({
        length: 6
    }).map((_, i)=>({
            id: `s3-e${i + 4}`,
            title: 'Coming Soon',
            guest: 'TBA',
            product: '',
            desc: 'Stay tuned for more exciting episodes in Season 3!',
            image: '',
            link: '#'
        }))
];
async function getAllEpisodes() {
    return [
        ...season1Episodes,
        ...season2Episodes,
        ...season3Episodes
    ];
}
async function getEpisodeById(id) {
    const episodes = await getAllEpisodes();
    const ep = episodes.find((e)=>e.id === id);
    if (!ep) return undefined;
    return {
        ...ep,
        content: ep.desc,
        date: new Date().toISOString()
    };
}
async function getRelatedEpisodes(id, count) {
    const episodes = await getAllEpisodes();
    return episodes.filter((e)=>e.id !== id).slice(0, count);
}
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/components/seo/EpisodeJsonLd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EpisodeJsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function EpisodeJsonLd({ episode }) {
    const episodeSchema = {
        '@context': 'https://schema.org',
        '@type': 'PodcastEpisode',
        name: episode.title,
        headline: `${episode.title} – Syntinuum Podcast`,
        description: `${episode.content.substring(0, 200).trim()}... Listen to ${episode.guest} discuss ${episode.product || episode.title} on the Syntinuum Podcast.`,
        datePublished: episode.date,
        timeRequired: 'PT45M',
        url: `https://syntinuumpodcast.com/episodes/${episode.id}`,
        image: episode.image ? `https://syntinuumpodcast.com${episode.image}` : 'https://syntinuumpodcast.com/icon.png',
        partOfSeries: {
            '@type': 'PodcastSeries',
            name: 'Syntinuum: Endless Evolutions',
            url: 'https://syntinuumpodcast.com'
        },
        creator: {
            '@type': 'Person',
            name: 'Haresh Murugesan',
            url: 'https://syntinuumpodcast.com'
        },
        ...episode.guest && {
            actor: {
                '@type': 'Person',
                name: episode.guest
            }
        },
        ...episode.spotifyLink && {
            associatedMedia: {
                '@type': 'AudioObject',
                contentUrl: episode.spotifyLink,
                encodingFormat: 'audio/mpeg'
            }
        },
        ...episode.youtubeLink && {
            video: {
                '@type': 'VideoObject',
                name: `${episode.title} – Syntinuum Podcast`,
                description: `Watch ${episode.guest} discuss ${episode.product || episode.title}.`,
                contentUrl: episode.youtubeLink,
                thumbnailUrl: episode.image ? `https://syntinuumpodcast.com${episode.image}` : 'https://syntinuumpodcast.com/icon.png',
                uploadDate: episode.date
            }
        },
        keywords: `${episode.title}, ${episode.guest}, ${episode.product || ''}, Syntinuum, technology podcast, innovation podcast, Haresh Murugesan`.trim()
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Syntinuum Podcast',
                item: 'https://syntinuumpodcast.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Episodes',
                item: 'https://syntinuumpodcast.com/#episodes'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: episode.title,
                item: `https://syntinuumpodcast.com/episodes/${episode.id}`
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(episodeSchema)
                }
            }, void 0, false, {
                fileName: "[project]/components/seo/EpisodeJsonLd.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbSchema)
                }
            }, void 0, false, {
                fileName: "[project]/components/seo/EpisodeJsonLd.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/features/ShareButtons.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/features/ShareButtons.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/features/ShareButtons.tsx <module evaluation>", "default");
}),
"[project]/components/features/ShareButtons.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/features/ShareButtons.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/features/ShareButtons.tsx", "default");
}),
"[project]/components/features/ShareButtons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/features/ShareButtons.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/features/ShareButtons.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/episodes/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EpisodePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$episodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/episodes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$slug$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-slug/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$EpisodeJsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/seo/EpisodeJsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/ShareButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-rsc] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-rsc] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-rsc] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-music.js [app-rsc] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-rsc] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorPlay$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-play.js [app-rsc] (ecmascript) <export default as MonitorPlay>");
;
;
;
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const p = await params;
    const episode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$episodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEpisodeById"])(p.slug);
    if (!episode) return {};
    const episodeDescription = `Listen to "${episode.title}" featuring ${episode.guest} on the Syntinuum Podcast. ${episode.content.substring(0, 130).trim()}... Available on Spotify, Apple Podcasts, YouTube, Amazon Music. Visit syntinuumpodcast.com for all episodes.`;
    return {
        title: `${episode.title} with ${episode.guest} - Syntinuum Podcast`,
        description: episodeDescription,
        keywords: [
            episode.title,
            episode.guest,
            episode.product,
            `${episode.title} podcast`,
            `${episode.guest} interview`,
            `${episode.product} technology`,
            `${episode.product} innovation`,
            'Syntinuum',
            'Syntinuum Podcast',
            'technology podcast',
            'innovation podcast',
            'Haresh Murugesan'
        ].filter(Boolean),
        alternates: {
            canonical: `/episodes/${p.slug}`
        },
        openGraph: {
            title: `${episode.title} with ${episode.guest} | Syntinuum Podcast`,
            description: episodeDescription,
            images: [
                {
                    url: episode.image || `/api/og?title=${encodeURIComponent(episode.title)}${episode.guest ? `&guest=${encodeURIComponent(episode.guest)}` : ''}`,
                    width: 1200,
                    height: 630,
                    alt: `${episode.title} – Syntinuum Podcast Episode featuring ${episode.guest}`
                }
            ],
            type: "article",
            publishedTime: episode.date,
            authors: [
                episode.guest,
                "Haresh Murugesan"
            ],
            siteName: "Syntinuum Podcast"
        },
        twitter: {
            card: "summary_large_image",
            title: `${episode.title} | Syntinuum Podcast`,
            description: `${episode.guest} discusses ${episode.product || episode.title} on the Syntinuum Podcast.`,
            images: [
                episode.image || `/api/og?title=${encodeURIComponent(episode.title)}${episode.guest ? `&guest=${encodeURIComponent(episode.guest)}` : ''}`
            ],
            creator: "@AdaptPodcastCo"
        }
    };
}
async function EpisodePage({ params }) {
    const p = await params;
    const episode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$episodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEpisodeById"])(p.slug);
    if (!episode) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const relatedEpisodes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$episodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRelatedEpisodes"])(p.slug, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black pt-24 pb-20 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$EpisodeJsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                episode: episode
            }, void 0, false, {
                fileName: "[project]/app/episodes/[slug]/page.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-neon-purple/20 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/episodes/[slug]/page.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "max-w-4xl mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 font-mono text-sm group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16,
                                className: "group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            "Back to Transmissions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col md:flex-row gap-8 items-start mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/3 relative rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_-15px_rgba(168,85,247,0.3)] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: episode.image || '/icon.png',
                                    alt: `Cover art for ${episode.title}`,
                                    width: 800,
                                    height: 800,
                                    className: "w-full h-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/episodes/[slug]/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-2/3 flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-6 leading-tight",
                                        children: episode.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4 mb-8",
                                        children: [
                                            episode.guest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        size: 16,
                                                        className: "text-neon-purple"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Guest: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-medium",
                                                                children: episode.guest
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 50
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 33
                                            }, this),
                                            episode.product && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        size: 16,
                                                        className: "text-neon-blue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Topic: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-medium",
                                                                children: episode.product
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 50
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-6 relative z-50 mt-4 md:mt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                className: "group relative list-none [&::-webkit-details-marker]:hidden cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                        className: "flex items-center gap-2 bg-neon-purple hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-full transition-colors outline-none select-none w-fit shadow-lg shadow-neon-purple/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 37
                                                            }, this),
                                                            "Choose Platform",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 16,
                                                                className: "group-open:rotate-180 transition-transform ml-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute left-0 mt-3 w-64 bg-zinc-900 border border-zinc-700/50 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col pointer-events-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: episode.spotifyLink || "https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98",
                                                                "aria-label": "Listen on Spotify",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-[#1DB954]/10 text-[#1DB954] flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 200
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    "Spotify"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: episode.appleLink || "https://podcasts.apple.com/us/podcast/syntinuum-endless-evolutions/id1729494958",
                                                                "aria-label": "Listen on Apple Podcasts",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                            lineNumber: 130,
                                                                            columnNumber: 202
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    "Apple Podcasts"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: episode.youtubeLink || "https://www.youtube.com/channel/UCg2BeZarXY7YLdnFYwRS_HQ",
                                                                "aria-label": "Watch on YouTube",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorPlay$3e$__["MonitorPlay"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                            lineNumber: 134,
                                                                            columnNumber: 196
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    "YouTube"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: episode.amazonLink || "https://music.amazon.com/podcasts/a9b7e115-185a-4324-ae2d-33488a4fd26c/syntinuum-endless-evolutions",
                                                                "aria-label": "Listen on Amazon Music",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 border-b border-zinc-800/50 group/link",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                            lineNumber: 138,
                                                                            columnNumber: 198
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    "Amazon Music"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: episode.castboxLink || "https://castbox.fm/channel/Syntinuum%3A-Endless-Evolutions-id6033032?country=us",
                                                                "aria-label": "Listen on Castbox",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors text-zinc-200 group/link",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 group-hover/link:scale-110 transition-transform",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                            lineNumber: 142,
                                                                            columnNumber: 202
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    "Castbox"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                title: episode.title,
                                                slug: episode.id
                                            }, void 0, false, {
                                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-t border-zinc-800 mb-12"
                    }, void 0, false, {
                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-invert prose-purple max-w-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                            rehypePlugins: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$slug$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
                            ],
                            components: {
                                h2: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white mt-12 mb-6",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 55
                                    }, void 0),
                                p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 leading-relaxed mb-6 text-lg",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 54
                                    }, void 0),
                                ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 mb-6",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 55
                                    }, void 0),
                                li: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-zinc-300 flex items-start before:content-[''] before:w-1.5 before:h-1.5 before:bg-neon-purple before:rounded-full before:mt-2.5 before:mr-3",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 55
                                    }, void 0)
                            },
                            children: episode.content
                        }, void 0, false, {
                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this),
                    relatedEpisodes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-24 pt-12 border-t border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white mb-8",
                                children: "Related Transmissions"
                            }, void 0, false, {
                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                                children: relatedEpisodes.map((ep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/episodes/${ep.id}`,
                                        className: "block group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-neon-purple group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] group-hover:-translate-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-video overflow-hidden bg-zinc-800",
                                                    children: ep.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        src: ep.image,
                                                        alt: `Cover for ${ep.title}`,
                                                        fill: true,
                                                        className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 49
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center opacity-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            size: 48,
                                                            className: "text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-neon-purple transition-colors",
                                                            children: ep.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-zinc-400 text-sm",
                                                            children: ep.guest
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/episodes/[slug]/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/episodes/[slug]/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, this)
                                    }, ep.id, false, {
                                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/episodes/[slug]/page.tsx",
                                lineNumber: 174,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/episodes/[slug]/page.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/episodes/[slug]/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/episodes/[slug]/page.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
async function generateStaticParams() {
    const episodes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$episodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllEpisodes"])();
    return episodes.map((episode)=>({
            slug: episode.id
        }));
} // force recompile
}),
"[project]/app/episodes/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/episodes/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58141bbf._.js.map