import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';

export default function PostPage({ content, frontmatter }) {
  const colors = ["#dbece9", "#efe1e2", "#e2e5ef"];
  const date = new Date(frontmatter.date);
  const [headings, setHeadings] = useState([]);

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

      <div className="container">
        <div className="inner_container inner_blog_body">
          <div className="col-lg-10 m-auto">
            <Link href={"/blogs"}>
              <div className="go_back"> ↰ Go Back</div>
            </Link>
            <div className='card card-page'>
              <a href={`/blog/${frontmatter.slug}`} ></a>
              <h1 className='post-title mt-10 mb-10'>{frontmatter.title}</h1>
              <div className='post-date mt-2 mb-2'>
                <div> {
                  frontmatter.categories.map((category, index) => {
                    const slug = slugify(category);
                    const colorIndex = index % colors.length;
                    const backgroundColor = colors[colorIndex];

                    return (
                      <Link className="tag" key={category} href={`/category/${slug}`}>
                        <span style={{ background: backgroundColor }} className="tags">
                          {category}
                        </span>
                      </Link>
                    );
                  })
                }
                </div>
                <div><h6> {`${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`} </h6></div>
              </div>
              <div className='post-body m-auto' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
            </div>
          </div>
          <nav className="side-nav">
            <ul>
              {headings.map((heading, index) => (
                <li key={index} style={{ marginLeft: `${(heading.level - 1) * 20}px` }}>
                  <button onClick={() => handleScrollToHeading(heading.id)}>
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .side-nav {
          position: fixed;
          top: 100px;
          right: 20px;
          width: 200px;
          display:none
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
