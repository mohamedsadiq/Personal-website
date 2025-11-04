import Head from 'next/head'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../styles/Home.module.css'
import ExternalLink from '../../components/ExternalLink'
import { VideoThumbnail } from '../../components/VideoThumbnail';
import { ScatteredVideoGallery } from '../../components/ScatteredVideoGallery';
import { AnimatedSection } from '../../components/AnimatedSection'

import WorkIntro from '../../components/WorkIntro'
import BackButton from '../../components/backButton'
import { projectContent } from '../../data/lightup'
import ProjectNavigation from '../../components/ProjectNavigation';

// All images are served from the public directory
const imagePaths = {
  img1: '/lightup/99112bcf-6ff7-4fed-bd66-b1cb12932430_2880x2160.webp',
  img2: '/lightup/56f413c1-e074-43e4-adc5-8205230ea720_1986x1576.jpg',
  img3: '/lightup/ebe607a8-f6f8-47d2-a8f5-a80ac36606da_2880x2160.png',
  img4: '/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png',
  img5: '/lightup/d213566b-7ade-4640-92d5-a2273b2affc5_2880x2160.webp',
  designImg1: '/lightup/Original Image 1504x1504.webp',
  designImg2: '/lightup/Start 1.webp',
  designImg3: '/lightup/Start 2 Image.webp',
  video: '/lightup/Dribbble Video.mp4',
  videos: {
    video1: '/lightup/vidoes/2.mp4',
    video2: '/lightup/vidoes/3.mp4',
    video3: '/lightup/vidoes/4.mp4',
    video4: '/lightup/vidoes/5.mp4',
    video5: '/lightup/vidoes/6.mp4',
    video6: '/lightup/vidoes/7.mp4',
    video7: '/lightup/vidoes/8.mp4',
    twitterVideo: '/lightup/vidoes/X Twitter Video Downloader.mp4'
  }
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
    <h2 className={title.includes('Overview') ? 'mt-4 text-slate-950' : title.includes('inspiration') ? 'mt-10' : ''}>{title}</h2>
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

// Component for displaying videos in a responsive grid
const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const videoTitles = {
    video1: 'Core Features',
    video2: 'User Flow',
    video3: 'Advanced Tools',
    video4: 'Performance',
    video5: 'Customization',
    video6: 'Integrations',
    video7: 'Mobile Experience',
    twitterVideo: 'Twitter Integration'
  };

  // Video data for the gallery
  const videos = [
    { 
      id: 'video1', 
      title: videoTitles.video1, 
      src: imagePaths.videos.video1, 
      description: 'Core features demonstration',
      featured: true
    },
    { 
      id: 'video2', 
      title: videoTitles.video2, 
      src: imagePaths.videos.video2, 
      description: 'User journey and navigation'
    },
    { 
      id: 'video3', 
      title: videoTitles.video3, 
      src: imagePaths.videos.video3, 
      description: 'Advanced tool showcase'
    },
    { 
      id: 'video4', 
      title: videoTitles.video4, 
      src: imagePaths.videos.video4, 
      description: 'Performance metrics'
    },
    { 
      id: 'video5', 
      title: videoTitles.video5, 
      src: imagePaths.videos.video5, 
      description: 'Customization options'
    },
    { 
      id: 'video6', 
      title: videoTitles.video6, 
      src: imagePaths.videos.video6, 
      description: 'Third-party integrations'
    },
    { 
      id: 'video7', 
      title: videoTitles.video7, 
      src: imagePaths.videos.video7, 
      description: 'Mobile experience'
    },
    { 
      id: 'twitterVideo', 
      title: videoTitles.twitterVideo, 
      src: imagePaths.videos.twitterVideo, 
      description: 'Twitter integration demo'
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <video
                src={selectedVideo}
                className="w-full rounded-xl shadow-2xl"
                controls
                autoPlay
                playsInline
              />
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-base md:text-3xl text-center mb-8 md:mb-12">Video Showcase</h2>
        
        {/* Featured Video */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <VideoThumbnail
              src={videos[0].src}
              title={videos[0].title}
              description={videos[0].description}
              aspect="aspect-video"
              onClick={() => setSelectedVideo(videos[0].src)}
              className="w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-black">{videos[0].title}</h3>
            <p className="text-gray-600">{videos[0].description}</p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <VideoThumbnail
                  src={video.src}
                  title={video.title}
                  description={video.description}
                  aspect="aspect-video"
                  onClick={() => setSelectedVideo(video.src)}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-lg text-black">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
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

                <div className='container'>
                    <AnimatedSection delay={0.35}>
                        <div className="inner_container">
                            <ProjectImage 
                                src="/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png"
                                alt="LightUp workflow" 
                                caption="Loading - Display - Chat" 
                            />
                            {/* <WorkflowSteps workflow={projectContent.workflow} /> */}
                        </div>
                    </AnimatedSection>
                </div>
                        {/* Video Gallery */}
                       
                        
                        <br/>
                        {/* <ProjectSection 
                            title={projectContent.sections[3].title} 
                            content={projectContent.sections[3].content} 
                        /> */}
                    </div>
                   
                 <VideoGallery />
                {/* <AnimatedSection delay={0.4}>
                    <ProjectImage 
                        src={imagePaths.img5} 
                        alt="Open source" 
                    />
                </AnimatedSection> */}
                
                <div className='container'>
                    <div className="inner_container">
                        <ProjectSection 
                            title={projectContent.sections[4].title} 
                            content={projectContent.sections[4].content} 
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