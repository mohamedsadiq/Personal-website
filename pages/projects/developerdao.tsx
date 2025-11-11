import Head from 'next/head'
import Image from 'next/image'
import { FC, CSSProperties } from 'react'
import styles from '../../styles/Home.module.css'
import { AnimatedSection } from '../../components/AnimatedSection'
import BackButton from '../../components/backButton'
import ExternalLink from "../../components/ExternalLink"
import ProjectNavigation from '../../components/ProjectNavigation'
import ProjectOverview from '../../components/ProjectOverview'

// Image paths pointing to public directory
const img1 = "/img/developerdao/fasdfasd.jpeg"
const imgWork2 = "/img/developerdao/44.png"
const imgWork3 = "/img/developerdao/42f3.png"
const imgWork4 = "/img/developerdao/4343.png"
const imgWork5 = "/img/developerdao/Body  2 Dark (After launching).png"
const imgWork6 = "/img/developerdao/develight.png"

// Image paths object with public paths
const imagePaths = {
  img1,
  img2: imgWork2,
  img3: imgWork3,
  img4: imgWork4,
  img5: imgWork5,
  img6: imgWork6
} as const

// Component for project image with caption
interface ProjectImageProps {
  src: any;
  alt: string;
  caption?: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
  loading?: 'lazy' | 'eager';
  width: number;
  height: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const ProjectImage: FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  caption, 
  className = '',
  containerClassName = '',
  delay = 0,
  loading = 'lazy',
  width = 1200,
  height = 800,
  priority = false,
  placeholder = 'blur',
  blurDataURL = '',
  objectFit = 'cover',
  ...props
}) => {
  const isPublicPath = typeof src === 'string' && src.startsWith('/');
  
  return (
    <AnimatedSection delay={delay} className={`w-full ${className}`}>
      <div className={`relative w-full ${containerClassName}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...(isPublicPath ? {} : { placeholder, blurDataURL })}
          quality={100}
          loading={priority ? undefined : loading}
          priority={priority}
          className="w-full h-full object-cover rounded-lg"
          style={{
            objectFit,
            objectPosition: 'center'
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          {...props}
        />
        {caption && (
          <div className="text-center mt-2">
            <span className="text-sm text-gray-500">{caption}</span>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

const DeveloperDAO: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeveloperDAO Website | Mohamed Sadiq</title>
        <meta name="description" content="DeveloperDAO - Accelerating the education and impact of a new wave of web3 builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <AnimatedSection delay={0.1}>
            <BackButton href="/projects" />
          </AnimatedSection>
          <div className="inner_container">
            <AnimatedSection delay={0.15}>
              <h1 className='text-black text-lg'>DeveloperDAO Official Website</h1>
              <p className='text-base'>In a mission to accelerate the education and impact of a new wave of web3 builders. <span className="dateProject">- Jun 2023</span></p>
            </AnimatedSection>
            
            <div className="w-full h-[400px] md:h-[600px] mb-8 mt-4">
              <ProjectImage
                src={imagePaths.img1}
                alt="DeveloperDAO website design process"
                className="h-full"
                containerClassName="h-full"
                objectFit="cover"
                priority
                width={1200}
                height={800}
              />
            </div>

            <AnimatedSection delay={0.25}>
              <h2 className='text-slate-950 mt-6'>Project Overview</h2>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                <ExternalLink
                  href="https://www.developerdao.com/"
                  className='text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current'
                >
                  Visit Live
                </ExternalLink>
                <div className="flex flex-wrap gap-2">
                  {['DAOs', 'Web3', 'UI/UX'].map((tag, index) => (
                    <span key={index} className="bg-[#f6f6f6] border border-[#f0f0f0] text-black text-sm px-3 py-1.5 rounded-xl whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Overview Section */}
              <ProjectOverview
                background={{
                  type: 'video',
                  src: '/u5RViMdepqRfkMte.mp4',
                  alt: 'DeveloperDAO Project Overview',
                  className: 'opacity-90 object-[center_40%]'
                }}
                infoItems={[
                  {
                    title: 'Platform',
                    content: 'Web Application'
                  },
                  {
                    title: 'Role',
                    content: 'UI/UX Designer '
                  },
                  {
                    title: 'Timeline',
                    content: 'Jul 2022 '
                  }
                ]}
                links={[
                  { label: 'X.com', url: 'https://x.com/sadiq_moo/status/1563137379200020480/photo/1' },
                  // { label: 'GitHub', url: 'https://github.com/Developer-DAO/developer-dao' }
                ]}
                className="mb-8"
              />
              <p>
                Developer DAO was one of the first—and most impactful—DAOs I joined in the web3 space. 
                Before that, I was simply intrigued by web3: privacy, decentralization, and the possibilities 
                for the future. I wanted to be someone who helped build that future, not just watch it unfold.
                <br/>
                Through Developer DAO, I've had the chance to collaborate with talented people around the 
                world and be part of a generous, forward‑thinking community.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className='text-slate-950 mt-6 mb-2'>My Contributions</h2>
              <p>
                It was important for the DAO to establish an official presence to attract potential 
                partnerships and new members. We designed the website to meet that goal: simple, direct, 
                and aligned with the spirit of innovation, intelligence, and adventure. I led the UI and 
                UX design for this project, ensuring the experience was clear, accessible, and true to our mission.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <div className=''>
        <ProjectImage 
          src={imagePaths.img3}
          alt="DeveloperDAO responsive design"
          caption="Responsive design for different screen sizes"
          delay={0.4}
          placeholder="blur"
          width={1200}
          height={800}
        />
        
        <ProjectImage 
          src={imagePaths.img4}
          alt="DeveloperDAO dark mode"
          caption="Dark mode implementation"
          delay={0.45}
          placeholder="blur"
          width={1200}
          height={800}
        />
        
        <ProjectImage 
          src={imagePaths.img5}
          alt="DeveloperDAO mobile view"
          caption="Mobile-first approach for better accessibility"
          delay={0.5}
          placeholder="blur"
          width={1200}
          height={800}
        />
        
        <ProjectImage 
          src={imagePaths.img6}
          alt="DeveloperDAO light mode"
          caption="Light mode implementation"
          delay={0.55}
          placeholder="blur"
          width={1200}
          height={800}
        />
        
        <AnimatedSection delay={0.6}>
          <h2 className='text-slate-950 mt-6 text-black mb-2'>Reflections</h2>
          <p className='text-[#616161]'>
            Working on the Developer DAO website was a rewarding experience. It allowed me to combine my passion for web3 with my design and development skills. The collaborative nature of the DAO meant that I was constantly learning and iterating, which pushed me to grow as a designer.
            <br/>
            The project reinforced the importance of clear communication and a shared vision in a decentralized environment. It also highlighted the power of community-driven development, where diverse perspectives come together to create something truly impactful.
          </p>
        </AnimatedSection>
        
        {/* Project Navigation */}
        <AnimatedSection delay={0.65}>
          <div className="container mx-auto px-4 py-8">
            <ProjectNavigation />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DeveloperDAO;
