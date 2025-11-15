import Head from 'next/head'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../styles/Home.module.css'
import ExternalLink from '../../components/ExternalLink'
import { AnimatedSection } from '../../components/AnimatedSection'

import WorkIntro from '../../components/WorkIntro'
import BackButton from '../../components/backButton'
import ProjectOverview from '../../components/ProjectOverview'
import { projectContent } from '../../data/lightup'
import ProjectNavigation from '../../components/ProjectNavigation';
import HorizontalGallery from '../../components/HorizontalGallery';

// Import images with blur placeholders
import LightupIntroImage from '../../public/lightup/linkimage.png';
import boxesIsideBoxes from "../../public/lightup/boxes.jpg"
import img3 from '../../public/lightup/ebe607a8-f6f8-47d2-a8f5-a80ac36606da_2880x2160.png';
import img4 from '../../public/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png';
import img5 from '../../public/lightup/d213566b-7ade-4640-92d5-a2273b2affc5_2880x2160.webp';
import designImg1 from '../../public/lightup/Original Image 1504x1504.webp';
import designImg2 from '../../public/lightup/Start 1.webp';
import designImg3 from '../../public/lightup/Start 2 Image.webp';

// Image paths object with imported images
const imagePaths = {
    LightupIntroImage,
    boxesIsideBoxes,
    img3,
    img4,
    img5,
    designImg1,
    designImg2,
    designImg3,
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
  placeholder = 'blur',
  blurDataURL = '',
  objectFit = 'contain',
  objectPosition = 'center',
  height = 'auto',
  ...props
}) => {
  const isPublicPath = typeof src === 'string' && src.startsWith('/');
  
  // Calculate aspect ratio if we have the image dimensions
  const aspectRatio = src?.width && src?.height ? (src.height / src.width * 100) : 56.25; // Default to 16:9 if no dimensions
  
  return (
    <AnimatedSection delay={delay} className={`w-full ${className}`}>
      <div className={`relative w-full ${containerClassName}`} style={{ paddingBottom: `${aspectRatio}%` }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-lg"
          style={{ 
            objectFit,
            objectPosition
          }}
          priority={priority}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={isPublicPath ? undefined : (typeof src === 'string' ? src : src?.blurDataURL || '')}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          {...props}
        />
      </div>
      {caption && (
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">({caption})</span>
        </div>
      )}
    </AnimatedSection>
  );
};

// Component for rendering a project section with title and content
const ProjectSection: FC<{ title: string; content: string; className?: string }> = ({ title, content, className = '' }) => (
  <AnimatedSection delay={0.1} className={className}>
    <h2 className={ title.includes('Overview') ? 'mt-4 mb-2 text-slate-950' : title.includes('inspiration') ? 'mt-10 mb-2' : 'mb-2'}>{title}</h2>
    <div className="whitespace-pre-wrap">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
      ))}
    </div>
  </AnimatedSection>
);

// Component for rendering features list
const FeatureList: FC<{ features: Array<{ title: string; description: string }> }> = ({ features }) => (
  <AnimatedSection delay={0.2}>
    <h2>Features That Empower You.</h2>
    <ul>
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          <h3 className='text-gray-500'>{feature.title}</h3>
          <li className='text-gray-500 mb-4'>{feature.description}</li>
        </React.Fragment>
      ))}
    </ul>
  </AnimatedSection>
);

// Component for rendering workflow steps
const WorkflowSteps: FC<{ workflow: string[] }> = ({ workflow }) => {
    return (
        <ol className="list-decimal pl-5 space-y-2 mt-4">
            {workflow.map((step, index) => (
                <li key={index} className="text-gray-700">
                    {step}
                </li>
            ))}
        </ol>
    );
};


// Main LightUp component
const LightUp: FC = () => {
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
                          <h2 className='mb-3'>The Itch: "The Tab-Switching Hell"</h2>
                          <div className="whitespace-pre-wrap ">
                              {projectContent.sections[0].content.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                              ))}
                          </div>
                        </AnimatedSection>
                    </div>
                </div>
                
                
            </main>
            <div className=''>
               
                <div className='container'>
                    <div className="inner_container">
                     
                      <AnimatedSection delay={0.2}>
                                <h2 className='mb-4'>{projectContent.sections[1].title}</h2>
                                 <ProjectImage 
                                src={imagePaths.boxesIsideBoxes} 
                                alt="Open source" 
                                placeholder="blur"
                                blurDataURL={imagePaths.boxesIsideBoxes.blurDataURL}
                        />
                                <div className="whitespace-pre-wrap ">
                                   <p className='mt-4'> {projectContent.sections[1].content}</p>
                                    {/* {projectContent.sections[2].content.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                                    ))} */}
                                </div>
                        </AnimatedSection>

                                {/* <ProjectSection 
                                    title={section.title} 
                                    content={section.content} 
                                    className={index > 0 ? 'mt-6' : ''}
                                /> */}
                            
                     
                        
                      
                        
                        {/* <div className="mt-8 rounded-xl overflow-hidden">
                            <video 
                                src={imagePaths.video}
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-auto rounded-xl border border-neutral-100"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <p className="text-sm text-gray-500 mt-2 text-center">Watch LightUp in action</p>
                        </div>
                         */}
                        
                    {/* <div className="inner_container">
                        <FeatureList features={projectContent.features} />
                    </div> */}
                </div>

                {/* <div className='container'>
                    <AnimatedSection delay={0.35}>
                        <div className="inner_container">
                                <ProjectImage 
                                    src={imagePaths.img4}
                                    alt="LightUp workflow" 
                                    caption="Loading - Display - Chat" 
                                    placeholder="blur"
                                    blurDataURL={imagePaths.img4.blurDataURL}
                                />
                        </div>
                    </AnimatedSection>
                </div> */}
                        {/* Video Gallery */}
                       
                        
                        <br/>
                    </div>
                    
                    {/* <AnimatedSection delay={0.4}>
                            <ProjectImage 
                                src={imagePaths.img5} 
                                alt="Open source" 
                                placeholder="blur"
                                blurDataURL={imagePaths.img5.blurDataURL}
                        />
                    </AnimatedSection> */}
                
                <div className='container'>
                    <div className="inner_container">
                        {/* <ProjectSection 
                            title={projectContent.sections[5].title} 
                            content={projectContent.sections[5].content} 
                        /> */}
                        
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
            {/* Project Navigation */}
            <AnimatedSection delay={0.5}>
                <div className="container mx-auto px-4 py-8">
                    <ProjectNavigation />
                </div>
            </AnimatedSection>
        </div>
    )
}


export default LightUp