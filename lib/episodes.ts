import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'episodes');

export interface EpisodeData {
    id: string;
    title: string;
    guest: string;
    product?: string;
    date: string;
    image?: string;
    youtubeLink?: string;
    spotifyLink?: string;
    appleLink?: string;
    amazonLink?: string;
    castboxLink?: string;
    content: string; // The markdown body
}

/**
 * Ensures the content directory exists.
 */
function ensureDirectory() {
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
    }
}

/**
 * Retrieves a single episode by its ID (slug).
 */
export async function getEpisodeById(id: string): Promise<EpisodeData | null> {
    ensureDirectory();
    try {
        const fullPath = path.join(contentDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the episode metadata section
        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title || '',
            guest: matterResult.data.guest || '',
            product: matterResult.data.product || '',
            date: matterResult.data.date || '',
            image: matterResult.data.image || '',
            youtubeLink: matterResult.data.youtubeLink || '',
            spotifyLink: matterResult.data.spotifyLink || '',
            appleLink: matterResult.data.appleLink || '',
            amazonLink: matterResult.data.amazonLink || '',
            castboxLink: matterResult.data.castboxLink || '',
            content: matterResult.content,
        };
    } catch (e) {
        return null; // Return null if file not found
    }
}

/**
 * Retrieves all episodes sorted by date.
 */
export async function getAllEpisodes(): Promise<EpisodeData[]> {
    ensureDirectory();
    const fileNames = fs.readdirSync(contentDirectory);
    
    // Filter only .md files
    const mdFiles = fileNames.filter(fileName => fileName.endsWith('.md'));

    const allEpisodesList = await Promise.all(
        mdFiles.map(async (fileName) => {
            const id = fileName.replace(/\.md$/, '');
            const episode = await getEpisodeById(id);
            return episode!;
        })
    );

    // Sort episodes by date
    return allEpisodesList.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

/**
 * Retrieves related episodes based on keyword matching in title, guest, or product.
 */
export async function getRelatedEpisodes(currentId: string, limit: number = 3): Promise<EpisodeData[]> {
    const allEpisodes = await getAllEpisodes();
    const currentEpisode = allEpisodes.find(ep => ep.id === currentId);
    
    if (!currentEpisode) return [];

    const otherEpisodes = allEpisodes.filter(ep => ep.id !== currentId);
    
    // Extract keywords from the current episode to compare
    const getKeywords = (ep: EpisodeData) => {
        const text = `${ep.title} ${ep.guest} ${ep.product || ''}`.toLowerCase();
        return new Set(text.split(/\W+/).filter(word => word.length > 4));
    };

    const currentKeywords = getKeywords(currentEpisode);

    // Score each episode based on keyword intersection
    const scoredEpisodes = otherEpisodes.map(ep => {
        const keywords = getKeywords(ep);
        let score = 0;
        for (const word of currentKeywords) {
            if (keywords.has(word)) score += 1;
        }
        return { episode: ep, score };
    });

    // Sort by score (descending), then by date (newest first)
    scoredEpisodes.sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score;
        return a.episode.date < b.episode.date ? 1 : -1;
    });

    return scoredEpisodes.slice(0, limit).map(item => item.episode);
}
