import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../../styles/Home.module.css'
import { AnimatedSection } from '../../components/AnimatedSection'
import WorkIntro from '../../components/WorkIntro'
import BackButton from '../../components/backButton'
import ExternalLink from "../../components/ExternalLink";
import ProjectNavigation from '../../components/ProjectNavigation';

// Image paths pointing to public directory
const img1 = "/web3boy/1ff132134169935.png";
const img2 = "/web3boy/Behance Image 2800x1575.png";
const img3 = "/web3boy/Adbe2f134169935.png";
const img4 = "/web3boy/Behance 1920x1080.png";
const img5 = "/web3boy/Behance Image 2800x1575 (1).png";
const img6 = "/web3boy/6cd4ee134169935 61d5ee3a8bf65.png";
const img7 = "/web3boy/Behance Image 1920x1440.png";

// Image paths object with public paths
const imagePaths = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7
} as const;

// Component for project image with caption
const ProjectImage: FC<{ 
  src: any; 
  alt: string; 
  caption?: string;
  className?: string;
  delay?: number;
  loading?: 'lazy' | 'eager';
  layout?: 'fill' | 'responsive' | 'intrinsic';
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}> = ({ 
  src, 
  alt, 
  caption, 
  className = 'rounded-xl border border-neutral-100 mt-9 m-auto',
  delay = 0,
  loading = 'lazy',
  layout = 'intrinsic',
  width = 1200,
  height = 675,
  priority = false,
  placeholder = 'blur',
  blurDataURL
}) => {
  const isFillLayout = layout === 'fill';
  const isPublicPath = typeof src === 'string' && src.startsWith('/');
  
  return (
    <AnimatedSection delay={delay} className="w-full h-full">
      <div className={`image-container ${isFillLayout ? 'relative h-full w-full' : ''}`}>
        {isFillLayout ? (
          <Image
            src={src}
            alt={alt}
            fill
            {...(isPublicPath ? {} : { placeholder, blurDataURL })}
            quality={100}
            loading={loading}
            priority={priority}
            className={className}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={layout}
            objectFit="cover"
            objectPosition="center"
            {...(isPublicPath ? {} : { placeholder, blurDataURL })}
            quality={100}
            loading={loading}
            priority={priority}
            className={className}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {caption && <span className="project_img_des">{caption}</span>}
      </div>
    </AnimatedSection>
  );
};

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
                        
                        <AnimatedSection delay={0.2} className="w-full">
                            <div className="relative w-full h-96 md:h-[600px] mb-8 rounded-xl overflow-hidden mt-4">
                                <ProjectImage
                                    src={imagePaths.img1}
                                    alt="Web3Boy Project"
                                    layout="fill"
                                    className="object-cover"
                                />
                            </div>
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
                    src={imagePaths.img2}
                    alt="Web3 Boy NFT Collection Showcase"
                    caption="(Not connected to wallet yet)"
                    delay={0.3}
                    placeholder="blur"
                />
                
                <ProjectImage 
                    src={imagePaths.img3}
                    alt="Web3 Boy UI after wallet connection"
                    caption="(The UI after the connection)"
                    delay={0.35}
                    placeholder="blur"
                />
                
                <ProjectImage 
                    src={imagePaths.img5}
                    alt="Web3 Boy NFT minting process"
                    caption="(Here, the mining of the NFTs started)"
                    delay={0.4}
                    placeholder="blur"
                />
                
                <ProjectImage 
                    src={imagePaths.img4}
                    alt="Web3 Boy NFT minting celebration"
                    caption="(Here, the mining has finished and we're celebrating)"
                    delay={0.45}
                    placeholder="blur"
                />
                
                <ProjectImage 
                    src={imagePaths.img6}
                    alt="Web3 Boy mobile version"
                    caption="(This is the mobile version of the website)"
                    delay={0.5}
                    placeholder="blur"
                />
                
                <ProjectImage 
                    src={imagePaths.img7}
                    alt="Web3 Boy mining components"
                    caption="(These are the components of the mining process)"
                    delay={0.55}
                    placeholder="blur"
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
