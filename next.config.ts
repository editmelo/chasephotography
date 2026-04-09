import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
      {
        protocol: "https",
        hostname: "irp.cdn-website.com",
      },
    ],
  },
};

export default nextConfig;
