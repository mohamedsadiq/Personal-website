import { DefaultSeoProps } from 'next-seo';

// Site configuration
export const SITE_URL = 'https://mosadiq.com';
export const SITE_NAME = 'Moe Sadiq';
export const DEFAULT_TITLE = 'Moe Sadiq - Designer & Engineer';
export const DEFAULT_DESCRIPTION = 'a designer-engineer who acts on his curiosity.';
export const TWITTER_HANDLE = '@sadiq_moo';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Default SEO configuration for next-seo
export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Moe Sadiq',
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Moe Sadiq - Designer & Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: SITE_NAME,
    },
    {
      name: 'keywords',
      content: 'product design, web development, web3, UI/UX, React, Next.js, TypeScript, open source',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

// Helper function to generate page-specific SEO props
export interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}

export const getPageSEO = ({
  title,
  description,
  path = '',
  ogImage,
  ogImageAlt,
  noindex = false,
  article,
}: PageSEOProps) => {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const imageAlt = ogImageAlt || title;

  return {
    title,
    description,
    canonical: url,
    noindex,
    openGraph: {
      title,
      description,
      url,
      type: article ? 'article' : 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: 'image/png',
        },
      ],
      ...(article && {
        article: {
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
          authors: article.authors,
          tags: article.tags,
        },
      }),
    },
    twitter: {
      cardType: 'summary_large_image',
    },
  };
};

// JSON-LD structured data helpers
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: [
    `https://x.com/sadiq_moo`,
    'https://github.com/MohamedSadiq',
  ],
  jobTitle: 'Product Designer & Engineer',
  description: DEFAULT_DESCRIPTION,
});

export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  author: {
    '@type': 'Person',
    name: SITE_NAME,
  },
});

export const getProjectSchema = (project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.description,
  url: project.url,
  image: project.image || DEFAULT_OG_IMAGE,
  datePublished: project.datePublished,
  author: {
    '@type': 'Person',
    name: SITE_NAME,
  },
});

export const getBlogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  url: post.url,
  image: post.image || DEFAULT_OG_IMAGE,
  datePublished: post.datePublished,
  dateModified: post.dateModified || post.datePublished,
  author: {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
  },
});
