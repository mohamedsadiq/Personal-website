import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import useSound from "use-sound";
import BackButton from "../../components/backButton";

export default function FamilyTransactions() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const widget = widgetRef.current;

    const handleScroll = () => {
      const scrollTop = widget.scrollTop;
      const scrollHeight = widget.scrollHeight - widget.clientHeight;

      if (scrollTop > scrollHeight / 4) {
        widget.classList.add("storm-visible");
        widget.classList.remove("rainy-visible");
        document.querySelector(".dot:nth-child(2)").classList.add("activeDot");
        document.querySelector(".dot:nth-child(1)").classList.remove("activeDot");
      } else {
        widget.classList.add("rainy-visible");
        widget.classList.remove("storm-visible");
        document.querySelector(".dot:nth-child(1)").classList.add("activeDot");
        document.querySelector(".dot:nth-child(2)").classList.remove("activeDot");
      }
    };

    widget.addEventListener("scroll", handleScroll);

    return () => {
      widget.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Scrolling </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
            <h2>Scrolling</h2>
            <p> Widget Scrolling.</p>
            <div className="exp">
            <div className="dotsForScrolling">
                  <div className="dot activeDot"></div>
                  <div className="dot"></div>
                </div>
              <div className="widget" ref={widgetRef}>
               
               
           
               <div className="rainy">
                  {/* Dummy content to enable scrolling */}
                  {/* <div style={{ height: "400px" }}></div> */}
                </div>
                <div className="storm">
                  {/* Dummy content to enable scrolling */}
                
                </div>
             
                <div style={{ height: "400px" }}></div>
                </div>
               
            </div>
          </div>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H699TZ29QW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H699TZ29QW');
          `}
        </Script>
      </main>
    </>
  );
}
