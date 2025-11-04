import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import styles from '../../styles/Home.module.css';
import ExternalLink from "../../components/ExternalLink";
import BackButton from "../../components/backButton";
import { AnimatedSection } from "../../components/AnimatedSection";
import ProjectNavigation from '../../components/ProjectNavigation';

// Image imports
import img1 from "../../img/developerdaofolder/fasdfasd.jpeg";
import imgWork2 from "../../img/44.png";
import imgWork3 from "../../img/42f3.png";
import imgWork4 from "../../img/4343.png";
import imgWork5 from "../../img/Body  2 Dark (After launching).png";
import imgWork6 from "../../img/develight.png";

// Component for project image with caption
interface ProjectImageProps {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  delay?: number;
  priority?: boolean;
  layout?: 'fill' | 'responsive' | 'intrinsic';
  loading?: 'lazy' | 'eager';
}

const ProjectImage: FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  caption, 
  className = 'rounded-xl border border-neutral-100 mt-4',
  delay = 0,
  priority = false,
  layout = 'responsive',
  loading = 'lazy'
}) => {
  const isFill = layout === 'fill';
  const imageClassName = `${className} ${isFill ? 'object-cover' : ''}`;
  
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div className={isFill ? 'relative w-full h-[575px]' : 'relative'}>
        {isFill ? (
          <Image
            src={src}
            alt={alt}
            fill
            placeholder="blur"
            quality={100}
            className={imageClassName}
            priority={priority}
            loading={priority ? 'eager' : loading}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            placeholder="blur"
            quality={100}
            className={imageClassName}
            priority={priority}
            loading={priority ? 'eager' : loading}
          />
        )}
        {caption && <span className="project_img_des">{caption}</span>}
      </div>
    </AnimatedSection>
  );
};

const DeveloperDAO: React.FC = () => {
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
              <div className="project_title">
                <h1 className="text-black text-lg">DeveloperDAO Official Website</h1>
                <p className="text-base">
                  In a mission to accelerate the education and impact of a new wave of web3 builders.{" "}
                  <span className="dateProject">- Jun 2023</span>
                </p>
              </div>
            </AnimatedSection>

            <ProjectImage
              src={img1}
              alt="DeveloperDAO website hero section"
              // caption="DeveloperDAO official website - A hub for web3 builders"
              delay={0.2}
              priority
              loading="eager"
              layout="fill"
            />

            <AnimatedSection delay={0.25}>
              <h2 className='mt-10'>Project Overview</h2>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                <ExternalLink
                  href="https://www.developerdao.com/"
                  className='text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current w-fit'
                >
                  Visit Live
                </ExternalLink>
                <div className="flex flex-wrap gap-2">
                  {['DAOs', 'Web3', 'UI/UX'].map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-[#f6f6f6] border border-[#f0f0f0] text-black text-sm px-3 py-1.5 rounded-xl whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p>
                Developer DAO was one of the first—and most impactful—DAOs I joined in the web3 space. 
                Before that, I was simply intrigued by web3: privacy, decentralization, and the possibilities 
                for the future. I wanted to be someone who helped build that future, not just watch it unfold.
                <br /><br />
                Through Developer DAO, I've had the chance to collaborate with talented people around the 
                world and be part of a generous, forward‑thinking community.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="mt-10 mb-2">My Contributions</h2>
              <p>
                It was important for the DAO to establish an official presence to attract potential 
                partnerships and new members. We designed the website to meet that goal: simple, direct, 
                and aligned with the spirit of innovation, intelligence, and adventure. I led the UI and 
                UX design for this project, ensuring the experience was clear, accessible, and true to our mission.
              </p>
            </AnimatedSection>

            {/* Additional project images with staggered animations */}
            <ProjectImage
              src={imgWork2}
              alt="DeveloperDAO website design process"
              caption="Initial design concepts and wireframes"
              delay={0.35}
            />

            <ProjectImage
              src={imgWork3}
              alt="DeveloperDAO responsive design"
              caption="Responsive design for different screen sizes"
              delay={0.4}
            />

            <ProjectImage
              src={imgWork4}
              alt="DeveloperDAO dark mode"
              caption="Dark mode implementation"
              delay={0.45}
            />

            <ProjectImage
              src={imgWork5}
              alt="DeveloperDAO mobile view"
              caption="Mobile-first approach for better accessibility"
              delay={0.5}
            />

            <ProjectImage
              src={imgWork6}
              alt="DeveloperDAO final design"
              caption="Final design implementation"
              delay={0.55}
            />
          </div>

          <AnimatedSection delay={0.6}>
            <div className="container mx-auto px-4 py-8">
              <ProjectNavigation />
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default DeveloperDAO;
