import type { NextConfig } from "next";

/**
 * Static frontend only: `next build` writes plain HTML/CSS/JS to `out/`,
 * which can be hosted on any static file host. There is no server.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
