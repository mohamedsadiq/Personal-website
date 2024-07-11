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
      
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mosadiq.com" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="Product designer & Engineer." />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />  
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
              <Link href="sparks/onhover" passHref>
                <div className="spark_block">
                  <video width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="/Screen Recording July 11.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="spark_info">
                    <div className="spark_title">On Hover
                    </div>
                    <div className="spark_dec">On hover interaction.</div>
                  </div>
                  <div className="spark_date">Jul - 2024</div>
                </div>
              </Link>
              <Link href="sparks/TheMartian" passHref>
                <div className="spark_block">
                  <video width="100%" height="100%" autoPlay loop muted playsInline>
                    <source src="/Screen Recording July 10.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="spark_info">
                    <div className="spark_title"> 3D interactive demo
                    </div>
                    <div className="spark_dec">Smooth transitions.</div>
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

