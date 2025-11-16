/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Mandatory setting for static export (used by GitHub Pages)
    output: 'export',

    // 2. CRITICAL: Sets the base path to match the repository name
    // Replace 'VidPro' with your repository name if it's different.
    basePath: '/VidPro',

    // 3. Mandatory to prevent image loading errors with 'output: export'
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;