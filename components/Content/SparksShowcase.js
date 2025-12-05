import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';

// Project data with image paths
const projects = [
    { 
        href: "sparks/line", 
        title: "Temporal Flow",
        date: "Jul / 2024",
        image: "/videos/temporal-flow-preview.png",
        video: {
            webm: "/videos/temporal-flow.webm",
            mp4: "/videos/temporal-flow.mp4"
        },
        isVideo: true
    },
    { 
        href: "sparks/gameui", 
        title: "3D Smooth transitions",
        date: "Jul / 2024",
        image: "/videos/3d-transitions-preview.png",
        video: {
            webm: "/videos/3d-transitions.webm",
            mp4: "/videos/3d-transitions.mp4"
        },
        isVideo: true
    },
    { 
        href: "sparks/onhover", 
        title: "On Hover",
        date: "Jul / 2024",
        image: "/videos/on-hover-preview.png",
        video: {
            webm: "/videos/on-hover.webm",
            mp4: "/videos/on-hover.mp4"
        },
        isVideo: true
    },
    { 
        href: "sparks/martian", 
        title: "The Martian",
        date: "Jul / 2024",
        image: "/videos/the-martian-preview.png",
        video: {
            webm: "/videos/the-martian.webm",
            mp4: "/videos/the-martian.mp4"
        },
        isVideo: true
    },
    { 
        href: "sparks/scroll", 
        title: "Scrolling",
        date: "Jul / 2024",
        image: "/videos/scrolling-preview.png",
        video: {
            webm: "/videos/scrolling.webm",
            mp4: "/videos/scrolling.mp4"
        },
        isVideo: true
    },
    { 
        href: "sparks/widget", 
        title: "A Dynamic Widget",
        date: "Jun / 2024",
        image: "/videos/dots-preview.png",
        video: {
            webm: "/videos/dots.webm",
            mp4: "/videos/dots.mp4"
        },
        isVideo: true
    },
    { 
        href: "sparks/button", 
        title: "Button",
        date: "Jun / 2024",
        image: "/videos/button-preview.png",
        video: {
            webm: "/videos/button.webm",
            mp4: "/videos/button.mp4"
        },
        isVideo: true
    },
];

const Section2 = ({ MohamedSadiq, motionCtl, order }) => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

    // Use centralized motion control if available, otherwise fallback to legacy props
    const motionProps = motionCtl
      ? {
          variants: motionCtl.variants,
          initial: "hidden",
          animate: "visible",
          transition: motionCtl.getTransition(order),
        }
      : {
          initial: MohamedSadiq.initial,
          animate: MohamedSadiq.animate,
          transition: { delay: 0.5 },
        };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
            {...motionProps}
        >
            <div className="text-zinc-400">
                <h1 className="text-sm leading-relaxed text-zinc-500 dark:text-[#b2b2b2]">Snippets</h1>
            </div>
            <div className="main_projects relative">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="text-sm block hover_project padding-0 relative z-10 mb-4"
                    >
                        <div className="flex items-center justify-between w-full">
                            <Link 
                                className="sparkLinks inline-flex items-center relative z-20"
                                onMouseEnter={() => {
                                    setHoveredProject(project);
                                    setHoveredId(project.href);
                                    setHoverPosition({ x: 0, y: 0 });
                                }}
                                onMouseLeave={() => {
                                    setHoveredProject(null);
                                    setHoveredId(null);
                                }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoverPosition({
                                        x: e.clientX - rect.left,
                                        y: e.clientY - rect.top
                                    });
                                }}
                                style={{
                                    transition: 'color 0.18s ease',
                                }}
                                href={project.href}
                            >
                                <motion.span 
                                    className="dark:text-[#eee] text-[#000]"
                                    style={{
                                        textDecoration: 'underline',
                                        textDecorationStyle: 'dotted',
                                        textUnderlineOffset: '2px',
                                    }}
                                    animate={{
                                        filter: hoveredId && hoveredId !== project.href ? 'blur(2px)' : 'blur(0px)',
                                        textDecorationColor: hoveredId === project.href ? 'currentColor' : 'rgba(208, 208, 208, 0.53)'
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {project.title}
                                </motion.span>
                            </Link>
                            <div className="flex items-center">
                                {/* <span className="w-px h-4 bg-zinc-300 mx-4"></span> */}
                                <motion.span 
                                    className="dark:text-[#9f9f9f] text-zinc-400 w-24 text-right text-xs"
                                    animate={{
                                        filter: hoveredId && hoveredId !== project.href ? 'blur(2px)' : 'blur(0px)'
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {project.date}
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>
                ))}
                
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div 
                            className="fixed pointer-events-none z-50 w-64 h-48 bg-white dark:bg-black shadow-lg dark:shadow-black rounded-lg overflow-hidden"
                            style={{
                                left: hoverPosition.x + 20,
                                top: hoverPosition.y + 20,
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        >
                            {hoveredProject.isVideo ? (
                                <div className="w-full h-full relative">
                                    <video 
                                        key={`${hoveredProject.href}-video`}
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        className="w-full h-full object-cover absolute inset-0"
                                        onMouseEnter={e => e.target.play()}
                                        onMouseLeave={e => e.target.pause()}
                                    >
                                        <source src={hoveredProject.video?.webm} type="video/webm" />
                                        <source src={hoveredProject.video?.mp4} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* Fallback image that shows while video is loading */}
                                    <Image
                                        src={hoveredProject.image}
                                        alt={hoveredProject.title}
                                        width={256}
                                        height={192}
                                        className="w-full h-full object-cover"
                                        unoptimized={hoveredProject.image.endsWith('.gif')}
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={hoveredProject.image}
                                    alt={hoveredProject.title}
                                    width={256}
                                    height={192}
                                    className="w-full h-full object-cover"
                                    unoptimized={hoveredProject.image.endsWith('.gif')}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div 
                    className="relative inline-block mt-2"
                    onMouseEnter={() => setHoveredId('explore-all')}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <Link 
                        className="sparkLinks inline-flex items-center relative z-20"
                        href={"/sparks"}
                    >
                        <span className="text-sm">
                            <motion.span 
                                className=" dark:text-[#eee] text-[#000]"
                                style={{
                                    textDecoration: 'underline dotted',
                                    textUnderlineOffset: '2px',
                                }}
                                animate={{
                                    filter: hoveredId && hoveredId !== 'explore-all' ? 'blur(2px)' : 'blur(0px)',
                                    textDecorationColor: hoveredId === 'explore-all' ? 'currentColor' : 'rgba(208, 208, 208, 0.53)'
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                Explore All Sparks
                            </motion.span> 

                            <motion.span 
                                className="dark:text-[#eee] no-underline text-black mt-2"
                                animate={{
                                    filter: hoveredId && hoveredId !== 'explore-all' ? 'blur(2px)' : 'blur(0px)'
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {" "}
                                 →
                            </motion.span>
                        </span>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Section2;
