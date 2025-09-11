// next-video.config.js
// Configuration for the `next-video` CLI. Reads provider + credentials from environment variables.
// Supported providers: 'cloudflare' | 'mux'
// To enable, create a .env.local with the required variables (see .env.local.example)

/**
 * Helper to require an env var with a friendly error when missing
 */
const requireEnv = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}. Please set it in your .env.local. See .env.local.example`);
  }
  return value;
};

const provider = process.env.NEXT_VIDEO_PROVIDER;

if (!provider) {
  // Provide a more actionable error when the watcher runs without config
  throw new Error(
    "NEXT_VIDEO_PROVIDER is not set. Choose 'cloudflare' or 'mux' and add credentials. See .env.local.example and next-video.config.js"
  );
}

/** @type {import('next-video/process').Config} */
let config;

if (provider === 'cloudflare') {
  config = {
    provider: 'cloudflare',
    cloudflare: {
      accountId: requireEnv('CLOUDFLARE_ACCOUNT_ID'),
      apiToken: requireEnv('CLOUDFLARE_API_TOKEN'),
    },
  };
} else if (provider === 'mux') {
  config = {
    provider: 'mux',
    mux: {
      tokenId: requireEnv('MUX_TOKEN_ID'),
      tokenSecret: requireEnv('MUX_TOKEN_SECRET'),
    },
  };
} else {
  throw new Error(
    `Unsupported NEXT_VIDEO_PROVIDER: ${provider}. Use 'cloudflare' or 'mux'.`
  );
}

module.exports = config;
