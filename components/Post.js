import Link from 'next/link'
import { slugify } from '../utils'
import Image from 'next/image'

export default function Post({ post }) {

  const date = new Date(post.frontmatter?.date)
  const imagePath = post.frontmatter.image.startsWith('/') ? post.frontmatter.image : '/' + post.frontmatter.image;

  return (
    <div className="blog_intro">
      
        <div className=''>
<Link href={`/blog/${post.slug}`}>
                  <div className="block">
                        <div className="blog_photo">
                        <div className='overlay_img'></div>
                        <Image
                            src={imagePath}
                            alt="Picture of the author"
                            objectFit='cover'
                            layout='fill'
                            quality={100}
                            />
                      </div>
                      <div className="text_blog">
                      <h4>{post.frontmatter.title}</h4>
                      <span className="datespan">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</span>
                      {/* <p>{post.frontmatter.summary}</p> */}
                     
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