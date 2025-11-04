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

// Project Images
import img1 from "../../img/11111111.png";
import img2 from "../../img/DAOs Spot/1.png";
import img3 from "../../img/DAOs Spot/2.png";
import img4 from "../../img/DAOs Spot/3.png";
import img5 from "../../img/DAOs Spot/4.png";
import img6 from "../../img/DAOs Spot/5.png";

// Reusable ProjectImage component
interface ProjectImageProps {
  src: StaticImageData | string;
  alt: string;
  delay?: number;
  priority?: boolean;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
}

const ProjectImage: React.FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  delay = 0, 
  priority = false, 
  className = "",
  objectFit = "cover",
  objectPosition = "center",
  quality = 100,
  loading = 'lazy',
  layout = 'intrinsic'
}) => (
  <AnimatedSection delay={delay} className={className}>
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className={`w-full h-auto rounded-lg shadow-lg ${className}`}
        priority={priority}
        loading={priority ? 'eager' : loading}
        placeholder="blur"
        blurDataURL={typeof src === 'string' ? src : src?.src || ''}
        style={{
          objectFit: objectFit,
          objectPosition: objectPosition
        }}
      />
    </div>
  </AnimatedSection>
);

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
              <div className="relative w-full h-auto">
                <Image
                  src={img1}
                  alt="DAOs Spot Hero Image"
                  priority={true}
                  className="rounded-xl block mt-4"
                  placeholder="blur"
                  loading="eager"
                  blurDataURL={typeof img1 === 'string' ? img1 : img1?.src || ''}
                  width={1200}
                  height={800}
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
              <p>
                Initiating the journey of DAOs Spot marked my first venture, a bootstrap endeavor fueled by minimal resources. Taking charge of both product design and development, my primary goal centered around tackling a crucial challenge: How could I actively immerse myself in DAOs, contribute meaningfully, stay abreast of their updates, and discover tools to streamline these processes? This challenge materialized as I became a part of various DAOs. Significantly, the project has garnered the attention of an original DAO, aligning seamlessly with their mission. Moreover, a prominent international investment firm focused on Web3 has expressed interest. The prospect of DAOs Spot excites me, and I eagerly anticipate the promising opportunities that lie ahead.
              </p>
              <h2 className="mt-10 mb-2">Awards and recognition</h2>
              <p>DAOs Spot pleasantly surprised me by clinching the 4th position for Product of the Week in the Web3 category on Product Hunt. It serves as a modest acknowledgment that the efforts invested have proven worthwhile. DAOsSpot on Product Hunt has been an encouraging experience.</p>
              <h2 className="mt-10 mb-2">Embracing Minimalism in Design</h2>
              <p>My approach to design for DAOs Spot was rooted in a desire to evoke a premium feel through minimalism, a departure from the often cluttered landscape of Web3 interfaces. I aimed to bring forth a user experience that exuded simplicity, yet sophistication, ensuring that engagement with the platform was both intuitive and aesthetically pleasing. This emphasis on minimalism sought to address a gap in the Web3 space, where the user experience can sometimes be overwhelming and complex.</p>
            </AnimatedSection>
          </div>
         
         
         
          
          {/* Project Navigation */}
        
        </div>
         <div className="p-10">
            <AnimatedSection>
              <ProjectImage
                src={img2}
                alt="DAOs Spot Home Page"
                delay={0.1}
                className="mt-20"
              />
              <span className="project_img_des">(The Home page) </span>
            </AnimatedSection>
            <AnimatedSection>
              <ProjectImage
                src={img3}
                alt="DAOs Spot Features"
                delay={0.2}
                className="mt-20"
              />
            </AnimatedSection>
            <AnimatedSection>
              <ProjectImage
                src={img6}
                alt="DAOs Spot Dashboard"
                delay={0.3}
                className="mt-20"
              />
            </AnimatedSection>
            <AnimatedSection>
              <ProjectImage
                src={img5}
                alt="DAOs Spot Mobile View"
                delay={0.4}
                className="mt-20 w-full"
              />
            </AnimatedSection>
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
