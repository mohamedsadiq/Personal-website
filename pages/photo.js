import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import img1 from "../img/photos/1.jpg"
import img2 from "../img/photos/2.jpg"
import img3 from "../img/photos/3.jpg"
import img4 from "../img/photos/4.jpg"
import img5 from "../img/photos/5.jpg"
import img6 from "../img/photos/6.jpg"
import img7 from "../img/photos/7.jpg"
import img8 from "../img/photos/8.jpg"
import img9 from "../img/photos/9.jpg"

const Photo = () => {
    return (
        <>
            <Head>
                <title>Photos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <div className='inner_container'>
                   
                        <div className='mItv1'>
                            <div className='ripi6'>
                                {data.map(i => (
                                    <a key={i.key} href={i.link} target="_blank">
                                        <Image
                                            className='border_radius'
                                            src={i.img}
                                            loading="lazy"
                                            alt="Picture of the author"
                                            quality={75}
                                            placeholder="blur"
                                        />
                                    </a>
                                ))}
                            </div>
                            <div className='ripi6'>
                                {data2.map(i => (
                                    <a key={i.key} href={i.link} target="_blank">
                                        <Image
                                            className='border_radius'
                                            src={i.img}
                                            loading="lazy"
                                            alt="Picture of the author"
                                            quality={75}
                                            placeholder="blur"
                                        />
                                    </a>
                                ))}
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
    )
}

export default Photo

const data = [
    {
        key: "1",
        img: img1,
        link: "https://unsplash.com/photos/ypBIeIxfiOo"
    },
    {
        key: "2",
        img: img2,
        link: "https://unsplash.com/photos/FAgF3eTbZ_4"
    },
    {
        key: "3",
        img: img3,
        link: "https://unsplash.com/photos/SYYn1v0WkNI"
    },
    {
        key: "4",
        img: img8,
        link: "https://unsplash.com/photos/EXhpMHDc-Sg"
    }
]

const data2 = [
    {
        key: "5",
        img: img4,
        link: "https://unsplash.com/photos/wredO5b0nY8"
    },
    {
        key: "6",
        img: img5,
        link: "https://unsplash.com/photos/xeOF6Xy4z8U"
    },
    {
        key: "7",
        img: img6,
        link: "https://unsplash.com/photos/YnzWKAQ6pSg"
    },
    {
        key: "8",
        img: img7,
        link: "https://unsplash.com/photos/-yyYxR9bZRg"
    },
    {
        key: "9",
        img: img9,
        link: "https://unsplash.com/photos/-lNTFZ9SzAc"
    }
]
