/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');
const withTM = require('next-transpile-modules')(['gsap']);
const { withHydrationOverlay } = require("@builder.io/react-hydration-overlay/next");

// Note: Keep MillionLint import if used by tooling, but do not export it.
// const MillionLint = require('@million/lint');

// Base Next.js config
/** @type {import('next').NextConfig} */
// Remove the turbopack key to fix the warning
const nextConfig = {
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add CSS modules support
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { 
            modules: true,
            importLoaders: 1
          }
        }
      ]
    });

    return config;
  },
  // Suppress specific warnings
  onRecoverableError: (err) => {
    // Ignore fetchPriority and other common warnings
    if (err.message.includes('fetchPriority') || 
        err.message.includes('CustomImage') ||
        err.message.includes('unrecognized prop')) {
      return;
    }
    console.error(err);
  },
  // Disable React's StrictMode for development to prevent double-rendering
  reactStrictMode: process.env.NODE_ENV !== 'development',
  // Disable TypeScript type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  }
};

// Configure hydration overlay options
const withHydration = withHydrationOverlay({
  // If using the app directory, set to 'main'. Pages dir default is '#__next'.
  appRootSelector: 'main'
});

// Compose plugins: next-video -> hydration overlay -> transpile modules
// Order matters: inner-most applies first.
module.exports = withTM(
  withHydration(
    withNextVideo(nextConfig)
  )
);
