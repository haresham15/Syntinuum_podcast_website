'use client';

export default function JsonLd() {
    const podcastSchema = {
        '@context': 'https://schema.org',
        '@type': 'PodcastSeries',
        name: 'Syntinuum: Endless Evolutions',
        alternateName: ['Syntinuum Podcast', 'Adapt: Implementing Innovations'],
        description:
            'Syntinuum is a technology and innovation podcast exploring emerging tech, product innovation, and the leaders building the future. Hosted by Haresh Murugesan.',
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
        genre: ['Technology', 'Innovation', 'Science'],
        inLanguage: 'en',
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
        alternateName: 'Syntinuum: Endless Evolutions',
        url: 'https://syntinuumpodcast.com',
        description:
            'Official website for Syntinuum, a technology and innovation podcast exploring emerging tech and the leaders building the future.',
        publisher: {
            '@type': 'Person',
            name: 'Haresh Murugesan',
        },
    };

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Haresh Murugesan',
        jobTitle: 'Podcast Host',
        affiliation: {
            '@type': 'CollegeOrUniversity',
            name: 'The Ohio State University',
        },
        url: 'https://syntinuumpodcast.com',
        sameAs: [
            'https://www.instagram.com/adapt_podcast',
            'https://x.com/AdaptPodcastCo',
            'https://www.youtube.com/channel/UCg2BeZarXY7YLdnFYwRS_HQ',
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
        </>
    );
}
