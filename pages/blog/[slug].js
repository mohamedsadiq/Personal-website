import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';
      
export default function PostPage({ content, frontmatter }) {
  const colors = ["#dbece9", "#efe1e2", "#e2e5ef"];
  const date = new Date(frontmatter.date)
  const imageMeta = frontmatter.images.map(
    image => {
      const imageUrl = ImageUrl(image)
      return {
        url: imageUrl,
        width: 1224,
        height: 724,
        alt: frontmatter.title,
        type: 'image/jpeg',
      }
    }
  )

  function shareOnTwitter(title, url) {
    const text = encodeURIComponent(title);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

    return shareUrl;
  }

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.summary}
        openGraph={{
          url: 'https:officialrajdeepsingh.dev',
          title: frontmatter.title,
          description: frontmatter.summary,
          type: 'article',
          article: {
            publishedTime: frontmatter.date,
            authors: [
              'https://officialrajdeepsingh.dev/pages/about',
            ],
            tags: frontmatter.tags,
          },
          images: imageMeta,
          site_name: 'Rajdeep Singh',
        }}
      />

      <div className="container">

        <div className="inner_container inner_blog_body">
          <div className="col-lg-10 m-auto">
          <Link href={"/blogs"}>
          <div className="go_back"> ↰ Go Back</div>
          </Link>
          {/* <div className="go_back copy_link"> Copy Link</div> */}
            <div className='card card-page'>
              <a href={`/blog/${frontmatter.slug}`} ></a>

              <h1 className='post-title mt-2 p-2'>{frontmatter.title}</h1>
              <div className='post-date m-1 p-2'>

               
                {/* <p>{frontmatter.summary} </p> */}
                <div> {
                  frontmatter.categories.map((category, index) => {
                    const slug = slugify(category);
                    const colorIndex = index % colors.length;
                    const backgroundColor = colors[colorIndex];

                    return (
                      <Link key={category} href={`/category/${slug}`}>

                        <span
                          style={{ background: backgroundColor }}
                          className="tags"
                        >
                          {category}
                        </span>

                      </Link>
                    );
                  })
                }
                </div>
                <div><h6> {`${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`} </h6>  </div>

              </div>

              <div className='post-body p-5 m-auto' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
              

            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getStaticPaths() {
  //  Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const temppaths = files.map((filename) => {

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    if (frontmatter.draft === false) {
      return {
        params: {
          slug: filename.replace('.md', ''),
        },
      }
    } else {
      return null
    }


  })
  //   remove null in tempPosts 
  const paths = temppaths.filter(
    path => {
      return path && path
    }
  )

  return {
    paths,
    fallback: false,
  }

}


export async function getStaticProps({ params: { slug } }) {

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}