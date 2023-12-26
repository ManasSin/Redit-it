/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
  pageExtensions: [
    "page.tsx",
    "tsx",
    "page.tx",
    "tx",
    "page.jsx",
    "jsx",
    "page.js",
    "js",
  ],
};

module.exports = nextConfig;
