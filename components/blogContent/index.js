import Image from 'next/image'
import img1 from "../../img/blog/1.png"
import img2 from "../../img/blog/2.png"
import img3 from "../../img/blog/3.png"
import img4 from "../../img/blog/4.png"
import img5 from "../../img/blog/5.png"
import img6 from "../../img/blog/6.png"
import img7 from "../../img/blog/7.jpg"

const BlogContent = () =>{
    return (
        <div className="blog_intro">
            {data.map(item => {
              return (
                  <div className="block">
                        <div className="blog_photo">
                            <div className='overlay_img'></div>
                        <Image
                            src={item.img}
                            alt="Picture of the author"
                            objectFit='cover'
                            layout='fill'
                            objectPosition="center"
                            placeholder="blur"
                            quality={100}
                            />
                      </div>
                      <div className="blog_overlay">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <span>{item.tags}</span>
                      </div> 
                    
                  </div>
              )
          })}
         
        </div>
    )
}

export default BlogContent

const data =[
    {
        title:"Title",
        img:img1,
        description:"The fun, simple, & secure way to explore Web3, NFTs, & Ethereum.",
        tags:"tags"
    },
   
    {
        title:"Title",
        img:img3,
        description:"The fun, simple, & secure way to explore Web3, NFTs, & Ethereum.",
        tags:"tags"
    },
  
    {
        title:"Title",
        img:img7,
        description:"The fun, simple, & secure way to explore Web3, NFTs, & Ethereum.",
        tags:"tags"
    },
    {
        title:"Title",
        img:img6,
        description:"The fun, simple, & secure way to explore Web3, NFTs, & Ethereum.",
        tags:"tags"
    }
]