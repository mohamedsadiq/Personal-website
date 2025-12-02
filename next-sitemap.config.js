/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mohamedsadiq.me',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Main section pages
    else if (['/projects', '/sparks', '/blogs', '/photo'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Individual project/blog pages
    else if (path.startsWith('/projects/') || path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
