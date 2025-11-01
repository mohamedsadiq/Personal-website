import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BackButton from '../../components/backButton';
export default function PostPage({ content, frontmatter }) {
  const [headings, setHeadings] = useState([]);
  
  // Determine featured image from frontmatter
  const firstImage = frontmatter.image || 
    (Array.isArray(frontmatter.images) && frontmatter.images.length > 0 ? frontmatter.images[0] : null);
  
  // For next/image, use a local/public path (leading slash)
  const featuredImagePath = firstImage ? 
    (firstImage.startsWith('/') ? firstImage : '/' + firstImage) : null;

  // Customize markdown rendering to match projects page styling
  marked.use({
    renderer: {
      paragraph(text) {
        return `<p class="text-[#616161] leading-7 mb-12 text-base">${text}</p>`;
      },
      heading(text, level) {
        if (level === 1) {
          return `<h1 class="text-3xl sm:text-4xl font-medium text-[#333] mb-6">${text}</h1>`;
        } else if (level === 2) {
          return `<h2 class="text-2xl sm:text-3xl font-medium text-[#333] mt-12 mb-6">${text}</h2>`;
        } else if (level === 3) {
          return `<h3 class="text-xl sm:text-2xl font-medium text-[#555] mt-10 mb-4">${text}</h3>`;
        }
        return `<h${level} class="text-lg sm:text-xl font-medium text-[#666] mt-8 mb-3">${text}</h${level}>`;
      },
      list(body, ordered) {
        const tag = ordered ? 'ol' : 'ul';
        const listClass = ordered ? 'list-decimal' : 'list-disc';
        return `<${tag} class="${listClass} pl-6 mb-6 text-[#616161] space-y-2 text-base">${body}</${tag}>`;
      },
      listitem(text) {
        return `<li class="mb-2">${text}</li>`;
      },
      link(href, title, text) {
        const t = title ? ` title="${title}"` : '';
        return `<a href="${href}"${t} class="text-[#0066cc] hover:underline transition-colors">${text}</a>`;
      },
      strong(text) {
        return `<strong class="font-medium">${text}</strong>`;
      },
      em(text) {
        return `<em class="italic">${text}</em>`;
      },
      codespan(text) {
        return `<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-700">${text}</code>`;
      },
      code(code, infostring) {
        return `<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm font-mono text-gray-700">${code}</code></pre>`;
      }
    }
  });

  useEffect(() => {
    const htmlContent = marked.parse(content);
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const headingsArray = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((heading) => {
      const id = heading.id || slugify(heading.innerText);
      heading.id = id; // Set the id on the heading element
      return {
        text: heading.innerText,
        id: id,
        level: parseInt(heading.tagName.replace('H', ''), 10),
      };
    });
    setHeadings(headingsArray);
  }, [content]);

  const imageMeta = frontmatter.images ? frontmatter.images.map(image => ({
    url: image.startsWith('http') ? image : `https://mosadiq.com${image.startsWith('/') ? '' : '/'}${image}`,
    width: 1224,
    height: 724,
    alt: frontmatter.title,
    type: 'image/jpeg',
  })) : [];


  function handleScrollToHeading(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.summary}
        openGraph={{
          url: 'https://mosadiq.com',
          title: frontmatter.title,
          description: frontmatter.summary,
          type: 'article',
          article: {
            publishedTime: frontmatter.date,
            authors: ['https://mosadiq.com'],
            tags: frontmatter.tags,
          },
          images: imageMeta,
          site_name: 'Mohamed Sadiq',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@YourTwitterHandle', // Replace with your Twitter handle
          title: frontmatter.title,
          description: frontmatter.summary,
          images: imageMeta.map(img => img.url),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <BackButton href="/" />
          
          {/* Title and Metadata */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl text-[#333] mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-sm text-[#888]">
              {new Date(frontmatter.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              {frontmatter.summary && (
                <span className="block mt-2 text-[#666]">
                  {frontmatter.summary}
                </span>
              )}
            </p>
          </div>
          
          {/* Full Width Image */}
          {featuredImagePath && (
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mr-[50vw] mb-10">
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100">
                <Image
                  src={featuredImagePath}
                  alt={frontmatter.title || 'Blog cover image'}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>
          )}
          
          {/* Article Content */}
          <article className="prose prose-lg max-w-3xl mx-auto">
            <div className="prose-img:max-w-full prose-img:rounded-lg" dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
          </article>
          
          {headings.length > 0 && (
            <nav className="mt-16 pt-8 border-t border-gray-100">
              <h3 className="text-sm font-medium text-[#666] mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {headings.map((heading, index) => (
                  <li key={index} style={{ marginLeft: `${(heading.level - 1) * 0.75}rem` }}>
                    <button 
                      onClick={() => handleScrollToHeading(heading.id)}
                      className="text-sm text-[#666] hover:text-[#333] transition-colors text-left"
                    >
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      </>
    );
  }

export async function getStaticPaths() {
  // Get all markdown files in the posts directory
  const files = fs.readdirSync(path.join('posts'));
  
  // Create paths for each post
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(/\.md$/, '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Get markdown file content
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', `${slug}.md`),
    'utf-8'
  );

  // Parse frontmatter and content
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      },
      content,
    },
  };
}
