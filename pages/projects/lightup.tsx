import Head from 'next/head'
import Image from 'next/image'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'

import WorkIntro from '../../components/WorkIntro'
import { projectContent } from '../../data/lightup'

// Image imports
import img1 from '../../img/lightup/99112bcf-6ff7-4fed-bd66-b1cb12932430_2880x2160.webp'
import img2 from '../../img/lightup/56f413c1-e074-43e4-adc5-8205230ea720_1986x1576.jpg'
import img3 from '../../img/lightup/ebe607a8-f6f8-47d2-a8f5-a80ac36606da_2880x2160.png'
import img4 from '../../img/lightup/537334f8-55de-4a4d-bdc2-31cb4c824a84_2880x2160.png'
import img5 from '../../img/lightup/d213566b-7ade-4640-92d5-a2273b2affc5_2880x2160.webp'

// Component for project image with caption
const ProjectImage: FC<{ 
  src: any; 
  alt: string; 
  caption?: string; 
  layout?: 'fill' | 'responsive' | 'intrinsic'; 
  priority?: boolean;
  className?: string;
}> = ({ 
  src, 
  alt, 
  caption, 
  layout = 'responsive', 
  priority = false,
  className = 'rounded-xl border border-neutral-100 mt-9 m-auto'
}) => {
  // For fill layout, we need a container with relative position and defined height
  const isLayoutFill = layout === 'fill';
  
  return (
    <div className="image-container">
      {isLayoutFill ? (
        <div className="relative h-96 w-full">
          <Image
            src={src}
            alt={alt}
            // layout="fill"
            objectFit='cover'
            objectPosition="center"
            placeholder="blur"
            priority={priority}
            quality={100}
            className={className}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          layout={layout}
          objectFit='cover'
          objectPosition="center"
          placeholder="blur"
          priority={priority}
          quality={100}
          className={className}
        />
      )}
      {caption && <span className="project_img_des">({caption}) </span>}
    </div>
  );
};

// Component for rendering a project section with title and content
const ProjectSection: FC<{ title: string; content: string }> = ({ title, content }) => (
  <>
    <h2 className={title.includes('Overview') ? 'mt-4 text-slate-950' : title.includes('inspiration') ? 'mt-10' : ''}>{title}</h2>
    <div className="whitespace-pre-wrap">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
      ))}
    </div>
  </>
);

// Component for rendering features list
const FeatureList: FC<{ features: Array<{ title: string; description: string }> }> = ({ features }) => (
  <>
    <h2>Features That Empower You.</h2>
    <ul>
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          <h3 className='text-gray-500'>{feature.title}</h3>
          <li className='text-gray-500 mb-4'>{feature.description}</li>
        </React.Fragment>
      ))}
    </ul>
  </>
);

// Component for rendering workflow steps
const WorkflowSteps: FC<{ workflow: Array<{ title: string; steps: string[] }> }> = ({ workflow }) => (
  <>
    <h2 className='mt-4'>How LightUp Works</h2>
    <ul className='mt-4'>
      {workflow.map((item, index) => (
        <React.Fragment key={index}>
          <h3 className='text-gray-500'>{item.title}</h3>
          {item.steps.map((step, stepIndex) => (
            <li key={stepIndex} className='text-gray-500 mb-4'>{step}</li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  </>
);

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
                    <div className="inner_container">
                        <WorkIntro title={"Web 3 Concepts"} link={"/projects/developerdao"} />
                        <div className="project_title">
                          <h1>{projectContent.title}</h1>
                          <p>{projectContent.description} <span className="dateProject"> {projectContent.date} </span></p>
                        </div>
                      
                        <div className="blog_photo inner_blog work_intro_image">
                            <ProjectImage
                                src={img1}
                                alt={projectContent.title}
                                layout="fill"
                                priority={true}
                                className=""
                            />
                        </div>
                          <h2>Project Overview</h2>
                        <div className="project_info">
                            <a
                                className="projectLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={projectContent.projectLink}
                            >
                                {" "}
                                Visit Live ↗
                            </a>
                            <div className="projects_tags">
                                {projectContent.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="whitespace-pre-wrap">
                            {projectContent.sections[0].content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className={index > 0 ? 'mt-4' : ''}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <div className='p-20 pt-0'>
                <ProjectImage 
                    src={img2} 
                    alt="Concept visualization" 
                />
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
                        <ProjectSection 
                            title={projectContent.sections[3].title} 
                            content={projectContent.sections[3].content} 
                        />
                    </div>
                    <ProjectImage 
                        src={img3} 
                        alt="LightUp in action" 
                        caption="LightUp in action" 
                    />
                    <div className="inner_container">
                        <FeatureList features={projectContent.features} />
                    </div>
                </div>

                <div className='container'>
                    <div className="inner_container">
                        <ProjectImage 
                            src={img4} 
                            alt="LightUp workflow" 
                            caption="Loading - Display - Chat" 
                        />
                        <WorkflowSteps workflow={projectContent.workflow} />
                    </div>
                </div>
                
                <ProjectImage 
                    src={img5} 
                    alt="Open source" 
                />
                
                <div className='container'>
                    <div className="inner_container">
                        <ProjectSection 
                            title={projectContent.sections[4].title} 
                            content={projectContent.sections[4].content} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LightUp