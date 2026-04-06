const fs = require('fs');
const path = require('path');

const s2Episodes = [
    { id: 's2-e1', title: 'Nuwa Smart Pen', guest: 'Marc Tuinier', product: 'Nuwa Pen', desc: 'Reinventing the pen for the digital age. This AI-powered ballpoint pen digitizes your handwriting on any paper.', image: '/media/s2/1.png', link: 'https://youtube.com/watch?v=TRuFpK_j-YE' },
    { id: 's2-e2', title: 'Neuro-Law Special', guest: 'Joseph Wszalek', product: 'Neuro-Law', desc: 'A deep dive into the intersection of neuroscience and law. How brain science is changing the way we understand justice and responsibility.', image: '/media/s2/2.png', link: 'https://youtube.com/watch?v=Tt4CBcyt-2c' },
    { id: 's2-e3', title: 'Honda Hydrogen', guest: 'Honda R&D', product: 'CR-V e:FCEV', desc: 'Implementing innovations in hydrogen fuel cell technology. Exploring the future of sustainable mobility with Honda\'s latest advancements.', image: '/media/s2/3.png', link: 'https://www.youtube.com/@Adapt-ImplementingInnovations' },
    { id: 's2-e4', title: 'Notpla', guest: 'Callum Rhodes', product: 'Notpla Packaging', desc: 'Revolutionary packaging that disappears. Made from seaweed and plants, Notpla offers a sustainable alternative to single-use plastics.', image: '/media/s2/4.png', link: 'https://www.youtube.com/@Adapt-ImplementingInnovations' },
    { id: 's2-e5', title: 'Baracoda', guest: 'Thomas Serval', product: 'BMind Mirror', desc: 'Pioneering the daily healthtech revolution with the world\'s first AI-powered smart mirror for mental wellness and stress management.', image: '/media/s2/5.png', link: 'https://www.youtube.com/@Adapt-ImplementingInnovations' },
    { id: 's2-e6', title: 'Whispp', guest: 'Joris Castermans', product: 'Whispp App', desc: 'AI-powered speech technology that converts whispered speech into a clear and natural voice for people with voice disabilities.', image: '/media/s2/6.png', link: 'https://www.youtube.com/@Adapt-ImplementingInnovations' },
    { id: 's2-e7', title: 'BackAware Workout Belt', guest: 'Dr. Peter O\'Sullivan', product: 'BackAware', desc: 'A smart belt utilizing AI to provide real-time feedback on back posture during workouts, preventing injury and maximizing efficiency.', image: '/media/s2/7.png', link: 'https://youtube.com/watch?v=Dx08Oxq65eg' },
    { id: 's2-e8', title: 'Colorpik AI Smart Pen', guest: 'Steve Wang', product: 'Colorpik', desc: 'The world\'s first pen that can scan and reproduce any color in the universe. A revolutionary tool for artists and designers.', image: '/media/s2/8.png', link: 'https://youtube.com/watch?v=V-xad4CYvis' }
];

const s1Episodes = [
    { id: 's1-e1', title: 'AI Assisted Architecture', guest: 'Architecture Team', product: 'AI Design', desc: 'How AI is shaping the skyline. The role of generative design in modern construction and urban planning.', image: '/media/s1/9.png', link: 'https://youtu.be/YKkqn0x3mEQ' },
    { id: 's1-e2', title: 'XVision Headset', guest: 'Augmedics Team', product: 'XVision', desc: 'Augmented reality for surgeons. Giving doctors x-ray vision to see through anatomy during complex procedures.', image: '/media/s1/10.png', link: 'https://youtu.be/z6naGP1PY74' },
    { id: 's1-e3', title: 'NAQi Neural Earbuds', guest: 'Dave Segal', product: 'NAQI Earbuds', desc: 'Control digital devices with your mind? Neural earbuds and the future of human-computer interfaces.', image: '/media/s1/11.png', link: 'https://youtu.be/-fH-FkjSY-s' },
    { id: 's1-e4', title: 'Rainstick Shower', guest: 'Alisha McFetridge', product: 'Rainstick', desc: 'The sustainable shower of the future. Saving water and energy without compromising the shower experience.', image: '/media/s1/12.png', link: 'https://youtu.be/Q4RHkE_ojBE' },
    { id: 's1-e5', title: 'AI Art Theft Prevention', guest: 'Dr. Shawn Shan', product: 'Glaze AI Prevention', desc: 'Protecting art from theft. How AI is revolutionizing the art world and keeping priceless works safe.', image: '/media/s1/13.png', link: 'https://youtu.be/FaUqpbqMcps' },
    { id: 's1-e6', title: 'GACW', guest: 'Dr. Zoltan Kemeney', product: 'Air Sus. Wheels', desc: 'Reinventing the wheel. Air suspension technology for heavy machinery that improves efficiency and durability.', image: '/media/s1/14.png', link: 'https://youtu.be/oljsu5EuXZw' },
    { id: 's1-e7', title: 'FeaturePrint', guest: 'Mr.Roei Ganzarski', product: 'FeaturePrint', desc: 'Authenticating products with a single photo. The physics of uniqueness and the end of counterfeiting.', image: '/media/s1/15.png', link: 'https://youtu.be/ZFkU_g8cGI0' },
    { id: 's1-e8', title: 'Ehrman Crest School', guest: 'Timothy J. Eiler', product: 'Ehrman Crest', desc: 'Exploring the layout of the future. How Ehrman Crest is redefining education through architecture and design.', image: '/media/s1/16.png', link: 'https://youtu.be/CRt8Whi_K4c' }
];

const allEpisodes = [...s2Episodes, ...s1Episodes];
const dir = path.join(__dirname, 'content', 'episodes');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

allEpisodes.forEach((ep) => {
    const year = ep.id.startsWith('s2') ? '2023-11' : '2023-05';
    const day = ep.id.split('e')[1].padStart(2, '0');
    const date = `${year}-${day}`;

    let yLink = '';
    let sLink = '';
    if (ep.link.includes('youtu')) {
        yLink = ep.link;
    } else {
        sLink = ep.link;
    }

    const markdown = `---
id: ${ep.id}
title: "${ep.title}"
guest: "${ep.guest}"
product: "${ep.product}"
date: "${date}"
image: "${ep.image}"
youtubeLink: "${yLink}"
spotifyLink: "${sLink}"
---
${ep.desc}

## Key Takeaways
- Insight about ${ep.product}
- Discussion with ${ep.guest}
- Transforming the industry

## Full Transcript
*This is a placeholder for the full transcript of the episode. You can paste the actual transcript here later.*
`;

    fs.writeFileSync(path.join(dir, `${ep.id}.md`), markdown);
});

console.log('Done generating ' + allEpisodes.length + ' episodes.');
