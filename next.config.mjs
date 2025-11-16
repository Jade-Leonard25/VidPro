/** @type {import('next').NextConfig} */
const nextConfig = {

    // 1. Necessary for static export
    output:'export',

    // 2. CRITICAL FIX: Base path must match your repository name exactly.
    //    Example: If your repo is named 'my-portfolio', use '/my-portfolio'.
    basePath: 'VidPro',

    // 3. Recommended: Disable image optimization for static export compatibility.
    images: {
        unoptimized: true,
    }
};

export default nextConfig;