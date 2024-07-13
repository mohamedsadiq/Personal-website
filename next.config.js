const MillionLint = require('@million/lint');
// /** @type {import('next').NextConfig} */
// const path = require('path')
// const withSass = require('@zeit/next-sass');
// const nextConfig = {reactStrictMode: true}
// module.exports = nextConfig
// module.exports = withSass({
// cssModules: true
// })
// module.exports = {
// /* Add Your Scss File Folder Path Here */
// sassOptions: {
// includePaths: [path.join(__dirname, 'styles')],
// },
// }

const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();
const {
  withHydrationOverlay
} = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** your config here */
};
module.exports = withHydrationOverlay({
  /**
   * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
   * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
   */
  webpack: (config, {
    isServer
  }) => {
    // Add the file loader rule for video files
    config.module.rules.push({
      test: /\.(mov|mp4|avi|wmv|flv|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/videos/',
          publicPath: '/_next/static/videos/'
        }
      }
    });
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    });
    return config;
  },
  appRootSelector: "main"
})(nextConfig);