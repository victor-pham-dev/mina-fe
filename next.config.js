/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'app',
  publicRuntimeConfig: {
    favicon: './public/favicon.svg'
  },
  images: {
    unoptimized :true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ]
  },
  reactStrictMode: true
}

module.exports = nextConfig
