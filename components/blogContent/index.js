import Image from 'next/image'
import img1 from "../../img/blog/1.png"
import img2 from "../../img/blog/2.png"
import img3 from "../../img/blog/3.png"
import img4 from "../../img/blog/4.png"
import img5 from "../../img/blog/5.png"
import img6 from "../../img/dsd.jpg"
import img7 from "../../img/blog/7.jpg"
import Link from 'next/link';
const BlogContent = ({link1, link2, link3}) =>{
    const data =[
      
       
        {
            title:"Moore's Law, Virtual Reality, and the Future of Human-Computer Interaction",
            img:img3,
            description:"The Intersection of Moore's Law and Engelbart's..",
           
            link:"https://open.substack.com/pub/msadiq/p/moores-law-virtual-reality-and-the?r=8bhus&utm_campaign=post&utm_medium=web"
        },
      
        // {
        //     title:"Title",
        //     img:img7,
        //     description:"The fun, simple, & secure way to explore Web3, NFTs, & Ethereum.",
        //     tags:"tags"
        // },
        {
            title:"Exploring the Potential of Virtual Reality and the Blending of Worlds",
            img:img6,
            description:"Exploring the Possibilities and Consequences of Merging Virtual Reality and Real Life.",
           
            link:"https://open.substack.com/pub/msadiq/p/the-adventure-and-ingenuity-of-assassins?r=8bhus&utm_campaign=post&utm_medium=web"
        }
    ]
    return (
        <div className="blog_intro">
            {data.map(item => {
              return (
                  <a  key={item.name} href={item.link} passHref target="_blink">
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
                   
                      </div> 
                    
                  </div>
                  </a>
              )
          })}
         
        </div>
    )
}

export default BlogContent