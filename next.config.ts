import type { NextConfig } from "next";

/** Static export for GitHub Pages (`out/`). */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
