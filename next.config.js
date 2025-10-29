/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 100],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  experimental: {
    scrollRestoration: true,
  },
  // Disable image optimization warnings
  logging: {
    level: 'error'
  },
  // Enable React Compiler for automatic optimizations
  reactCompiler: {
    compilationMode: 'annotation', // or 'all' for full optimization
  },
  // Output source maps in development
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  // Configure Turbopack
  turbopack: {
    // Explicitly set the root directory to avoid lockfile warnings
    root: __dirname,
  },
  // Fallback to webpack if needed
  webpack: (config, { isServer }) => {
    // Add any webpack configurations here if needed
    return config;
  },
};

// Conditionally enable Turbopack based on environment
const withTurbopack = process.env.TURBOPACK === '1' ? 
  (config) => ({
    ...config,
    // Additional Turbopack configurations can be added here
  }) : 
  (config) => config;

module.exports = withTurbopack(nextConfig);
