import Head from "next/head";
import Link from "next/link";

import Image from 'next/image'

const Sparks = () => {
  return (
    <>
      <Head>
        <title>Sparks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container container_sparks_home">
          <div className="inner_container inner_container_spark ">
            <h1>Sparks</h1>
            <p>An engineering snippets</p>

            <div className="spark">
            
              <Link href="sparks/widget" passHref>
                <div className="spark_block">
                  <video width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="/dots.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="spark_info">
                    <div className="spark_title">Widget
                    </div>
                    <div className="spark_dec">An interactive widget.</div>
                  </div>
                  <div className="spark_date">June - 2024</div>
                </div>
              </Link>
              <Link href="sparks/button" passHref>
                <div className="spark_block">
                  <Image alt="" src="/fffsfs.gif" className="buttoninter" width="100" height="100"  />
                  <div className="spark_info">
                    <div className="spark_title">Button
                    </div>
                    <div className="spark_dec">An interactive button.</div>
                  </div>
                  <div className="spark_date">June - 2024</div>
                </div>
              </Link>
              <Link href="sparks/scroll" passHref>
                <div className="spark_block">
                  <video width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="https://video.twimg.com/ext_tw_video/1801041108274757632/pu/vid/avc1/480x480/qbJ7cC1MrzCqk444.mp4?tag=12" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="spark_info">
                    <div className="spark_title">Scrolling
                    </div>
                    <div className="spark_dec">Widget Scrolling.</div>
                  </div>
                  <div className="spark_date">June - 2024</div>
                </div>
              </Link>
              <Link href="sparks/TheMartian" passHref>
                <div className="spark_block">
                  <video width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="/martin.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="spark_info">
                    <div className="spark_title">The Martian
                    </div>
                    <div className="spark_dec">A character on Mars.</div>
                  </div>
                  <div className="spark_date">Jul - 2024</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sparks;

{
  /* <a href="https://mohamedsadiq.gumroad.com/l/iconsii" target="_blink">
                <div  className="blocks_aes">
                      <div className="">
                        <div className="img_aes">
                        <Image
                            src={bag3}
                            alt="Picture of the author"
                            objectFit='cover'
                            layout='fill'

                            placeholder="blur"
                            quality={100}
                            />
               
                        </div>
                      </div>
                     <div className="dec_aes store_des"> 
                        <h1>Icons II</h1>
                        <span>$4.00</span>
                        <p>Enhance your website with visually appealing icons, I&apos;ve created a unique set of icons for my website, and now the icons are available for purchase. Upgrade your web pages today with these sleek and modern icons.</p>
                        <span>
                            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.10675 7.13995C9.3289 7.3621 9.3215 7.71279 9.08751 7.91649L6.75277 9.95844C6.51879 10.1621 6.14788 10.1493 5.92573 9.92717C5.70358 9.70502 5.69077 9.33412 5.89447 9.10013L7.93641 6.7654C8.14011 6.53141 8.4908 6.52401 8.71295 6.74616L9.10675 7.13995Z" fill="white"/>
                            <path d="M6.91471 6.16017C6.69638 5.94183 6.76614 5.7629 7.08412 5.76253L9.52835 5.75962C9.83634 5.75925 10.0894 6.01234 10.0891 6.32034L10.0862 8.7745C10.0858 9.0825 9.90685 9.16225 9.68851 8.94391L6.90968 6.16508L6.91471 6.16017Z" fill="white"/>
                            <circle cx="8" cy="8" r="7.5" stroke="white"/>
                            </svg>
                        </span>
                        
                        <button className="store_button">
                        
                            Get it
                        
                        </button>
                   
                     </div>
                  </div>
                  </a> */
}
