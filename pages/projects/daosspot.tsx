import Head from "next/head";
import { StaticImageData } from 'next/image';
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { AnimatedSection } from "../../components/AnimatedSection";
import { motion } from "framer-motion";

// Components
import WorkIntro from "../../components/WorkIntro";
import BackButton from "../../components/backButton";
import ExternalLink from "../../components/ExternalLink";
import ProjectNavigation from "../../components/ProjectNavigation";
import ProjectOverview from "../../components/ProjectOverview";

// Project Images
const SectionDivider: React.FC = () => (
  <AnimatedSection delay={0} className="w-full">
    <div className="my-20 w-full">
      <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  </AnimatedSection>
);

import img1 from "../../img/11111111.png";
import img2 from "../../img/DAOs Spot/1.png";
import img3 from "../../img/DAOs Spot/2.png";
import img4 from "../../img/DAOs Spot/3.png";
import img5 from "../../img/DAOs Spot/4.png";
import img6 from "../../img/DAOs Spot/5.png";
import img7 from "../../public/daospot.png";

// Reusable ProjectImage component
interface ProjectImageProps {
  src: StaticImageData | string;
  alt: string;
  caption?: string;
  delay?: number;
  priority?: boolean;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  blurDataURL?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  caption,
  delay = 0, 
  priority = false, 
  className = "",
  objectFit = "contain",
  objectPosition = "center",
  quality = 100,
  loading = 'lazy',
  layout = 'fill',
  ...props
}) => {
  const isPublicPath = typeof src === 'string' && src.startsWith('/');
  
  return (
    <AnimatedSection delay={delay} className={`w-full ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-[24px]"
          style={{ objectFit, objectPosition }}
          priority={priority}
          loading={loading}
          placeholder="blur"
          blurDataURL={isPublicPath ? undefined : (typeof src === 'string' ? src : src?.blurDataURL || '')}
          quality={quality}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          {...props}
        />
      </div>
      {caption && <div className="text-center mt-2">
        <span className="text-sm text-gray-500">({caption})</span>
      </div>}
    </AnimatedSection>
  );
};

const DeveloperDAO: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DAOs Spot</title>
        <meta name="description" content="DAOs Spot case study" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohamedsadiq.me" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="DAOs Spot" />
        <meta name="twitter:image" content="https://i.ibb.co/xsRLjwQ/daosspot1.png" />
      </Head>
      <main>
        <div className="container">
          <AnimatedSection>
            <BackButton href="/projects" />
          </AnimatedSection>
          
          <div className="inner_container_project_parent inner_container inner_container_mobile">
            <AnimatedSection delay={0.1}>
              <div className="project_title">
                <h1 className="text-black text-lg">DAOs Spot</h1>
                <p className="text-base">Your gateway to decentralized communities. <span className="dateProject">- Jun 2023 </span></p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative w-full overflow-hidden rounded-[24px] mt-4">
                <Image
                  src={img1}
                  alt="DAOs Spot Hero Image"
                  priority={true}
                  quality={100}
                  className="w-full h-auto max-h-[80vh] object-cover"
                  placeholder="blur"
                  loading="eager"
                  blurDataURL={typeof img1 === 'string' ? img1 : img1?.blurDataURL || ''}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              <h2 className="text-slate-950 mt-6">Project Overview</h2>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                <ExternalLink 
                  className="text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current w-fit"
                  href="https://daospot-git-main-mohamedsadiq-s-team.vercel.app/"
                >
                  Visit Live
                </ExternalLink>
                <div className="flex flex-wrap gap-2">
                  {['Bootstrapped', 'Ventures', 'DAOs'].map((tag, index) => (
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
                  src: '/e7d1bded-0669-42f9-934d-7817ca497149_wm.mp4',
                  alt: 'DAOs Spot Project Overview',
                  className: 'opacity-90'
                }}
                infoItems={[
                  {
                    title: 'Platform',
                    content: 'Web Application'
                  },
                  {
                    title: 'Role',
                    content: 'From 0 → 1'
                  },
                  {
                    title: 'Funding',
                    content: 'With no funding'
                  },
                  {
                    title: 'Timeline',
                    content: '2023 - 2024'
                  }
                ]}
                links={[
                  // { label: 'Live', url: 'https://daospot-git-main-mohamedsadiq-s-team.vercel.app/' },
                 
                  { label: 'Product Hunt', url: 'https://www.producthunt.com/products/daos-spot' }
                ]}
                className="mb-8"
              />

              <h2 className="text-slate-950 mt-6 mb-3">Project Overview</h2>
              <p>
                Initiating the journey of DAOs Spot marked my first venture, a bootstrap endeavor fueled by minimal resources. Taking charge of both product design and development, my primary goal centered around tackling a crucial challenge: How could I actively immerse myself in DAOs, contribute meaningfully, stay abreast of their updates, and discover tools to streamline these processes?  <br/><br/>This challenge materialized as I became a part of various DAOs. Significantly, the project has garnered the attention of an interesting DAO, aligning seamlessly with their mission. Moreover, a prominent international investment firm focused on Web3 has expressed interest. The prospect of DAOs Spot excites me, and I eagerly anticipate the promising opportunities that lie ahead.
              </p>
               <SectionDivider />
              <h2 className="mt-10 mb-2">Awards and recognition</h2>
              <p>DAOs Spot pleasantly surprised me by clinching the 4th position for Product of the Week in the Web3 category on Product Hunt. It serves as a modest acknowledgment that the efforts invested have proven worthwhile. DAOsSpot on Product Hunt has been an encouraging experience.</p>
              <SectionDivider />
              <h2 className="mt-10 mb-2">Embracing Minimalism in Design</h2>
              <p>My approach to design for DAOs Spot was rooted in a desire to evoke a premium feel through minimalism, a departure from the often cluttered landscape of Web3 interfaces. I aimed to bring forth a user experience that exuded simplicity, yet sophistication, ensuring that engagement with the platform was both intuitive and aesthetically pleasing. This emphasis on minimalism sought to address a gap in the Web3 space, where the user experience can sometimes be overwhelming and complex.</p>
            </AnimatedSection>
          </div>
         
         
         
          {/* Project Navigation */}
        
        </div>
         <SectionDivider />
         <div className="p-10">
            <ProjectImage
              src={img2}
              alt="DAOs Spot Home Page"
              caption="The Home page"
              delay={0.1}
              className="mt-20"
              quality={100}
              objectFit="contain"
            />
            <ProjectImage
              src={img3}
              alt="DAOs Spot Features"
              caption="Newsletter section"
              delay={0.2}
              className="mt-20"
              quality={100}
              objectFit="contain"
            />
            <ProjectImage
              src={img6}
              alt="DAOs Spot Dashboard"
              caption="Cards"
              delay={0.3}
              className="mt-20"
              quality={100}
              objectFit="contain"
            />
            <ProjectImage
              src={img5}
              alt="DAOs Spot Mobile View"
              caption="Some components"
              delay={0.4}
              className="mt-20"
              quality={100}
              objectFit="contain"
            />
              <div className="container mx-auto px-4 py-8">
            <ProjectNavigation />
          </div>
          </div>
      </main>
    </div>
  );
};
export default DeveloperDAO;

const data = {
  projectOverview: "Project Overview",
  projectOverviewPara:
    "Developer DAO is a DAO that exists to accelerate the education and impact of a new wave of web3 builders. The website was among the priorities for the DAO, because of its importance in bringing in new partners and sponsors",
  myContributions: "My Contributions",
  myContributionsPara:
    "I was the champion of the project on the design side. The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site",
};
