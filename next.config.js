/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "math.vsu.ru"],
  },
};

module.exports = nextConfig;
