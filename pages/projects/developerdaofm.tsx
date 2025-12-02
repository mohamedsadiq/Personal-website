import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import styles from "../../styles/Home.module.css";
import SEO from '../../components/SEO';
import { getProjectSchema, SITE_URL } from '../../lib/seo.config';
import BackButton from '../../components/backButton';
import ExternalLink from "../../components/ExternalLink";
import { AnimatedSection } from "../../components/AnimatedSection";
import ProjectNavigation from '../../components/ProjectNavigation';
import ProjectOverview from '../../components/ProjectOverview';
import PhotoViewerOverlay, { type PhotoPreview } from '../../components/PhotoViewerOverlay';



// Import images with static imports
import developerDaoFm from '../../public/img/developerdaofm/daofm.png';
import img0 from '../../public/img/developerdaofm/Instagram post - 14.png';
import img2 from '../../public/img/developerdaofm/Instagram post - 13.png';
import img3 from '../../public/img/developerdaofm/Dribbble shot HD - 7.png';
import img4 from '../../public/img/developerdaofm/Instagram post - 9.png';
import img5 from '../../public/img/developerdaofm/Instagram post - 10.png';
import img6 from '../../public/img/developerdaofm/Instagram post - 16.png';
import img7 from '../../public/img/developerdaofm/Instagram post - 17.png';

// Component for project image with caption
const SectionDivider: FC = () => (
  <AnimatedSection delay={0} className="w-full">
    <div className="my-20 w-full">
      <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  </AnimatedSection>
);

type ProjectPhotoPreview = PhotoPreview;

interface ProjectImageProps {
  src: any;
  alt: string;
  caption?: string;
  layout?: 'fill' | 'responsive' | 'intrinsic';
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  delay?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  containerClassName?: string;
  enablePreview?: boolean;
  onPreview?: (photo: ProjectPhotoPreview) => void;
  previewId?: string;
}

const ProjectImage: FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  caption, 
  layout = 'intrinsic',
  width = 1200,
  height = 800,
  priority = false,
  className = 'rounded-[24px] border border-neutral-100 mt-9 m-auto',
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL = '',
  delay = 0,
  objectFit = 'cover',
  objectPosition = 'center',
  containerClassName = '',
  enablePreview = false,
  onPreview,
  previewId,
}) => {
  const isLayoutFill = layout === 'fill';
  const isImportedImage = src && typeof src === 'object' && 'src' in src;
  const intrinsicWidth = isImportedImage && 'width' in src ? (src as StaticImageData).width : width;
  const intrinsicHeight = isImportedImage && 'height' in src ? (src as StaticImageData).height : height;
  const aspectRatioValue = intrinsicWidth && intrinsicHeight ? intrinsicHeight / intrinsicWidth : 9 / 16;
  const paddingPercent = aspectRatioValue * 100;

  const hasBlurData = Boolean(blurDataURL || (isImportedImage && (src as StaticImageData).blurDataURL));
  const resolvedPlaceholder = placeholder === 'blur' && hasBlurData ? 'blur' : 'empty';

  const imageProps = {
    src: isImportedImage ? (src as StaticImageData) : src,
    alt,
    fill: true,
    className: `rounded-[24px] ${className}`,
    style: { objectFit, objectPosition },
    priority,
    loading,
    quality: 100,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    ...(resolvedPlaceholder === 'blur'
      ? { placeholder: 'blur' as const, blurDataURL: blurDataURL || (isImportedImage ? (src as StaticImageData).blurDataURL : undefined) }
      : { placeholder: 'empty' as const }),
  };

  const handlePreviewOpen = () => {
    if (!enablePreview || !onPreview) {
      return;
    }

    onPreview({
      id: previewId || alt,
      src,
      alt,
      caption,
      aspectRatio: aspectRatioValue,
    });
  };

  const handlePreviewKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!enablePreview) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePreviewOpen();
    }
  };

  const layoutId = enablePreview ? previewId || alt : undefined;

  const wrapperStyle = isLayoutFill ? undefined : { paddingBottom: `${paddingPercent}%` };
  const containerClasses = isLayoutFill
    ? `rounded-[24px] relative w-full shadow-sm h-96 ${containerClassName}`
    : `rounded-[24px] relative w-full shadow-sm ${containerClassName}`;

  const imageContent = (
    <div
      className={containerClasses}
      style={wrapperStyle}
    >
      <motion.div
        layoutId={layoutId}
        className="absolute inset-0 h-full w-full overflow-hidden rounded-[24px]"
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <Image {...imageProps} />
      </motion.div>
    </div>
  );
  
  return (
    <div className="image-container w-full">
      <AnimatedSection delay={delay}>
        {enablePreview ? (
          <button
            type="button"
            className="group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            onClick={handlePreviewOpen}
            onKeyDown={handlePreviewKeyDown}
            aria-label={`View ${alt} in fullscreen`}
          >
            <div className="w-full cursor-zoom-in transition duration-200 ease-out group-hover:scale-[1.01]">
              {imageContent}
            </div>
          </button>
        ) : (
          imageContent
        )}
        {caption && <span className="project_img_des">({caption})</span>}
      </AnimatedSection>
    </div>
  );
};

const DeveloperDAO: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<ProjectPhotoPreview | null>(null);

  const handleOpenPhoto = (photo: ProjectPhotoPreview) => {
    setActivePhoto(photo);
  };

  const handleClosePhoto = () => {
    setActivePhoto(null);
  };

  return (
    <LayoutGroup id="developerdaofm-photo-viewer">
    <div className={styles.container}>
      <SEO
        title="DeveloperDAO FM"
        description="DeveloperDAO FM - A music streaming platform for the Web3 builder community. Listen to curated playlists while coding and building cool stuff."
        path="/projects/developerdaofm"
        ogImage={`${SITE_URL}/img/developerdaofm/daofm.png`}
        ogImageAlt="DeveloperDAO FM - Music for Builders"
        customSchema={getProjectSchema({
          name: 'DeveloperDAO FM',
          description: 'A music streaming platform for the Web3 builder community',
          url: `${SITE_URL}/projects/developerdaofm`,
          image: `${SITE_URL}/img/developerdaofm/daofm.png`,
          datePublished: '2022-07-01',
        })}
      />
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
              loading="eager"
              placeholder="blur"
            
            />

            <AnimatedSection delay={0.25}>
              <h2 className="text-slate-950 mt-6 dark:text-white">Project Overview</h2>
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

              {/* Project Overview Section */}
              <ProjectOverview
                background={{
                  type: 'video',
                  src: '/Screen Recording 2025-11-12 at 1.34.12\u202FAM.mov',
                  alt: 'DeveloperDAO FM Project Overview',
                  className: 'opacity-90'
                }}
                infoItems={[
                  {
                    title: 'Platform',
                    content: 'Web Application'
                  },
                  {
                    title: 'Role',
                    content: 'Designer & Developer'
                  },
                  {
                    title: 'Timeline',
                    content: 'Jul 2022'
                  }
                ]}
                links={[
                  // { label: 'Live Demo', url: 'https://developer-dao-fm.vercel.app/' },
                  { label: 'GitHub', url: 'https://github.com/mohamedsadiq/developer-dao-fm' }
                ]}
                className="mb-8"
                contentClassName="md:grid-cols-4 gap-8"
              />
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
            <SectionDivider />
            <AnimatedSection delay={0.3}>
              <h2 className="mt-10 mb-2">My Contributions</h2>
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
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-logo-concepts"
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
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-play-pause"
            />

            <ProjectImage
              src={img7}
              alt="Close-up of play and pause buttons"
              caption="Closer look at the Play and the Pause buttons"
              delay={0.5}
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-controls"
            />

            <ProjectImage
              src={img2}
              alt="Music channel switching interface"
              caption="Music icon for switching between different music channels"
              delay={0.55}
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-channel-switching"
            />

            <ProjectImage
              src={img3}
              alt="DeveloperDAO FM website overview"
              caption="An overview of the DeveloperDAO FM website"
              delay={0.6}
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-overview"
            />

            <AnimatedSection delay={0.65}>
              <h1 className="mt-12">Product Hunt's Comments</h1>
              <p className="mt-4 mb-4">
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
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-producthunt-comments"
            />

            <ProjectImage
              src={img5}
              alt="Product Hunt feature email"
              caption="Product Hunt's email about featuring DeveloperDAO FM in their newsletter"
              placeholder="blur"
              enablePreview
              onPreview={handleOpenPhoto}
              previewId="developerdaofm-producthunt-email"
            />
          </div>
        </div>
      </main>
      <div className="">
        <AnimatedSection delay={0.75}>
          <div className="container mx-auto px-4 py-8">
            <ProjectNavigation />
          </div>
        </AnimatedSection>
      </div>
      <PhotoViewerOverlay photo={activePhoto} onClose={handleClosePhoto} />
    </div>
    </LayoutGroup>
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
