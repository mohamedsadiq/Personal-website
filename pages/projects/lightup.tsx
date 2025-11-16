import Head from 'next/head'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { motion } from 'framer-motion' // Removed unused AnimatePresence
import styles from '../../styles/Home.module.css'
import ExternalLink from '../../components/ExternalLink'
import { AnimatedSection } from '../../components/AnimatedSection'

import BackButton from '../../components/backButton'
import ProjectOverview from '../../components/ProjectOverview'
import { projectContent } from '../../data/lightup'
import ProjectNavigation from '../../components/ProjectNavigation';
// Removed unused HorizontalGallery

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// Import images with blur placeholders
import LightupIntroImage from '../../public/lightup/linkimage.png';
import boxesIsideBoxes from "../../public/lightup/boxes.jpg"
// Removed unused img3, img4, img5, designImg1, designImg2, designImg3

// Image paths object with imported images
const imagePaths = {
    LightupIntroImage,
    boxesIsideBoxes,
    // Removed unused image keys
    video: '/lightup/Dribbble Video.mp4' // Keep video as a string path
};

// Component for project image with caption
const ProjectImage: FC<{ 
  src: any; 
  alt: string; 
  caption?: string; 
  delay?: number;
  priority?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  height?: string | number;
  containerClassName?: string;
}> = ({ 
  src, 
  alt, 
  caption, 
  delay = 0,
  priority = false,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  // Remove default placeholder since we'll handle it conditionally
  placeholder,
  blurDataURL,
  objectFit = 'contain',
  objectPosition = 'center',
  height = 'auto',
  ...props
}) => {
  const isImportedImage = src && typeof src === 'object' && 'src' in src;
  
  // Calculate aspect ratio if we have the image dimensions
  const aspectRatio = src?.width && src?.height ? (src.height / src.width * 100) : 56.25; // Default to 16:9 if no dimensions
  
  // Only apply blur to imported images, not public paths
  const imageProps = {
    src: isImportedImage ? src : src,
    alt,
    fill: true,
    className: "rounded-lg",
    style: { 
      objectFit,
      objectPosition
    },
    priority,
    loading,
    quality: 100,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw",
    ...(isImportedImage ? { 
      placeholder: 'blur',
      blurDataURL: blurDataURL || src?.blurDataURL 
    } : {}),
    ...props
  };
  
  return (
    <AnimatedSection delay={delay} className={`w-full ${className}`}>
      <div className={`relative w-full ${containerClassName}`} style={{ paddingBottom: `${aspectRatio}%` }}>
        <Image {...imageProps} />
      </div>
      {caption && (
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">({caption})</span>
        </div>
      )}
    </AnimatedSection>
  );
};

// Lightweight video component with caption support
const ProjectVideo: FC<{
  src: string;
  caption?: string;
  className?: string;
  containerClassName?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}> = ({
  src,
  caption,
  className = '',
  containerClassName = '',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
}) => (
  <AnimatedSection delay={0.1} className={`w-full ${className}`}>
    <div className={`relative w-full ${containerClassName}`}>
      <video
        className="w-full rounded-lg"
        src={src}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
    </div>
    {caption && (
      <div className="text-center mt-2">
        <span className="text-sm text-gray-500">({caption})</span>
      </div>
    )}
  </AnimatedSection>
);

// Component for rendering a project section with title and content
const ProjectSection: FC<{
  title: string;
  content: string;
  className?: string;
  media?: { 
    type: 'image' | 'video'; 
    src: any; 
    alt?: string; 
    caption?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
  }[];
  markdown?: string;
}> = ({ title, content, className = '', media = [], markdown }) => (
  <AnimatedSection delay={0.1} className={className}>
    <h2 className={ title.includes('Overview') ? 'mt-4 mb-2 text-slate-950' : title.includes('inspiration') ? 'mt-10 mb-2' : 'mt-10 mb-2'}>{title}</h2>
    <div className="whitespace-pre-wrap">
      {markdown ? (
        <div
          className="text-[#616161] leading-7 text-base"
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        />
      ) : (
        content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
        ))
      )}
    </div>
    {media.length > 0 && (
      <div className="mt-6 space-y-6">
        {media.map((item, idx) => (
          item.type === 'image' ? (
            <ProjectImage key={idx} src={item.src} alt={item.alt || title} caption={item.caption} className="max-w-full h-auto" objectFit="contain" />
          ) : (
            <ProjectVideo 
              key={idx} 
              src={item.src} 
              caption={item.caption}
              autoPlay={item.autoPlay}
              loop={item.loop}
              muted={item.muted}
            />
          )
        ))}
      </div>
    )}
  </AnimatedSection>
);
 
const VideoTowersSection: FC<{
  title: string;
  content: string;
  media: { type: 'image' | 'video'; src: any; alt?: string; caption?: string }[];
  onVideoClick: (video: { src: string; caption?: string }) => void;
}> = ({ title, content, media, onVideoClick }) => {
  const leftColumn = media.filter((_, index) => index % 2 === 0);
  const rightColumn = media.filter((_, index) => index % 2 === 1);

  return (
    <AnimatedSection delay={0.1} className="mt-10">
      <h2 className="mb-2">{title}</h2>
      <div className="whitespace-pre-wrap">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[leftColumn, rightColumn].map((columnItems, columnIndex) => (
          <div key={columnIndex} className="flex flex-col items-center gap-4">
            {columnItems.map((item, index) => (
              <button
                key={item.src + index}
                type="button"
                className="group focus:outline-none"
                onClick={() => onVideoClick({ src: item.src, caption: item.caption })}
                aria-label={item.caption || `Open video ${index + 1}`}
              >
                <div className="relative h-24 w-24 sm:h-60 sm:w-60 rounded-full overflow-hidden border border-neutral-200 bg-black/80 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105">
                  <video
                    src={item.src}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black text-xs font-medium">
                      ▶
                    </span>
                  </div>
                </div>
                {item.caption && (
                  <p className="mt-2 text-center text-xs text-neutral-600 max-w-[10rem]">
                    {item.caption}
                    
                  </p>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

// --- REMOVED Unused FeatureList component ---

// --- REMOVED Unused WorkflowSteps component ---


// Main LightUp component
const LightUp: FC<{ markdownSections: Record<string, string> }> = ({ markdownSections }) => {
    const [activeVideo, setActiveVideo] = useState<{ src: string; caption?: string } | null>(null);

    const handleOpenVideo = (video: { src: string; caption?: string }) => {
      setActiveVideo(video);
    };

    const handleCloseVideo = () => {
      setActiveVideo(null);
    };

    const firstSection = projectContent.sections[0];
    const firstSectionMarkdown = firstSection.markdownSlug
      ? markdownSections[firstSection.markdownSlug]
      : undefined;

    const secondSection = projectContent.sections[1];
    const secondSectionMarkdown = secondSection.markdownSlug
      ? markdownSections[secondSection.markdownSlug]
      : undefined;

    return (
        <div className={styles.container}>
            <Head>
                <title>{projectContent.title}</title>
                <meta name="description" content={projectContent.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <AnimatedSection delay={0.1}>
                        <BackButton href="/projects" />
                    </AnimatedSection>
                    <div className="inner_container_project_parent inner_container inner_container_mobile">
                        <AnimatedSection delay={0.1}>
                          <div className="project_title">
                            <h1 className='text-black text-lg'>{projectContent.title}</h1>
                            <p className='text-base text-[#616161]'>{projectContent.description} <span className="dateProject"> {projectContent.date} </span></p>
                          </div>
                        </AnimatedSection>
                      
                        <div className="blog_photo inner_blog work_intro_image">
                            <ProjectImage
                                src={imagePaths.LightupIntroImage}
                                alt={projectContent.title}
                                placeholder="blur"
                                blurDataURL={imagePaths.LightupIntroImage.blurDataURL}
                                className="max-w-full h-auto"
                                objectFit="contain"
                            />
                        </div>
                        <AnimatedSection delay={0.2}>
                            <h2 className='mt-6'>Project Overview</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.15}>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                              <ExternalLink 
                                  href={projectContent.projectLink}
                                  className="text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current w-fit"
                              >
                                  Visit Live
                              </ExternalLink>
                              <div className="flex flex-wrap gap-2">
                                  {projectContent.tags.map((tag, index) => (
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
                              src: '/lightup/lightup.mp4',
                              className: 'w-full h-full object-cover'
                            }}
                            infoItems={[
                              {
                                title: 'Platform',
                                content: 'Chrome Extensios'
                              },
                              {
                                title: 'Role',
                                content: 'From 0 → 1, (design and develpment)'
                              },
                              {
                                title: 'Timeline',
                                content: 'Dec 2024 - Present'
                              }
                            ]}
                            links={[
                           { label: 'Chrome Store', url: 'https://chromewebstore.google.com/detail/lightup-ai-powered-web-an/pncapgeoeedlfppkohlbelelkkihikel' },
                              { label: 'GitHub Repository', url: 'https://github.com/mohamedsadiq/LightUp' },
                            
                            //   { label: 'Peerlist', url: 'https://peerlist.io/sadiqo/project/lightup' },
                            //   { label: 'Saashub', url: 'https://www.saashub.com/best-data-annotation-software/c/ai' },
                            ]}
                            linksTitle="Links"
                          />
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                          <h2 className='mb-3'>{firstSection.title}</h2>
                          <div className="whitespace-pre-wrap ">
                            {firstSectionMarkdown ? (
                              <div
                                className="text-[#616161] leading-7 text-base"
                                dangerouslySetInnerHTML={{ __html: marked.parse(firstSectionMarkdown) }}
                              />
                            ) : (
                              firstSection.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                              ))
                            )}
                          </div>
                        </AnimatedSection>
                    </div>
                </div>
                
                
            </main>
            <div className=''>
               
                <div className='container'>
                    <div className="inner_container">
                     
                      <AnimatedSection delay={0.2}>
                                <h2 className='mb-4'>{secondSection.title}</h2>
                                 <ProjectImage 
                                src={imagePaths.boxesIsideBoxes} 
                                alt="Open source" 
                                placeholder="blur"
                                blurDataURL={imagePaths.boxesIsideBoxes.blurDataURL}
                        />
                                <div className="whitespace-pre-wrap ">
                                  {secondSectionMarkdown ? (
                                    <div
                                      className="mt-4 text-[#616161] leading-7 text-base"
                                      dangerouslySetInnerHTML={{ __html: marked.parse(secondSectionMarkdown) }}
                                    />
                                  ) : (
                                    <p className='mt-4'> {secondSection.content}</p>
                                  )}
                                </div>
                        </AnimatedSection>
                        
                        
                        {/* --- FIXED --- 
                           Dynamically render the rest of the project sections (starting from index 2)
                           This replaces the broken, hardcoded, and duplicate sections.
                        */}
                        {projectContent.sections.slice(2).map((section, index) => {
                            const markdown = section.markdownSlug
                              ? markdownSections[section.markdownSlug]
                              : undefined;
                            if (section.gallery && section.media && section.media.length) {
                              return (
                                <VideoTowersSection
                                  key={index}
                                  title={section.title}
                                  content={section.content}
                                  media={section.media}
                                  onVideoClick={handleOpenVideo}
                                />
                              );
                            }

                            return (
                              <ProjectSection
                                key={index}
                                title={section.title}
                                content={section.content}
                                media={section.media}
                                markdown={markdown}
                              />
                            );
                        })}
  

                </div>

             
                        
                        <br/>
                    </div>
                    
                 
                
                <div className='container'>
                    <div className="inner_container">
                        {/* REMOVED Commented-out section for projectContent.sections[5] 
                          It is now rendered automatically by the loop above.
                        */}
                        
                        {/* Simple Links Section */}
                        <AnimatedSection delay={0.45}>
                           {/* Project Overview Section */}
                          <ProjectOverview
                            background={{
                              type: 'video',
                              src: '/lightup/lightup.mp4',
                              className: 'w-full h-full object-cover'
                            }}
                            infoItems={[
                           
                            ]}
                            links={[
                              { label: 'Chrome Store', url: 'https://chromewebstore.google.com/detail/lightup-ai-powered-web-an/pncapgeoeedlfppkohlbelelkkihikel' },
                              { label: 'GitHub Repository', url: 'https://github.com/mohamedsadiq/LightUp' },
                              { label: 'Peerlist', url: 'https://peerlist.io/sadiqo/project/lightup' },
                              { label: 'Saashub', url: 'https://www.saashub.com/best-data-annotation-software/c/ai' },
                             
                            ]}
                           
                            linksTitle="Links"
                          />
                        </AnimatedSection>
                    </div>
                </div>
            </div>
         
            <AnimatedSection delay={0.5}>
                <div className="container mx-auto px-4 py-8">
                    <ProjectNavigation />
                </div>
            </AnimatedSection>
            {activeVideo && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                role="dialog"
                aria-modal="true"
                onClick={handleCloseVideo}
              >
                <div
                  className="relative w-full max-w-3xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    onClick={handleCloseVideo}
                    aria-label="Close video"
                  >
                    ✕
                  </button>
                  <div className="overflow-hidden rounded-xl bg-black">
                    <video
                      src={activeVideo.src}
                      controls
                      autoPlay
                      className="h-auto w-full"
                    />
                  </div>
                  {activeVideo.caption && (
                    <p className="mt-3 text-center text-sm text-neutral-200">
                      {activeVideo.caption}
                    </p>
                  )}
                </div>
              </div>
            )}

        </div>
    )
}

export default LightUp

export async function getStaticProps() {
  const markdownSections: Record<string, string> = {};

  const baseDir = path.join(process.cwd(), 'project-posts', 'lightup');

  projectContent.sections.forEach((section) => {
    if (!section.markdownSlug) {
      return;
    }

    const filePath = path.join(baseDir, `${section.markdownSlug}.md`);

    if (!fs.existsSync(filePath)) {
      return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);

    markdownSections[section.markdownSlug] = content;
  });

  return {
    props: {
      markdownSections,
    },
  };
}