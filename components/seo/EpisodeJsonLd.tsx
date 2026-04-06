import { EpisodeData } from "@/lib/episodes";

export default function EpisodeJsonLd({ episode }: { episode: EpisodeData }) {
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
            url: 'https://syntinuumpodcast.com',
        },
        creator: {
            '@type': 'Person',
            name: 'Haresh Murugesan',
            url: 'https://syntinuumpodcast.com',
        },
        ...(episode.guest && {
            actor: {
                '@type': 'Person',
                name: episode.guest
            }
        }),
        ...(episode.spotifyLink && {
            associatedMedia: {
                '@type': 'AudioObject',
                contentUrl: episode.spotifyLink,
                encodingFormat: 'audio/mpeg',
            }
        }),
        ...(episode.youtubeLink && {
            video: {
                '@type': 'VideoObject',
                name: `${episode.title} – Syntinuum Podcast`,
                description: `Watch ${episode.guest} discuss ${episode.product || episode.title}.`,
                contentUrl: episode.youtubeLink,
                thumbnailUrl: episode.image ? `https://syntinuumpodcast.com${episode.image}` : 'https://syntinuumpodcast.com/icon.png',
                uploadDate: episode.date,
            }
        }),
        keywords: `${episode.title}, ${episode.guest}, ${episode.product || ''}, Syntinuum, technology podcast, innovation podcast, Haresh Murugesan`.trim(),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Syntinuum Podcast',
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
                name: episode.title,
                item: `https://syntinuumpodcast.com/episodes/${episode.id}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
