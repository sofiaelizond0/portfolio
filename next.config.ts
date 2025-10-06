import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow external images served from images.unsplash.com
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
