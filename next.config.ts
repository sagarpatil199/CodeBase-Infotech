import type { NextConfig } from "next";

/**
 * Static frontend only: `next build` writes plain HTML/CSS/JS to `out/`,
 * which can be hosted on any static file host. There is no server.
 *
 * PAGES_BASE_PATH: set when the site is served from a sub-folder, such as
 * GitHub Pages at https://<user>.github.io/<repo>/ (value "/<repo>").
 * The GitHub Actions workflow sets it automatically. Leave it unset for a
 * custom domain or a <user>.github.io repository.
 */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
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
