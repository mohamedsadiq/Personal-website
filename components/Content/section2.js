import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';

// Project data with image paths
const projects = [
    { 
        href: "sparks/widget", 
        title: "A Dynamic Widget", 
        date: "Jun / 2024",
        image: "/dots.gif"
    },
    { 
        href: "sparks/button", 
        title: "Button", 
        date: "Jun / 2024",
        image: "/fffsfs.gif"
    },
    { 
        href: "sparks/scroll", 
        title: "Scrolling", 
        date: "Jun / 2024",
        image: 'https://video.twimg.com/ext_tw_video/1801041108274757632/pu/vid/avc1/480x480/qbJ7cC1MrzCqk444.mp4?tag=12',
        isVideo: true
    },
    { 
        href: "sparks/TheMartian", 
        title: "The Martian", 
        date: "Jul / 2024",
        image: "/martin.gif"
    },
    { 
        href: "sparks/onhover", 
        title: "On Hover", 
        date: "Jul / 2024",
        image: "/July 11 Screen Recording.gif"
    },
    { 
        href: "sparks/gameui", 
        title: "3D Smooth transitions", 
        date: "Jul / 2024",
        image: "/July 10 Screen Recording.mp4",
        isVideo: true
    },
    { 
        href: "sparks/line", 
        title: "Temporal Flow", 
        date: "Jul / 2024",
        image: "/line.gif"
    },
];

const Section2 = ({ MohamedSadiq, motionCtl, order }) => {
    const [hoveredProject, setHoveredProject] = useState(null);
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
                <h1 className="text-base leading-relaxed">An Engineering Snippets</h1>
            </div>
            <div className="main_projects relative">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="hover_project padding-0 relative z-10 mb-2"
                        onHoverStart={() => {
                            setHoveredProject(project);
                            setHoverPosition({ x: 0, y: 0 });
                        }}
                        onHoverEnd={() => setHoveredProject(null)}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoverPosition({
                                x: e.clientX - rect.left,
                                y: e.clientY - rect.top
                            });
                        }}
                    >
                        <Link className="sparkLinks block" href={project.href}>
                            <h1 className="flex gap-x-1.5 justify-center items-center text-base leading-relaxed">
                                <span className="text-[#000]">{project.title}</span>
                                <span className="h-px w-16 bg-stone-300 block"></span>
                                <span className="arrowspan text-zinc-500">{project.date}</span>
                            </h1>
                        </Link>
                    </motion.div>
                ))}
                
                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div 
                            className="fixed pointer-events-none z-50 w-64 h-48 bg-white shadow-lg rounded-lg overflow-hidden"
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
                                <video 
                                    src={hoveredProject.image} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
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
                <div className="relative inline-block">
                    <Link className="text-base mt-2 text-slate-950 hover:opacity-70 inline-flex items-center underline" href={"/sparks"}>
                        Explore All Sparks
                        <span>   {"->"}</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Section2;
