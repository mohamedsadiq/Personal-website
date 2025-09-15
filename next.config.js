/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');
const withTM = require('next-transpile-modules')(['gsap']);
const { withHydrationOverlay } = require("@builder.io/react-hydration-overlay/next");

// Note: Keep MillionLint import if used by tooling, but do not export it.
// const MillionLint = require('@million/lint');

// Base Next.js config
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add shared webpack modifications here so they persist across wrappers
  eslint: {
    // Skip ESLint during build to avoid version/options mismatch on CI
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Preserve existing custom rules

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: { modules: true }
      }]
    });

    return config;
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
