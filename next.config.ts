import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tildacdn.com",
      },
      {
        protocol: "https",
        hostname: "optim.tildacdn.pub",
      },
      {
        protocol: "https",
        hostname: "thumb.tildacdn.com",
      },
      {
        protocol: "https",
        hostname: "images.tildacdn.com",
      },
    ],
  },
};

export default nextConfig;
