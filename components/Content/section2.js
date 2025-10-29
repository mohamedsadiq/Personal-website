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
        image: "/line.gif"
    },
    { 
        href: "sparks/gameui", 
        title: "3D Smooth transitions",
        date: "Jul / 2024",
        image: "/July 10 Screen Recording.mp4",
        isVideo: true
    },
    { 
        href: "sparks/onhover", 
        title: "On Hover",
        date: "Jul / 2024",
        image: "/July 11 Screen Recording.gif"
    },
    { 
        href: "sparks/TheMartian", 
        title: "The Martian",
        date: "Jul / 2024",
        image: "/martin.gif"
    },
    { 
        href: "sparks/scroll", 
        title: "Scrolling",
        date: "Jun / 2024",
        image: 'https://video.twimg.com/ext_tw_video/1801041108274757632/pu/vid/avc1/480x480/qbJ7cC1MrzCqk444.mp4?tag=12',
        isVideo: true
    },
    { 
        href: "sparks/button", 
        title: "Button",
        date: "Jun / 2024",
        image: "/fffsfs.gif"
    },
    { 
        href: "sparks/widget", 
        title: "A Dynamic Widget",
        date: "Jun / 2024",
        image: "/dots.gif"
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
                <h1 className="text-sm leading-relaxed">Snippets</h1>
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
                                    setHoverPosition({ x: 0, y: 0 });
                                }}
                                onMouseLeave={() => setHoveredProject(null)}
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
                                <span 
                                    className="text-[#000]"
                                    style={{
                                        textDecoration: 'underline',
                                        textDecorationStyle: 'dotted',
                                        textDecorationColor: 'rgba(208, 208, 208, 0.53)',
                                        textUnderlineOffset: '2px',
                                        transition: 'text-decoration-color 0.18s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.textDecorationColor = 'currentColor'}
                                    onMouseLeave={(e) => e.currentTarget.style.textDecorationColor = 'rgba(208, 208, 208, 0.53)'}
                                >
                                    {project.title}
                                </span>
                            </Link>
                            <div className="flex items-center">
                                {/* <span className="w-px h-4 bg-zinc-300 mx-4"></span> */}
                                <span className="text-zinc-400 w-24 text-right text-xs">{project.date}</span>
                            </div>
                        </div>
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
                <motion.div className="relative inline-block mt-2">
                    <Link 
                        className="sparkLinks inline-flex items-center relative z-20"
                        href={"/sparks"}
                    >
                        <span className="text-sm">
                            <span 
                                className="text-[#000]"
                                style={{
                                    textDecoration: 'underline',
                                    textDecorationColor: 'rgba(208, 208, 208, 0.53)',
                                    textUnderlineOffset: '2px',
                                    transition: 'text-decoration-color 0.18s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.textDecorationColor = 'currentColor'}
                                onMouseLeave={(e) => e.currentTarget.style.textDecorationColor = 'rgba(208, 208, 208, 0.53)'}
                            >
                                Explore All Sparks
                            </span>
                            <span className="no-underline text-black mt-2"> →</span>
                        </span>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Section2;
