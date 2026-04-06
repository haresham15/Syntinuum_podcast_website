import { EpisodeData } from "@/lib/episodes";

export default function EpisodeJsonLd({ episode }: { episode: EpisodeData }) {
    const episodeSchema = {
        '@context': 'https://schema.org',
        '@type': 'PodcastEpisode',
        name: episode.title,
        description: episode.content.substring(0, 150) + "...", // Short excerpt
        datePublished: episode.date,
        timeRequired: 'PT45M', // Placeholder, could be dynamic later
        image: episode.image ? `https://syntinuum.vercel.app${episode.image}` : 'https://syntinuum.vercel.app/icon.png',
        partOfSeries: {
            '@type': 'PodcastSeries',
            name: 'Syntinuum: Endless Evolutions',
            url: 'https://syntinuum.vercel.app',
        },
        creator: {
            '@type': 'Person',
            name: 'Haresh Murugesan',
        },
        ...(episode.guest && {
            actor: {
                '@type': 'Person',
                name: episode.guest
            }
        }),
        associatedMedia: {
            '@type': 'AudioObject',
            contentUrl: episode.spotifyLink || '', // Highly recommended to improve audio SEO
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeSchema) }}
        />
    );
}
