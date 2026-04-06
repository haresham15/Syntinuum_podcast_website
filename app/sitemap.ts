import { MetadataRoute } from 'next';
import { getAllEpisodes } from '@/lib/episodes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const episodes = await getAllEpisodes();
    
    const episodeRoutes: MetadataRoute.Sitemap = episodes.map((ep) => ({
        url: `https://syntinuumpodcast.com/episodes/${ep.id}`,
        lastModified: new Date(ep.date || new Date()),
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: 'https://syntinuumpodcast.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://syntinuumpodcast.com/#about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://syntinuumpodcast.com/#season3',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://syntinuumpodcast.com/#season2',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://syntinuumpodcast.com/#season1',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ];

    return [...staticRoutes, ...episodeRoutes];
}
