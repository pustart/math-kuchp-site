/** @type {import('next').NextConfig} */
// const dns = require("dns");

// dns.setDefaultResultOrder("ipv4first");
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'default',
    domains: ['localhost', 'math.vsu.ru', 'www.kuchp.ru'],
  },
};

module.exports = nextConfig;
