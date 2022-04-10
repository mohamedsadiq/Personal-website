import Link from 'next/link';

 const BlogNav  = () => {
    return    (
        <>
              <nav className="blog_nav">
                  <Link href="/">
                  <div className="nav_blog_item nav_item">Home</div>
                  </Link>
                   <span className="nav_blog_item">
                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.833008L5 4.49967L1 8.16634" stroke="#848484" stroke-width="1.33333"/>
                        </svg>
                   </span >
                   <Link href="/blogs">
                        <div className="nav_blog_item nav_item">Blog</div>
                   </Link>
                   <span className="nav_blog_item">
                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.833008L5 4.49967L1 8.16634" stroke="#848484" stroke-width="1.33333"/>
                        </svg>
                   </span >
                   <div className="nav_blog_item">Current Page</div>
              </nav>
        </>
    )
}

export default BlogNav

