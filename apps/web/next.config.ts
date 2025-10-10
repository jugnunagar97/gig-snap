import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
  eslint: {
    // Allow production builds to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // Silence workspace root inference warning by pointing to monorepo root
  outputFileTracingRoot: path.join(process.cwd(), "..", ".."),
};

export default nextConfig;
