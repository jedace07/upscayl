/** @type {import("next").NextConfig} */
const nextConfig = {
  // Electron loads the packaged renderer from disk, so production builds must
  // be fully static rather than backed by a Next.js server.
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
