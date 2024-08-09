
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import WorkIntro from '../../components/WorkIntro'
import imgWork from "../../img/developerdao.png"


import img1 from "../../img/web3boy/1ff132134169935.png"
import img2 from "../../img/web3boy/Behance Image 2800x1575.png"

import img3 from "../../img/web3boy/Adbe2f134169935.png"
import img4 from "../../img/web3boy/Behance 1920x1080.png"
import img5 from "../../img/web3boy/Behance Image 2800x1575 (1).png"
import img6 from "../../img/web3boy/6cd4ee134169935 61d5ee3a8bf65.png"

import img7 from "../../img/web3boy/Behance Image 1920x1440.png"


const DeveloperDAO = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Web 3 Concepts | Mohamed Sadiq</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <div className="inner_container">

                        <WorkIntro title={"Web 3 Concepts"} link={"/projects/developerdao"} />
                        <h1>Certified Web3 Boy</h1>
                        <p>21 NTFs inspired by the web3 culture.  <span className="dateProject">-  Jun 2021 </span></p>
                        <div className="blog_photo inner_blog work_intro_image">
                            <Image
                                src={img1}
                                alt="Picture of the author"
                                objectFit='cover'
                                layout='fill'
                                objectPosition="center"
                                placeholder="blur"
                                quality={100}
                            />
                        </div>
                        <h2 className='mt-4'>Project Overview</h2>
            <div className="project_info">
             
              <a
                className="projectLink"
                target="_blink"
                href="https://replit.com/@mohamedsadiq/cwb"
              >
                {" "}
                Visit Live ↗
              </a>
              <div className="projects_tags">
                <span>Bootstrapped</span>
                <span>Ventures</span>
                <span>DAOs</span>
              </div>
            </div>
            <p>
            The Certified Web3 Boy (CWB) project is a creative endeavor inspired by the innovative spirit of Developer Dao and the cultural impact of the Certified Lover Boy album. As a passionate fan of Web3 technology and the CLB album, I found immense joy in bringing this project to life. The fusion of cutting-edge blockchain concepts with pop culture has made this journey both challenging and rewarding.

I’m excited to share the results of my work with the community. <br/>  <br/>You can explore the live website <a className="text-[#000] underline" href='https://replit.com/@mohamedsadiq/cwb' target='_blink'>here</a> to see the CWB NFTs in action. For those interested in the technical aspects, the frontend code is available <a className="text-[#000] underline" href='https://github.com/mohamedsadiq/cwb_front_end' target="_blank">here</a>, and you can review the smart contract <a className="text-[#000] underline" href='https://github.com/mohamedsadiq/cwb-nfts_smart_contract' target='_blink'>here</a>. If you’re curious about the design process, the Figma files can be found <a className="text-[#000] underline" href='https://www.figma.com/file/x2UkUXmgp69DVE12Yi0CPo/CWB?node-id=0%3A1' target='_blink'>here</a>.


              
            </p>
                    </div>

                </div>
            </main>
            <div className='p-20 pt-0'>
                <Image
                    src={img2}
                    alt="Picture of the author"
                    objectFit='cover'
                    // layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                    className='rounded-xl border border-neutral-100 m-auto'
                />
  <span className="project_img_des">(not connected the wallet still) </span>
                <Image
                    src={img3}
                    alt="Picture of the author"
                    objectFit='cover'
                    // layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                    className='rounded-xl border border-neutral-100 mt-9 m-auto'
                />
                  <span className="project_img_des">(The UI after the connection) </span>

                <Image
                    src={img5}
                    alt="Picture of the author"
                    objectFit='cover'
                    // layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                    className='rounded-xl border border-neutral-100 mt-9 m-auto'
                />
                 <span className="project_img_des">(Here, the mining of the NFTs started) </span>
                <Image
                    src={img4}
                    alt="Picture of the author"
                    objectFit='cover'
                    // layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                    className='rounded-xl border border-neutral-100 mt-9 m-auto'
                />
                                 <span className="project_img_des">(Here, the mining has finished and we're celebrating) </span>

                <Image
                    src={img6}
                    alt="Picture of the author"
                    objectFit='cover'
                    // layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                    className='rounded-xl border border-neutral-100 mt-9 m-auto'
                />
                                 <span className="project_img_des">(This is the mobile version of the website) </span>

                 <Image
                    src={img7}
                    alt="Picture of the author"
                    objectFit='cover'
                    // layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                    className='rounded-xl border border-neutral-100 mt-9 m-auto'
                />
                                 <span className="project_img_des">(These are the components of the mining process) </span>


            </div>

            
        </div>
    )
}
export default DeveloperDAO

const data = {
    projectOverview: "Project Overview",
    projectOverviewPara: "Developer DAO is a DAO that exists to accelerate the education and impact of a new wave of web3 builders. The website was among the priorities for the DAO, because of its importance in bringing in new partners and sponsors",
    myContributions: "My Contributions",
    myContributionsPara: "I was the champion of the project on the design side. The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site"
}