import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo-name>/. The deploy workflow sets
// PAGES_BASE_PATH (e.g. "/aurelia-demo"); local builds and other hosts leave it empty.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to `out/`,
  // which any static host (Render, Netlify, Cloudflare Pages, GitHub Pages) can serve.
  output: "export",
  basePath,
  // Each page becomes folder/index.html, so /projects/ works on hosts without clean-URL rewrites.
  trailingSlash: true,
  // Photos are stand-ins served from the Unsplash CDN, which resizes on request.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
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
