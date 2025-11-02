import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { FC } from 'react';
import styles from "../../styles/Home.module.css";
import BackButton from '../../components/backButton';
import ExternalLink from "../../components/ExternalLink";
import { AnimatedSection } from "../../components/AnimatedSection";
import ProjectNavigation from '../../components/ProjectNavigation';

// Image imports
import developerDaoFm from "../../img/daofm.png"

import imgWork from "../../img/developerdaofmfolder/image 2.png";
import img0 from "../../img/developerdaofmfolder/Instagram post - 14.png";
import img2 from "../../img/developerdaofmfolder/Instagram post - 13.png";
import img3 from "../../img/developerdaofmfolder/Dribbble shot HD - 7.png";
import img4 from "../../img/developerdaofmfolder/Instagram post - 9.png";
import img5 from "../../img/developerdaofmfolder/Instagram post - 10.png";
import img6 from "../../img/developerdaofmfolder/Instagram post - 16.png";
import img7 from "../../img/developerdaofmfolder/Instagram post - 17.png";

// Component for project image with caption
interface ProjectImageProps {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  delay?: number;
  priority?: boolean;
  layout?: 'fill' | 'responsive' | 'intrinsic';
}

const ProjectImage: FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  caption, 
  className = 'rounded-xl border border-neutral-100 mt-4',
  delay = 0,
  priority = false,
  layout = 'responsive'
}) => {
  const isFill = layout === 'fill';
  const imageClassName = `${className} ${isFill ? 'object-cover' : ''}`;
  
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div className={isFill ? 'relative w-full h-96' : 'relative'}>
        {isFill ? (
          <Image
            src={src}
            alt={alt}
            fill
            placeholder="blur"
            quality={100}
            className={imageClassName}
            priority={priority}
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
        <title>DeveloperDAO FM | Mohamed Sadiq</title>
        <meta name="description" content="DeveloperDAO FM - A place where you listen to music while building cool stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <AnimatedSection delay={0.1}>
            <BackButton href="/projects" />
          </AnimatedSection>
          <div className="inner_container_project_parent inner_container inner_container_mobile">
            <AnimatedSection delay={0.15}>
              <h1 className="text-black text-lg">DeveloperDAO FM</h1>
              <p className="text-base">
                A place where you listen to music while building cool stuff.{" "}
                <span className="dateProject">- Jul 2022</span>
              </p>
            </AnimatedSection>

            <ProjectImage
              src={developerDaoFm}
              alt="DeveloperDAO FM main interface"// caption="DeveloperDAO FM - A music player for developers"
              delay={0.2}
              priority
              height={400}
            />

            <AnimatedSection delay={0.25}>
              <h2 className="text-slate-950">Project Overview</h2>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                <ExternalLink
                  href="https://developer-dao-fm.vercel.app/"
                  className="text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current w-fit"
                >
                  Visit Live
                </ExternalLink>
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  {['DeveloperDAO', 'Music', 'Web3'].map((tag, index) => (
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
                When I initially joined DeveloperDAO, my excitement to contribute
                to the DAO's projects was palpable. One standout project that
                captured my interest was the inception of DeveloperDAO Fm. This
                website aimed to provide coders with an enriched experience,
                allowing them to code while enjoying the soothing accompaniment of
                Lo-Fi music. <br /><br />
                Beyond its musical offerings, the platform boasted a Pomodoro
                technique-based timer and a seamless channel-switching feature,
                enhancing the coding environment.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <h2>My Contributions</h2>
              <p>
                Delving into my role within this project, I eagerly embraced the
                opportunity to craft an immersive user experience. The heart of
                the experience was encapsulated in the ingeniously simple yet
                functionally profound logo of DeveloperDAO. To infuse an emotional
                incentive.
              </p>
            </AnimatedSection>

            <ProjectImage
              src={img0}
              alt="Early logo design concepts for DeveloperDAO FM"
              caption="These were the first attempts to discover the logo's potential, I shared this design on X (Twitter)."
              delay={0.35}
            />
            <AnimatedSection delay={0.4}>
              <p>
                I designed the logo's interactions. A noteworthy feature was the
                logo's dynamic response to user actions – clicking the play
                button prompted the logo's face to break into a cheerful smile,
                while pausing the music led to the logo's smile fading away. This
                nuanced interaction was poised to delight users and accentuate
                their engagement.
              </p>
            </AnimatedSection>

            <ProjectImage
              src={img6}
              alt="DeveloperDAO FM play and pause modes"
              caption="The Play and the Pause modes"
              delay={0.45}
            />

            <ProjectImage
              src={img7}
              alt="Close-up of play and pause buttons"
              caption="Closer look at the Play and the Pause buttons"
              delay={0.5}
            />

            <ProjectImage
              src={img2}
              alt="Music channel switching interface"
              caption="Music icon for switching between different music channels"
              delay={0.55}
            />

            <ProjectImage
              src={img3}
              alt="DeveloperDAO FM website overview"
              caption="An overview of the DeveloperDAO FM website"
              delay={0.6}
            />

            <AnimatedSection delay={0.65}>
              <h1 className="mt-12">Product Hunt's Comments</h1>
              <p className="mt-4">
                The project was featured on Product Hunt, receiving positive feedback from the community.
              </p>
            </AnimatedSection>

            <ProjectImage
              src={img4}
              alt="Product Hunt comments for DeveloperDAO FM"
              caption="Product Hunt community feedback on DeveloperDAO FM"
              delay={0.7}
              layout="fill"
              className="h-96"
            />

            <ProjectImage
              src={img5}
              alt="Product Hunt feature email"
              caption="Product Hunt's email about featuring DeveloperDAO FM in their newsletter"
            />
          </div>
        </div>
      </main>
      <div className="p-20 pt-0">
        <AnimatedSection delay={0.75}>
          <div className="container mx-auto px-4 py-8">
            <ProjectNavigation />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DeveloperDAO;

interface Data {
  projectOverview: string;
  projectOverviewPara: string;
  myContributions: string;
  myContributionsPara: string;
}

const data: Data = {
  projectOverview: "Project Overview",
  projectOverviewPara:
    "Developer DAO is a DAO that exists to accelerate the education and impact of a new wave of web3 builders. The website was among the priorities for the DAO, because of its importance in bringing in new partners and sponsors",
  myContributions: "My Contributions",
  myContributionsPara:
    "I was the champion of the project on the design side. The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site"
};
