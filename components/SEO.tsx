import { NextSeo, NextSeoProps } from 'next-seo';
import Head from 'next/head';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  getPageSEO,
  getPersonSchema,
  getWebsiteSchema,
  type PageSEOProps,
} from '../lib/seo.config';

interface SEOProps extends Partial<PageSEOProps> {
  /** Page title (will be appended with site name) */
  title: string;
  /** Meta description for search engines */
  description: string;
  /** URL path (e.g., '/projects' or '/projects/lightup') */
  path?: string;
  /** Custom OG image URL - defaults to site default if not provided */
  ogImage?: string;
  /** Alt text for OG image */
  ogImageAlt?: string;
  /** Whether to prevent indexing */
  noindex?: boolean;
  /** Include JSON-LD structured data */
  includeSchema?: boolean;
  /** Custom JSON-LD schema to add */
  customSchema?: Record<string, unknown>;
  /** Article metadata for blog posts */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}

/**
 * Reusable SEO component for all pages
 * 
 * Usage:
 * ```tsx
 * <SEO 
 *   title="Projects"
 *   description="Explore my design and development projects"
 *   path="/projects"
 *   ogImage="/og-images/projects.png" // optional
 * />
 * ```
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '',
  ogImage,
  ogImageAlt,
  noindex = false,
  includeSchema = true,
  customSchema,
  article,
}) => {
  const seoProps = getPageSEO({
    title,
    description,
    path,
    ogImage,
    ogImageAlt,
    noindex,
    article,
  });

  // Build schema array
  const schemas: Record<string, unknown>[] = [];
  if (includeSchema) {
    schemas.push(getWebsiteSchema());
    schemas.push(getPersonSchema());
  }
  if (customSchema) {
    schemas.push(customSchema);
  }

  return (
    <>
      <NextSeo {...seoProps} />
      {schemas.length > 0 && (
        <Head>
          {schemas.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
        </Head>
      )}
    </>
  );
};

export default SEO;
