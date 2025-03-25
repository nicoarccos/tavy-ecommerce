/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ford.com.ar',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'acroadtrip.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.remediosdigitales.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.motor1.com',
        pathname: '/**',
      }
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig; 