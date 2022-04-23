import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/footer'
import BlogNav from '../../components/BlogNav'
import img6 from '../../img/blog/3.png'
 const Blog3  = () => {
    return    (
        <>
        <Head>
            <title>Projects | Mohamed Sadiq</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='container'>
          <div className='inner_container'>
          <BlogNav />
          <div className='blog_photo inner_blog'>
                <Image
                    src={img6}
                    alt='Picture of the author'
                    objectFit='cover'
                    layout='fill'
                    objectPosition='center'
                    placeholder='blur'
                    quality={100}
                />
            </div>
            <div className='content_blog'>
            <h1></h1>
            <span></span>
            <p></p>
          </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Blog3

