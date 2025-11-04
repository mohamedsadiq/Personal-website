import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../../styles/Home.module.css'
import { AnimatedSection } from '../../components/AnimatedSection'
import WorkIntro from '../../components/WorkIntro'
import BackButton from '../../components/backButton'
import ExternalLink from "../../components/ExternalLink";
import ProjectNavigation from '../../components/ProjectNavigation';

// Image imports
import img1 from "../../img/web3boy/1ff132134169935.png"
import img2 from "../../img/web3boy/Behance Image 2800x1575.png"
import img3 from "../../img/web3boy/Adbe2f134169935.png"
import img4 from "../../img/web3boy/Behance 1920x1080.png"
import img5 from "../../img/web3boy/Behance Image 2800x1575 (1).png"
import img6 from "../../img/web3boy/6cd4ee134169935 61d5ee3a8bf65.png"
import img7 from "../../img/web3boy/Behance Image 1920x1440.png"

// Component for project image with caption
const ProjectImage: FC<{ 
  src: any; 
  alt: string; 
  caption?: string;
  className?: string;
  delay?: number;
  loading?: 'lazy' | 'eager';
}> = ({ 
  src, 
  alt, 
  caption, 
  className = 'rounded-xl border border-neutral-100 mt-9 m-auto',
  delay = 0,
  loading = 'lazy'
}) => (
  <AnimatedSection delay={delay} className="w-full">
    <div className="image-container">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        objectFit='cover'
        objectPosition="center"
        placeholder="blur"
        quality={100}
        loading={loading}
        className={className}
      />
      {caption && <span className="project_img_des">{caption}</span>}
    </div>
  </AnimatedSection>
);

const Web3Boy: FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Web3 Lover Boy | Mohamed Sadiq</title>
                <meta name="description" content="Web3 Lover Boy case study" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <AnimatedSection delay={0.1}>
                        <BackButton href="/projects" />
                    </AnimatedSection>
                    <div className="inner_container">
                        <AnimatedSection delay={0.15}>
                            <h1 className='text-black text-lg'>Certified Web3 Boy</h1>
                            <p className='text-base'>21 NTFs inspired by the web3 culture.  <span className="dateProject">-  Jun 2021 </span></p>
                        </AnimatedSection>
                        
                        <AnimatedSection delay={0.2} className="blog_photo inner_blog work_intro_image">
                            <Image
                                src={img1}
                                alt="Certified Web3 Boy NFT Collection"
                                objectFit='cover'
                                layout='fill'
                                objectPosition="center"
                                placeholder="blur"
                                quality={100}
                                loading="eager"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.25}>
                            <h2 className='text-slate-950 mt-6'>Project Overview</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                                <ExternalLink
                                    href="https://developer-dao-fm.vercel.app/"
                                    className='text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current'
                                >
                                    Visit Live 
                                </ExternalLink>
                                <div className="flex flex-wrap gap-2">
                                    {['Solidity', 'Web3', 'Smart Contract', 'NFTs'].map((tag, index) => (
                                        <span key={index} className="bg-[#f6f6f6] border border-[#f0f0f0] text-black text-sm px-3 py-1.5 rounded-xl whitespace-nowrap">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p>
                                The Certified Web3 Boy (CWB) project is a creative endeavor inspired by the innovative spirit of Developer Dao and the cultural impact of the CLB album. As a passionate fan of Web3 technology and the CLB album, I found immense joy in bringing this project to life. The fusion of cutting-edge blockchain concepts with pop culture has made this journey both challenging and rewarding.
                                <br/><br/>You can explore the live website <a className="text-[#000] underline" href='https://replit.com/@mohamedsadiq/cwb' target='_blank' rel="noopener noreferrer">here</a> to see the CWB NFTs in action. For those interested in the technical aspects, the frontend code is available <a className="text-[#000] underline" href='https://github.com/mohamedsadiq/cwb_front_end' target="_blank" rel="noopener noreferrer">here</a>, and you can review the smart contract <a className="text-[#000] underline" href='https://github.com/mohamedsadiq/cwb-nfts_smart_contract' target='_blank' rel="noopener noreferrer">here</a>. If you're curious about the design process, the Figma files can be found <a className="text-[#000] underline" href='https://www.figma.com/file/x2UkUXmgp69DVE12Yi0CPo/CWB?node-id=0%3A1' target='_blank' rel="noopener noreferrer">here</a>.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </main>
            <div className='p-20 pt-0'>
                <ProjectImage 
                    src={img2}
                    alt="Web3 Boy NFT Collection Showcase"
                    caption="(Not connected to wallet yet)"
                    delay={0.3}
                />
                
                <ProjectImage 
                    src={img3}
                    alt="Web3 Boy UI after wallet connection"
                    caption="(The UI after the connection)"
                    delay={0.35}
                />
                
                <ProjectImage 
                    src={img5}
                    alt="Web3 Boy NFT minting process"
                    caption="(Here, the mining of the NFTs started)"
                    delay={0.4}
                />
                
                <ProjectImage 
                    src={img4}
                    alt="Web3 Boy NFT minting celebration"
                    caption="(Here, the mining has finished and we're celebrating)"
                    delay={0.45}
                />
                
                <ProjectImage 
                    src={img6}
                    alt="Web3 Boy mobile version"
                    caption="(This is the mobile version of the website)"
                    delay={0.5}
                />
                
                <ProjectImage 
                    src={img7}
                    alt="Web3 Boy mining components"
                    caption="(These are the components of the mining process)"
                    delay={0.55}
                />
                
                {/* Project Navigation */}
                <AnimatedSection delay={0.6}>
                    <div className="container mx-auto px-4 py-8">
                        <ProjectNavigation />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default Web3Boy
