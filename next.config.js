/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
