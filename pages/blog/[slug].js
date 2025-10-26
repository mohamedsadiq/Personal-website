import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import WorkIntro from '../../components/WorkIntro'
import BackButton from '../../components/backButton'
export default function PostPage({ content, frontmatter }) {
  const colors = ["#dbece9", "#efe1e2", "#e2e5ef"];
  const date = new Date(frontmatter.date);
  const [headings, setHeadings] = useState([]);
  // Determine featured image from frontmatter
  const firstImage = frontmatter.image || (Array.isArray(frontmatter.images) && frontmatter.images.length > 0 ? frontmatter.images[0] : null);
  // For next/image, use a local/public path (leading slash). Do NOT use ImageUrl here.
  const featuredImagePath = firstImage ? (firstImage.startsWith('/') ? firstImage : '/' + firstImage) : null;

  // Customize markdown rendering to match LightUp project page
  marked.use({
    renderer: {
      paragraph(text) {
        return `<p class="text-gray-500 leading-relaxed mb-6">${text}</p>`;
      },
      heading(text, level) {
        if (level === 1) {
          return `<h1 class="text-4xl font-semibold text-slate-950 mb-6">${text}</h1>`;
        } else if (level === 2) {
          return `<h2 class="text-2xl font-medium text-slate-950 mt-12 mb-4">${text}</h2>`;
        } else if (level === 3) {
          return `<h3 class="text-xl font-medium text-gray-500 mt-10 mb-3">${text}</h3>`;
        }
        return `<h${level} class="text-lg font-medium text-gray-700 mt-8 mb-3">${text}</h${level}>`;
      },
      list(body, ordered) {
        const tag = ordered ? 'ol' : 'ul';
        const listClass = ordered ? 'list-decimal' : 'list-disc';
        return `<${tag} class="${listClass} pl-6 mb-6 text-gray-500 space-y-2">${body}</${tag}>`;
      },
      listitem(text) {
        return `<li class="pl-2">${text}</li>`;
      },
      link(href, title, text) {
        const t = title ? ` title="${title}"` : '';
        return `<a href="${href}"${t} class="text-blue-600 hover:text-blue-800 transition-colors">${text}</a>`;
      },
      strong(text) {
        return `<strong class="font-semibold">${text}</strong>`;
      },
      em(text) {
        return `<em class="italic">${text}</em>`;
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

  const imageMeta = frontmatter.images.map(image => {
    const imageUrl = ImageUrl(image);
    return {
      url: imageUrl,
      width: 1224,
      height: 724,
      alt: frontmatter.title,
      type: 'image/jpeg',
    };
  });

  function shareOnTwitter(title, url) {
    const text = encodeURIComponent(title);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    return shareUrl;
  }

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

      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            {/* <WorkIntro title={frontmatter.title} link={'/blogs'} backHref={'/blogs'} /> */}
             <BackButton href="/projects" />
            <div className="mb-10">
            <h1 className="text-4xl  font-semibold text-slate-950 mb-4">
                {frontmatter.title }
              </h1>
              <p className="text-md text-[#676767] mb-6 ">
                {/* {frontmatter.summary} {" "} */}

                <span className=" text-gray-400 text-sm mt-2">
                   {new Date(frontmatter.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </p>
              
              {featuredImagePath && (
                <div className="relative w-full h-96 rounded-xl overflow-hidden mb-10 bg-gray-100">
                  <Image
                    src={featuredImagePath}
                    alt={frontmatter.title || 'Blog cover image'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                    priority
                  />
                </div>
              )}
              
              {/* <div className="flex flex-wrap gap-2 mb-8">
                {frontmatter.categories?.map((category, index) => {
                  const slug = slugify(category);
                  const colorIndex = index % colors.length;
                  const backgroundColor = colors[colorIndex];

                  return (
                    <Link 
                      key={category} 
                      href={`/category/${slug}`}
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: `${backgroundColor}80` }}
                    >
                      {category}
                    </Link>
                  );
                })}
              </div> */}
            </div>
            
            <div className="prose prose-lg max-w-none text-[#676767]">
              <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
            </div>
            
            {headings.length > 0 && (
              <nav className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {headings.map((heading, index) => (
                    <li key={index} style={{ marginLeft: `${(heading.level - 1) * 0.5}rem` }}>
                      <button 
                        onClick={() => handleScrollToHeading(heading.id)}
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors text-left"
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
      </div>
      <style jsx>{`
        .side-nav {
          position: fixed;
          top: 100px;
          right: 20px;
          width: 200px;
          display: none;
        }
        .side-nav ul {
          list-style: none;
          padding: 0;
        }
        .side-nav li {
          margin-bottom: 10px;
        }
        .side-nav button {
         background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          text-align: left;
          padding: 0;
          font-size: 0.7rem;
        }
        .dark .side-nav button {
          color: #fff !important;
        }
        .light .side-nav button {
          color: #fff !important;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const temppaths = files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.draft === false) {
      return {
        params: {
          slug: filename.replace('.md', ''),
        },
      };
    } else {
      return null;
    }
  });
  // Remove null in tempPosts 
  const paths = temppaths.filter(path => {
    return path && path;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
