/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "https://storage.googleapis.com",
      "storage.googleapis.com",
      "https://storage.googleapis.com/",
    ],
  },
};

module.exports = nextConfig;
