import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* your existing config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
