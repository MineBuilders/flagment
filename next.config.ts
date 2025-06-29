import type { NextConfig } from "next";

const basePath = process.env.NEXT_BASE_PATH || '';

const nextConfig: NextConfig = {
    images: { unoptimized: true },
    output: 'export',
    basePath,
};

export default nextConfig;
