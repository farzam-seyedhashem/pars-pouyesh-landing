/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    // minimumCacheTTL: 2,
    formats: ['image/webp'],
    domains: ["20years.parspooyesh.com","localhost"],
    imageSizes: [16, 32, 48, 64, 96, 105, 128, 256, 320, 375, 384, 414, 480, 720, 1080, 1920, 1240, 1400, 810, 440, 600, 721],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
