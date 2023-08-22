const { sources } = require('next/dist/compiled/webpack/webpack');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/de',
        destination: 'https://www.naver.com',
        permanent: true,
      },
    ];
  },

  rewrites() {
    return [
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
