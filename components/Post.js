import Link from 'next/link'
// import { slugify } from '../../utils'
import Image from 'next/image'

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)
  // Support both `image` (string) and `images` (array) in frontmatter
  const frontmatter = post.frontmatter || {}
  const firstImage = frontmatter.image || (Array.isArray(frontmatter.images) && frontmatter.images.length > 0 ? frontmatter.images[0] : null)
  const imagePath = firstImage ? (firstImage.startsWith('/') ? firstImage : '/' + firstImage) : null

  return (
    <div className="blog_intro">
      
        <div className=''>
<Link href={`/blog/${post.slug}`}>
                  <div className="block">
                        <div className="blog_photo">
                        <div className='overlay_img'></div>
                        {imagePath && (
                          <Image
                            src={imagePath}
                            alt={frontmatter.title || 'Blog cover image'}
                            objectFit='cover'
                            layout='fill'
                            quality={100}
                          />
                        )}
                      </div>
                      <div className="text_blog" style={{marginBottom:0}}>
                      <h4 style={{marginBottom:0}}>{post.frontmatter.title}</h4>
                      <span className="datespan">Date: {`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</span>
                      <p>{post.frontmatter.summary}</p>
                     
                             {/* <a className='btn'>Read More</a> */}
                      
                      {/* <span style={{background:item.color}}>{item.tags}</span> */}

                      </div>
                      {/* <div className='clearfix'></div> */}
                  </div>
                 
                   </Link>
                 
                   </div>
                    </div>
  )
}