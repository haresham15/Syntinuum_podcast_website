/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Optional: if we want static export
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;
