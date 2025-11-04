import Head from 'next/head'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../styles/Home.module.css'
import ExternalLink from '../../components/ExternalLink'
import { AnimatedSection } from '../../components/AnimatedSection'

import WorkIntro from '../../components/WorkIntro'
import BackButton from '../../components/backButton'
import { projectContent } from '../../data/lightup'
import ProjectNavigation from '../../components/ProjectNavigation';

// All images are served from the public directory
const imagePaths = {
  img1: '/lightup/linkimage.png',
  img2: '/lightup/56f413c1-e074-43e4-adc5-8205230ea720_1986x1576.jpg',
  img3: '/lightup/ebe607a8-f6f8-47d2-a8f5-a80ac36606da_2880x2160.png',
  img4: '/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png',
  img5: '/lightup/d213566b-7ade-4640-92d5-a2273b2affc5_2880x2160.webp',
  designImg1: '/lightup/Original Image 1504x1504.webp',
  designImg2: '/lightup/Start 1.webp',
  designImg3: '/lightup/Start 2 Image.webp',
  video: '/lightup/Dribbble Video.mp4',
}

// Component for project image with caption
const ProjectImage: FC<{ 
  src: any; 
  alt: string; 
  caption?: string; 
  layout?: 'fill' | 'responsive' | 'intrinsic';
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
}> = ({ 
  src, 
  alt, 
  caption, 
  layout = 'intrinsic',
  width = 1200,  // Default width for images
  height = 800,  // Default height for images
  priority = false,
  className = 'rounded-xl border border-neutral-100 mt-9 m-auto',
  loading = 'lazy'
}) => {
  // For fill layout, we need a container with relative position and defined height
  const isLayoutFill = layout === 'fill';
  
  // If using fill layout, we don't need width/height
  const imageProps = isLayoutFill 
    ? { layout: 'fill' as const }
    : { 
        layout,
        width,
        height,
        objectFit: 'cover' as const,
        objectPosition: 'center' as const
      };
  
  return (
    <div className="image-container">
      <AnimatedSection>
      {isLayoutFill ? (
        <div className="relative h-96 w-full">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={priority}
            loading={loading}
            className={className}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          {...imageProps}
          priority={priority}
          loading={loading}
          className={className}
        />
      )}
      {caption && <span className="project_img_des">({caption}) </span>}
      </AnimatedSection>
    </div>
  );
};

// Component for rendering a project section with title and content
const ProjectSection: FC<{ title: string; content: string }> = ({ title, content }) => (
  <AnimatedSection delay={0.1}>
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
                      
                        <AnimatedSection delay={0.15} className="blog_photo inner_blog work_intro_image">
                            <ProjectImage
                                src={imagePaths.img1}
                                alt={projectContent.title}
                                layout="fill"
                                priority={true}
                                loading="eager"
                                className=""
                            />
                        </AnimatedSection>
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
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                          <div className="whitespace-pre-wrap ">
                              {projectContent.sections[0].content.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                              ))}
                          </div>
                        </AnimatedSection>
                    </div>
                </div>
                
                
            </main>
            <div className='p-20 pt-0'>
                <AnimatedSection delay={0.25}>
                    <ProjectImage 
                        src={imagePaths.img2} 
                        alt="Concept visualization" 
                    />
                </AnimatedSection>
                <div className='container'>
                    <div className="inner_container">
                        <ProjectSection 
                            title={projectContent.sections[1].title} 
                            content={projectContent.sections[1].content} 
                        />
                        <ProjectSection 
                            title={projectContent.sections[2].title} 
                            content={projectContent.sections[2].content} 
                        />
                        <br/>
                         <br/>
                        <ProjectSection 
                            title={projectContent.sections[3].title} 
                            content={projectContent.sections[3].content} 
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="space-y-6">
                                <ProjectImage 
                                    src="/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png"
                                    alt="LightUp interface close-up"
                                    caption="LightUp's clean and minimal interface"
                                />
                                <ProjectImage 
                                    src={imagePaths.designImg1} 
                                    alt="LightUp in context"
                                    caption="Seamless integration with web content"
                                />
                            </div>
                            <div className="space-y-6">
                                <ProjectImage 
                                    src={imagePaths.designImg2} 
                                    alt="LightUp activation states"
                                    caption="Different activation states and interactions"
                                />
                                <ProjectImage 
                                    src={imagePaths.designImg3} 
                                    alt="LightUp feature showcase"
                                    caption="Feature demonstration in action"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-8 rounded-xl overflow-hidden">
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
                         <AnimatedSection delay={0.3}>
                        <ProjectImage 
                            src={imagePaths.img3} 
                            alt="LightUp in action" 
                            caption="LightUp in action" 
                        />
                    </AnimatedSection>
                    {/* <div className="inner_container">
                        <FeatureList features={projectContent.features} />
                    </div> */}
                </div>

                {/* <div className='container'>
                    <AnimatedSection delay={0.35}>
                        <div className="inner_container">
                            <ProjectImage 
                                src="/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png"
                                alt="LightUp workflow" 
                                caption="Loading - Display - Chat" 
                            />
                        </div>
                    </AnimatedSection>
                </div> */}
                        {/* Video Gallery */}
                       
                        
                        <br/>
                        {/* <ProjectSection 
                            title={projectContent.sections[3].title} 
                            content={projectContent.sections[3].content} 
                        /> */}
                    </div>
                    
                    {/* <AnimatedSection delay={0.4}>
                        <ProjectImage 
                            src={imagePaths.img5} 
                            alt="Open source" 
                        />
                    </AnimatedSection> */}
                
                <div className='container'>
                    <div className="inner_container">
                        <ProjectSection 
                            title={projectContent.sections[5].title} 
                            content={projectContent.sections[5].content} 
                        />
                        
                        {/* Simple Links Section */}
                        <AnimatedSection delay={0.45}>
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h2 className="text-xl font-medium mb-4">Links</h2>
                                <div className="flex flex-col space-y-2">
                                    <a className="text-blue-600 hover:underline inline-block" href="https://www.boimaginations.com/lightup" target="_blank" rel="noopener noreferrer">
                                        Official Website
                                    </a>
                                    <a className="text-blue-600 hover:underline inline-block" href="https://github.com/mohamedsadiq/LightUp" target="_blank" rel="noopener noreferrer">
                                        GitHub Repository
                                    </a>
                                    <a className="text-blue-600 hover:underline inline-block" href="https://peerlist.io/sadiqo/project/lightup" target="_blank" rel="noopener noreferrer">
                                        On Peerlist 
                                    </a>
                                    <a className="text-blue-600 hover:underline inline-block" href="https://chromewebstore.google.com/detail/lightup/your-extension-id" target="_blank" rel="noopener noreferrer">
                                        Chrome Web Store
                                    </a>
                                </div>
                            </div>
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