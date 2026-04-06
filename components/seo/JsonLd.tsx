'use client';

export default function JsonLd() {
    const podcastSchema = {
        '@context': 'https://schema.org',
        '@type': 'PodcastSeries',
        name: 'Syntinuum: Endless Evolutions',
        alternateName: ['Syntinuum Podcast', 'Syntinuum', 'Adapt: Implementing Innovations', 'Adapt Podcast'],
        description:
            'Syntinuum is a technology and innovation podcast exploring emerging tech, AI, wearable technology, sustainable innovation, hydrogen fuel cells, smart devices, neural interfaces, and the visionary founders building the future. Hosted by Haresh Murugesan, a Computer Science student at The Ohio State University. Listen free on Spotify, Apple Podcasts, YouTube, Amazon Music, and Castbox.',
        url: 'https://syntinuumpodcast.com',
        image: 'https://syntinuumpodcast.com/icon.png',
        author: {
            '@type': 'Person',
            name: 'Haresh Murugesan',
            jobTitle: 'Podcast Host & Computer Science Student',
            affiliation: {
                '@type': 'CollegeOrUniversity',
                name: 'The Ohio State University',
            },
            url: 'https://syntinuumpodcast.com',
        },
        genre: ['Technology', 'Innovation', 'Science', 'Artificial Intelligence', 'Sustainability', 'Engineering'],
        inLanguage: 'en',
        keywords: 'technology podcast, innovation podcast, AI podcast, wearable technology, sustainability, emerging tech, smart devices, neural interfaces, hydrogen fuel, startup founders, Haresh Murugesan, Ohio State, Syntinuum',
        webFeed: [
            {
                '@type': 'URL',
                name: 'Spotify',
                url: 'https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98',
            },
            {
                '@type': 'URL',
                name: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/us/podcast/syntinuum-endless-evolutions/id1729494958',
            },
            {
                '@type': 'URL',
                name: 'YouTube',
                url: 'https://www.youtube.com/channel/UCg2BeZarXY7YLdnFYwRS_HQ',
            },
            {
                '@type': 'URL',
                name: 'Amazon Music',
                url: 'https://music.amazon.com/podcasts/a9b7e115-185a-4324-ae2d-33488a4fd26c/syntinuum-endless-evolutions',
            },
            {
                '@type': 'URL',
                name: 'Castbox',
                url: 'https://castbox.fm/channel/Syntinuum%3A-Endless-Evolutions-id6033032?country=us',
            },
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Syntinuum Podcast',
        alternateName: ['Syntinuum: Endless Evolutions', 'Syntinuum', 'syntinuumpodcast.com'],
        url: 'https://syntinuumpodcast.com',
        description:
            'Official website for Syntinuum, a technology and innovation podcast exploring emerging tech, AI, wearable technology, sustainability, and the leaders building the future. Browse episodes, listen on your favorite platform, and discover the latest innovations.',
        publisher: {
            '@type': 'Person',
            name: 'Haresh Murugesan',
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://syntinuumpodcast.com/?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Haresh Murugesan',
        jobTitle: 'Podcast Host & Creator',
        description: 'Haresh Murugesan is the host of Syntinuum (formerly Adapt), a technology and innovation podcast. He is a Computer Science Engineering student at The Ohio State University.',
        affiliation: {
            '@type': 'CollegeOrUniversity',
            name: 'The Ohio State University',
        },
        url: 'https://syntinuumpodcast.com',
        sameAs: [
            'https://www.instagram.com/adapt_podcast',
            'https://x.com/AdaptPodcastCo',
            'https://www.youtube.com/channel/UCg2BeZarXY7YLdnFYwRS_HQ',
            'https://open.spotify.com/show/5LPGObcWQdkoERNzZsdL98',
            'https://podcasts.apple.com/us/podcast/syntinuum-endless-evolutions/id1729494958',
            'https://music.amazon.com/podcasts/a9b7e115-185a-4324-ae2d-33488a4fd26c/syntinuum-endless-evolutions',
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://syntinuumpodcast.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Episodes',
                item: 'https://syntinuumpodcast.com/#episodes',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Season 3',
                item: 'https://syntinuumpodcast.com/#season3',
            },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is Syntinuum?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Syntinuum (formerly Adapt: Implementing Innovations) is a technology and innovation podcast hosted by Haresh Murugesan. The podcast explores emerging tech, AI, wearable technology, sustainable innovation, and interviews visionary founders building the future. It is available on Spotify, Apple Podcasts, YouTube, Amazon Music, and Castbox.',
                },
            },
            {
                '@type': 'Question',
                name: 'Who hosts the Syntinuum Podcast?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Syntinuum Podcast is hosted by Haresh Murugesan, a Computer Science Engineering student at The Ohio State University. He founded the podcast to document the progress of emerging technology innovations and inspire the next generation of creators.',
                },
            },
            {
                '@type': 'Question',
                name: 'Where can I listen to the Syntinuum Podcast?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can listen to the Syntinuum Podcast on Spotify, Apple Podcasts, YouTube, Amazon Music, and Castbox. Visit syntinuumpodcast.com for direct links to all platforms.',
                },
            },
            {
                '@type': 'Question',
                name: 'What topics does Syntinuum cover?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Syntinuum covers a broad range of technology and innovation topics including artificial intelligence, wearable technology (smart rings, neural earbuds), sustainable packaging, hydrogen fuel cells, augmented reality in surgery, AI-powered smart pens, mental health technology, speech assistive technology, smart mirrors, and more.',
                },
            },
            {
                '@type': 'Question',
                name: 'How many seasons does Syntinuum have?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Syntinuum currently has 3 seasons. Season 1 (Retrospective Base Ground) established the foundation, Season 2 (The Next Iteration) expanded to deeper innovation analysis, and Season 3 (Growing and Learning) continues with new guests and technologies.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
