import Head from 'next/head'
import Image, { type StaticImageData } from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import styles from '../../styles/Home.module.css'
import ExternalLink from '../../components/ExternalLink'
import { AnimatedSection } from '../../components/AnimatedSection'

import BackButton from '../../components/backButton'
import ProjectOverview from '../../components/ProjectOverview'
import { projectContent } from '../../data/lightup'
import ProjectNavigation from '../../components/ProjectNavigation';
import PhotoViewerOverlay, { type PhotoPreview } from '../../components/PhotoViewerOverlay'
import VideoViewerOverlay, { type VideoPreview } from '../../components/VideoViewerOverlay'
// Removed unused HorizontalGallery

// Configure markdown link rendering for project sections so inline links
// (e.g. Peerlist mention/recognition links) get dotted underline styling
// and an external-link style icon similar to the ExternalLink component.
const markdownRenderer = new marked.Renderer()
markdownRenderer.link = (href: string | null, title: string | null, text: string) => {
  const safeHref = href || ''
  const titleAttr = title ? ` title="${title}"` : ''

  return `<a href="${safeHref}"${titleAttr} target="_blank" rel="noopener noreferrer" class="group inline-flex items-center text-black dark:text-white underline decoration-dotted decoration-[rgba(208,208,208,0.53)] underline-offset-2 transition-colors duration-200 hover:decoration-current hover:decoration-solid"><span class="dark:text-white">${text}</span><svg width="12" height="12" viewBox="0 0 30 30" fill="#909090" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="transition: fill 200ms ease; margin-left: 4px; display: inline-block; vertical-align: middle; position: relative; top: -1px;" class="inline-block align-middle"><path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z"/><path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z"/></svg></a>`
}

marked.use({ renderer: markdownRenderer })

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// Import images with blur placeholders
import LightupIntroImage from '../../public/lightup/linkimage.png';
import boxesIsideBoxes from "../../public/lightup/boxes.jpg"
import jayKadamImage from '../../public/lightup/GrKWWxqWkAA2zie.png'
import studentTestimonialA from '../../public/lightup/GqFpAIGXwAAabN0.png'
import studentTestimonialB from '../../public/lightup/Gq7LBA2XMAAApxq.png'
import teacherTestimonial from '../../public/lightup/GoRtowjWEAA3JP1.jpeg'
// Removed unused img3, img4, img5, designImg1, designImg2, designImg3

// Image paths object with imported images
const imagePaths = {
    LightupIntroImage,
    boxesIsideBoxes,
    jayKadamImage,
    studentTestimonialA,
    studentTestimonialB,
    teacherTestimonial,
    // Removed unused image keys
    video: '/lightup/Dribbble Video.mp4' // Keep video as a string path
};

const testimonialEntries = [
  {
    id: 'testimonial-jay-kadam',
    image: jayKadamImage,
    alt: 'Jay Kadam testimonial',
    caption: 'Jay Kadam - product designer at Peerlist',
    description:
      'Jay said LightUp feels like Dia Browser but everywhere—and he keeps it in his top five extensions on his browser.',
  },
  {
    id: 'testimonial-student-a',
    image: studentTestimonialA,
    alt: 'Student testimonial A',
    caption: 'Student after testing LightUp',
    description:
      'A student tester used LightUp to translate dense papers without juggling extra tabs.',
  },
  {
    id: 'testimonial-student-b',
    image: studentTestimonialB,
    alt: 'Student testimonial B',
    caption: 'Student after using LightUp',
    description:
      'Another student loved how inline summaries suddenly made technical blogs approachable.',
  },
  {
    id: 'testimonial-teacher',
    image: teacherTestimonial,
    alt: 'Teacher testimonial',
    caption: 'Teacher after using LightUp',
    description:
      'A teacher shared how much they love LightUp and even walked their students through it in class.',
  },
];

type ProjectPhotoPreview = PhotoPreview;

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
  enablePreview?: boolean;
  onPreview?: (photo: ProjectPhotoPreview) => void;
  previewId?: string;
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
  enablePreview = false,
  onPreview,
  previewId,
  ...props
}) => {
  const isImportedImage = src && typeof src === 'object' && 'src' in src;
  
  // Calculate aspect ratio if we have the image dimensions
  const aspectRatioValue = src?.width && src?.height ? src.height / src.width : 9 / 16;
  const paddingPercent = aspectRatioValue * 100;
  
  // Only apply blur to imported images, not public paths
  const imageProps = {
    src: isImportedImage ? src : src,
    alt,
    fill: true,
    className: "rounded-[24px]",
    style: { 
      objectFit,
      objectPosition
    },
    priority,
    loading,
    quality: 100,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw",
    // Only include placeholder and blurDataURL if we have a valid blurDataURL
    ...(isImportedImage && (blurDataURL || src?.blurDataURL) ? { 
      placeholder: 'blur' as const,
      blurDataURL: blurDataURL || src?.blurDataURL 
    } : {}),
    ...props
  };
  
  const handlePreview = () => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!enablePreview) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePreview();
    }
  };

  const layoutId = enablePreview ? previewId || alt : undefined;

  const imageContent = (
    <div
      className={`rounded-[24px] relative w-full shadow-sm ${containerClassName}`}
      style={{ paddingBottom: `${paddingPercent}%` }}
    >
      <motion.div layoutId={layoutId} className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl " transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}>
        <Image {...imageProps} />
      </motion.div>
    </div>
  );

  return (
    <AnimatedSection delay={delay} className={`w-full ${className}`}>
      {enablePreview ? (
        <button
          type="button"
          className="group flex w-full flex-col items-stretch focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          onClick={handlePreview}
          onKeyDown={handleKeyDown}
          aria-label={`View ${alt} in fullscreen`}
        >
          <div className="w-full cursor-zoom-in transition duration-200 ease-out group-hover:scale-[1.01]">
            {imageContent}
          </div>
        </button>
      ) : (
        imageContent
      )}
      {caption && (
        <div className="text-center mt-2 mb-2">
          <span className="text-sm text-gray-500 dark:text-[#e1e1e1]">({caption})</span>
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
  <AnimatedSection delay={0} className={`w-full ${className}`}>
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
  enableMediaPreview?: boolean;
  onPreview?: (photo: ProjectPhotoPreview) => void;
}> = ({ title, content, className = '', media = [], markdown, enableMediaPreview = false, onPreview }) => (
  <AnimatedSection delay={0} className={className}>
    <h2 className={ title.includes('Overview') ? 'mt-4 mb-2 text-slate-950' : title.includes('inspiration') ? 'mt-10 mb-2' : 'mt-10 mb-2'}>{title}</h2>
    <div className="whitespace-pre-wrap">
      {markdown ? (
        <div
          className="text-[#616161] dark:text-[#d5d5d5] leading-7 text-base"
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        />
      ) : (
        content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
        ))
      )}
    </div>
    {media.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
        {media.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {item.type === 'image' ? (
              <>
                <div className="w-full rounded-2xl shadow-sm">
                  <ProjectImage 
                    src={item.src} 
                    alt={item.alt || title} 
                    className="w-full h-auto" 
                    objectFit="contain"
                    enablePreview={enableMediaPreview}
                    onPreview={onPreview}
                    previewId={`${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${idx}`}
                    caption={item.caption}
                  />
                </div>
              </>
            ) : (
              <ProjectVideo 
                src={item.src} 
                caption={item.caption}
                autoPlay={item.autoPlay}
                loop={item.loop}
                muted={item.muted}
              />
            )}
          </div>
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
    <AnimatedSection delay={0} className="mt-10">
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
                <div className="relative h-24 w-24 sm:h-60 sm:w-60 rounded-full overflow-hidden border border-neutral-200 bg-black/80 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105 dark:border-[#3a3a3a]">
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
                  <p className="mt-2 text-center text-xs text-neutral-600 max-w-[10rem] dark:text-white">
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

const SectionDivider: FC = () => (
  <AnimatedSection delay={0} className="w-full">
    <div className="my-20 w-full">
      <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  </AnimatedSection>
);

// --- REMOVED Unused FeatureList component ---

// --- REMOVED Unused WorkflowSteps component ---


// Main LightUp component
const LightUp: FC<{ markdownSections: Record<string, string> }> = ({ markdownSections }) => {
    const [activeVideo, setActiveVideo] = useState<{ src: string; caption?: string } | null>(null);
    const [activePhoto, setActivePhoto] = useState<ProjectPhotoPreview | null>(null);

    const handleOpenVideo = (video: { src: string; caption?: string }) => {
      setActiveVideo(video);
    };

    const handleCloseVideo = () => {
      setActiveVideo(null);
    };

    const handleOpenPhoto = (photo: ProjectPhotoPreview) => {
      setActivePhoto(photo);
    };

    const handleClosePhoto = () => {
      setActivePhoto(null);
    };

    useEffect(() => {
      if (!activePhoto) {
        return;
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClosePhoto();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activePhoto]);

    const firstSection = projectContent.sections[0];
    const firstSectionMarkdown = firstSection.markdownSlug
      ? markdownSections[firstSection.markdownSlug]
      : undefined;

    const secondSection = projectContent.sections[1];
    const secondSectionMarkdown = secondSection.markdownSlug
      ? markdownSections[secondSection.markdownSlug]
      : undefined;

    return (
        <LayoutGroup id="lightup-photo-viewer">
        <div className={styles.container}>
            <Head>
                <title>{projectContent.title}</title>
                <meta name="description" content={projectContent.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container">
                    <AnimatedSection delay={0.05}>
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
                                delay={0.15}
                            />
                        </div>
                        <AnimatedSection delay={0.2}>
                            <h2 className='mt-6'>Project Overview</h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.25}>
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
                              placeholderSrc: '/lightup/lightupplaceholder.png',
                              className: 'w-full h-full object-cover'
                            }}
                            infoItems={[
                              {
                                title: 'Platform',
                                content: 'Chrome Extension'
                              },
                              {
                                title: 'Role',
                                content: 'From 0 → 1'
                              },
                              {
                                title: 'Funding',
                                content: 'With No funding'
                              },
                              {
                                title: 'Downloads',
                                content: '668 install - 252 active users - No marketing budget'
                              },
                              {
                                title: 'Timeline',
                                content: '4 Dec 2024 - Present'
                              }
                            ]}
                           
                            linksTitle="Links"
                          />
                        </AnimatedSection>
                        <AnimatedSection delay={0.3}>
                          <h2 className='mb-3'>{firstSection.title}</h2>
                          <div className=" ">
                            {firstSectionMarkdown ? (
                              <div
                                className="text-[#616161] dark:text-[#d5d5d5] leading-7 text-base"
                                dangerouslySetInnerHTML={{ __html: marked.parse(firstSectionMarkdown) }}
                              />
                            ) : firstSection.content ? (
                              firstSection.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                              ))
                            ) : null}
                          </div>
                        </AnimatedSection>
                    </div>
                    
                </div>
                
               
                
            <div className=''>
               
                <div className='container'>
                    <div className="inner_container">
                      <SectionDivider />
                      <AnimatedSection delay={0.35}>
                                <h2 className='mb-4'>{secondSection.title}</h2>
                                 <ProjectImage 
                                src={imagePaths.boxesIsideBoxes} 
                                alt="Open source" 
                                placeholder="blur"
                                blurDataURL={imagePaths.boxesIsideBoxes.blurDataURL}
                                delay={0.4}
                                enablePreview
                                onPreview={handleOpenPhoto}
                                previewId="lightup-boxes-preview"
                                caption="Nested knowledge windows that inspired LightUp"
                        />
                                <div className="whitespace-pre-wrap ">
                                  {secondSectionMarkdown ? (
                                    <div
                                      className="mt-4 text-[#616161] dark:text-[#d5d5d5] leading-7 text-base"
                                      dangerouslySetInnerHTML={{ __html: marked.parse(secondSectionMarkdown) }}
                                    />
                                  ) : (
                                    <p className='mt-4'> {secondSection.content}</p>
                                  )}
                                </div>
                        </AnimatedSection>
                        <SectionDivider />
                        
                        
                        {/* --- FIXED --- 
                           Dynamically render the rest of the project sections (starting from index 2)
                           This replaces the broken, hardcoded, and duplicate sections.
                        */}
                        {projectContent.sections.slice(2).map((section, index, array) => {
                            const markdown = section.markdownSlug
                              ? markdownSections[section.markdownSlug]
                              : undefined;

                            if (section.title === "What users are saying:") {
                              return (
                                <React.Fragment key={section.title + index}>
                                  <SectionDivider />
                                  <AnimatedSection delay={0}>
                                    <h2 className='mb-4'>{section.title}</h2>
                                    <div className="whitespace-pre-wrap mb-6">
                                      <p>{section.content}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      {testimonialEntries.map((entry) => (
                                        <div key={entry.id} className="flex flex-col gap-3">
                                          <ProjectImage
                                            src={entry.image}
                                            alt={entry.alt}
                                            placeholder="blur"
                                            blurDataURL={entry.image.blurDataURL}
                                            enablePreview
                                            onPreview={handleOpenPhoto}
                                            previewId={entry.id}
                                          />
                                          <p className="text-sm text-[#5c5c5c] leading-6">
                                            <span className="dark:text-white font-medium text-[#111]">{entry.caption}:</span> {entry.description}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </AnimatedSection>
                                </React.Fragment>
                              );
                            }
                            
                            if (section.gallery && section.media && section.media.length) {
                              return (
                                <React.Fragment key={section.title + index}>
                                  {index > 0 && <SectionDivider />}
                                  <VideoTowersSection
                                    title={section.title}
                                    content={section.content || ''}
                                    media={section.media}
                                    onVideoClick={handleOpenVideo}
                                  />
                                  {section.markdownSlug === "from-idea-to-shape" && <SectionDivider />}
                                </React.Fragment>
                              );
                            }

                            const isIdeaToShapeSection = section.markdownSlug === "from-idea-to-shape" || section.title.includes("From idea to shape");
                            const previousSection = index > 0 ? projectContent.sections[2 + index - 1] : null;
                            const isAfterIdeaToShape = previousSection && 
                              (previousSection.markdownSlug === "from-idea-to-shape" || 
                               previousSection.title.includes("From idea to shape"));
                            
                            return (
                              <React.Fragment key={section.title + index}>
                                {/* Don't add divider if previous section was 'From idea to shape' */}
                                {index > 0 && !isAfterIdeaToShape && <SectionDivider />}
                                <ProjectSection
                                  title={section.title}
                                  content={section.content || ''}
                                  media={section.media}
                                  markdown={markdown}
                                  enableMediaPreview
                                  onPreview={handleOpenPhoto}
                                />
                                {/* Add divider after 'From idea to shape' section */}
                                {isIdeaToShapeSection && <SectionDivider />}
                              </React.Fragment>
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
                              placeholderSrc: '/lightup/Screenshot 2025-11-16 at 8.46.05 PM.png',
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
            </main>
            <PhotoViewerOverlay photo={activePhoto} onClose={handleClosePhoto} />
            <VideoViewerOverlay video={activeVideo} onClose={handleCloseVideo} />

        </div>
        </LayoutGroup>
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