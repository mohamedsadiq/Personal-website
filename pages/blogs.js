
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo';
import Post from '../components/Post'
// import From from '../components/form'
import Link from 'next/link'
import { sortByDate, slugify,ImageUrl} from '../utils'



export default function Blogs({ posts, frontmatter }) {
  const colors = ["#dbece9", "#efe1e2", "#e2e5ef"];

  return (
    <div>
      <NextSeo
        title="Blog"
        description=""
        openGraph={{
          url: 'https://mohamedsadiq.me',
          title: '',
          description: 'B',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}      
      />
      
      <div className="container">
     
        <div className="inner_container">
       
        {/* <h1>Blog</h1>
        <p className='blog_sub'>Here where I share my insights on a range of topics, from product design to Philosophy.</p> */}
          <div className="col-lg-8">

          {posts.map((post, index) => (
  <div key={index}>
    <Post post={post} />
    {post.frontmatter.categories.map((category, index) => {
      const slug = slugify(category);
      const colorIndex = index % colors.length;
      const backgroundColor = colors[colorIndex];

      return (
        <a key={category} href={`/category/${slug}`}>
          <span
            style={{ background: backgroundColor }}
            className="tags"
          >
            {category}
          </span>
        </a>
      );
    })}
  </div>
))}


          </div>
      
        </div>
      </div>
      {/* <From/> */}
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

 

  

  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)


    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      }
    } else {
      return null
    }

  })

  //  remove null in tempPosts 
  const posts = tempPosts.filter(
    post => {
      return post && post
    }
  )
  const jsonString = JSON.stringify(posts)
  fs.writeFileSync('./search.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }


}
