import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import productOfTheWeek from "../../public/Optimized SVG.svg";
import Image from "next/image";
import peerlist from "../../public/staff-pick-light.png";
import productHunt5 from "../../public/Optimized SVG 1.svg";
import sasshub from "../../public/Saashub Logo.png";
import { useState } from "react";

// Project data with image and video paths
const projects = [
    {
        id: 'lightup',
        href: "/projects/lightup",
        title: "LightUp",
        description: "AI Chrome extension - Peerlist Staff Pick, Top 9 AI Annotation Tool on SassHub.",
        icons: [
            { src: peerlist, alt: "Peerlist", width: 30, height: 30 },
            { src: sasshub, alt: "SassHub", width: 25, height: 25 }
        ],
        video: {
            webm: "/bulitVidoes/lightup.mp4",
            mp4: "/bulitVidoes/lightup.mp4"
        },
        isVideo: true
    },
    {
        id: 'daosspot',
        href: "/projects/daosspot",
        title: "DAOs Spot",
        description: "A DAO discovery platform, Product Hunt #4 Product of the Week.",
        icons: [
            { src: productOfTheWeek, alt: "Product of the Week", width: 60, height: 20 },
            { src: "/newsletter icon/product-hunt-logo-orange-240.jpg", alt: "Product Hunt", width: 20, height: 20 }
        ],
        video: {
            webm: "/bulitVidoes/daosspot.mp4",
            mp4: "/bulitVidoes/daosspot.mp4"
        },
        isVideo: true
    },
    {
        id: 'developerdao',
        href: "/projects/developerdao",
        title: "DeveloperDAO Official Website",
        description: "Accelerating the education and impact of a new wave of web3 builders.",
        icons: [],
        image: "/img/developerdao/fasdfasd.jpeg",
        isVideo: false
    },
    {
        id: 'developerdaoFM',
        href: "/projects/web3boy",
        title: "DeveloperDAO FM",
        description: "A place to listni to music and increass awwearnce about the DAO",
        icons: [
            { src: productHunt5, alt: "Top 5 Product of the Day", width: 60, height: 20 },
            { src: "/newsletter icon/product-hunt-logo-orange-240.jpg", alt: "Product Hunt", width: 20, height: 20 }
        ],
        video: {
            webm: "/bulitVidoes/devfm.mp4",
            mp4: "/bulitVidoes/devfm.mp4"
        },
        isVideo: true
    }
];

const Section3 = ({ MohamedSadiq, motionCtl, order }) => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

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
            transition: { delay: 0.4 },
        };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
            {...motionProps}
        >
            <div className="text-zinc-400">
                <h1 className="dark:text-[#b2b2b2] text-sm leading-relaxed">Things I've built</h1>
            </div>
            <div className="main_projects [--underline-color:rgba(208,208,208,0.53)]">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="text-sm block hover_project padding-0 relative z-10 mb-7"
                    >
                        <div className="flex items-center justify-between w-full">
                            <Link
                                className="sparkLinks inline-flex items-center relative z-20 w-full"
                                onMouseEnter={(e) => {
                                    setHoveredProject(project);
                                    setHoveredId(project.id);
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoverPosition({
                                        x: e.clientX - rect.left,
                                        y: e.clientY - rect.top
                                    });
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
                                <div className="grid grid-cols-1 md:grid-cols-[1fr] gap-0 w-full">
                                    <div>
                                        <motion.h1
                                            className="dark:text-[#eee] text-[#000] text-sm leading-6 inline-flex items-center"
                                            animate={{
                                                filter: hoveredId && hoveredId !== project.id ? 'blur(2px)' : 'blur(0px)',
                                                textDecoration: hoveredId === project.id ? 'underline' : 'none',
                                                textDecorationStyle: 'dotted',
                                                textUnderlineOffset: '2px',
                                                textDecorationColor: hoveredId === project.id ? 'currentColor' : 'rgba(208, 208, 208, 0.53)'
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.title}
                                            {project.icons && project.icons.length > 0 && (
                                                <motion.span className="flex items-center gap-1 ml-2">
                                                    {project.icons.map((icon, i) => (
                                                        <span key={i} className="inline-block ml-1" style={{ width: `${icon.width}px`, height: `${icon.height}px` }}>
                                                            <Image
                                                                src={icon.src}
                                                                alt={icon.alt}
                                                                width={icon.width}
                                                                height={icon.height}
                                                                className={i === 1 ? 'rounded-full' : ''}
                                                            />
                                                        </span>
                                                    ))}
                                                </motion.span>
                                            )}
                                        </motion.h1>
                                    </div>
                                    <motion.p
                                        className="text-zinc-600 dark:text-[#9f9f9f] text-sm leading-6 m-0"
                                        animate={{
                                            filter: hoveredId && hoveredId !== project.id ? 'blur(2px)' : 'blur(0px)'
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {project.description}
                                    </motion.p>
                                </div>
                            </Link>
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
                                        key={`${hoveredProject.id}-video`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover absolute inset-0"
                                        onMouseEnter={e => e.target.play()}
                                        onMouseLeave={e => e.target.pause()}
                                    >
                                        <source src={hoveredProject.video.webm} type="video/webm" />
                                        <source src={hoveredProject.video.mp4} type="video/mp4" />
                                    </video>
                                </div>
                            ) : (
                                <div className="w-full h-full relative">
                                    <Image
                                        src={hoveredProject.image}
                                        alt={hoveredProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Section3;
