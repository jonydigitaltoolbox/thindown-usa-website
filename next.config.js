/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thindown.it',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // During development, we want strict type checking
    ignoreBuildErrors: false,
  },
  eslint: {
    // During development, we want strict linting
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
