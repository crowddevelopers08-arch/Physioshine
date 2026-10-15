import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // All images are pre-sized and served from Cloudinary, so skip Vercel
    // Image Optimization entirely (no transformations or cache on Vercel).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dpjheqgn/**",
      },
    ],
  },
};

export default nextConfig;
