import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, type HTMLMotionProps } from "framer-motion";
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { getSharedMotionProps } from '../utils/motionConfig';

interface VideoSources {
  webm: string;
  mp4: string;
  preview: string;
}

interface SparkData {
  href: string;
  title: string;
  description: string;
  date: string;
  type: 'video' | 'image';
  src: string | VideoSources;
  mediaType?: string;
  blurSrc?: string;
  width?: number;
  height?: number;
}

const sparksData: SparkData[] = [
  {
    href: 'sparks/scroll',
    title: 'Scrolling',
    description: 'Widget Scrolling.',
    date: 'June - 2024',
    type: 'video',
    src: {
      webm: '/videos/scrolling.webm',
      mp4: '/videos/scrolling.mp4',
      preview: '/videos/scrolling-preview.png'
    },
    mediaType: 'video/mp4'
  },
  {
    href: 'sparks/button',
    title: 'Button',
    description: 'An interactive button.',
    date: 'June - 2024',
    type: 'video',
    src: {
      webm: '/videos/button.webm',
      mp4: '/videos/button.mp4',
      preview: '/videos/button-preview.png'
    },
    mediaType: 'video/mp4'
  },
];

const sparksData2: SparkData[] = [
  {
    href: 'sparks/onhover',
    title: 'On Hover',
    description: 'On hover interaction.',
    date: 'Jul - 2024',
    type: 'video',
    src: {
      webm: '/videos/on-hover.webm',
      mp4: '/videos/on-hover.mp4',
      preview: '/videos/on-hover-preview.png'
    },
    mediaType: 'video/mp4'
  },
  {
    href: 'sparks/TheMartian',
    title: 'The Martian',
    description: 'A character on Mars.',
    date: 'Jul - 2024',
    type: 'video',
    src: {
      webm: '/videos/the-martian.webm',
      mp4: '/videos/the-martian.mp4',
      preview: '/videos/the-martian-preview.png'
    },
    mediaType: 'video/mp4'
  },
  {
    href: 'sparks/gameui',
    title: '3D interactive',
    description: 'Smooth transitions.',
    date: 'Jul - 2024',
    type: 'video',
    src: {
      webm: '/videos/3d-transitions.webm',
      mp4: '/videos/3d-transitions.mp4',
      preview: '/videos/3d-transitions-preview.png'
    },
    mediaType: 'video/mp4'
  },
];

const sparksData3: SparkData[] = [
  {
    href: 'sparks/line',
    title: 'Temporal Flow',
    description: 'Enhancing the ux of a timeline',
    date: 'Jul - 2024',
    type: 'video',
    src: {
      webm: '/videos/temporal-flow.webm',
      mp4: '/videos/temporal-flow.mp4',
      preview: '/videos/temporal-flow-preview.png'
    },
    mediaType: 'video/mp4'
  },
  {
    href: 'sparks/widget',
    title: 'Widget',
    description: 'An interactive widget.',
    date: 'June - 2024',
    type: 'video',
    src: {
      webm: '/videos/dots.webm',
      mp4: '/videos/dots.mp4',
      preview: '/videos/dots-preview.png'
    },
    mediaType: 'video/mp4'
  },
];

const Sparks: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const headingMotionProps = getSharedMotionProps(0) as HTMLMotionProps<'h1'>;
  const subheadingMotionProps = getSharedMotionProps(1) as HTMLMotionProps<'p'>;
  return (
    <>
      <SEO
        title="Sparks"
        description="Engineering snippets and interactive experiments. Explore creative UI components, animations, and micro-interactions built with React and modern web technologies."
        path="/sparks"
      />

      <div className="container_sparks_home contentsSpark">
        <div className="inner_container inner_container_spark">
          <motion.h1 {...headingMotionProps}>Sparks</motion.h1>
          <motion.p {...subheadingMotionProps}>An engineering snippets</motion.p>

          <div className='mItv1 mItv2'>
            <div className='ripi6'>
              {sparksData.map((spark, index) => (
                <motion.div
                  key={spark.href}
                  {...(getSharedMotionProps(index) as HTMLMotionProps<'div'>)}
                >
                  <SparkItem
                    {...spark}
                    isHovered={hoveredId === spark.href}
                    onHover={(isHovered) => setHoveredId(isHovered ? spark.href : null)}
                    hoveredId={hoveredId}
                  />
                </motion.div>
              ))}
            </div>
            <div className='ripi6'>
              {sparksData2.map((spark, index) => (
                <motion.div
                  key={spark.href}
                  {...(getSharedMotionProps(index + sparksData.length) as HTMLMotionProps<'div'>)}
                >
                  <SparkItem
                    {...spark}
                    isHovered={hoveredId === spark.href}
                    onHover={(isHovered) => setHoveredId(isHovered ? spark.href : null)}
                    hoveredId={hoveredId}
                  />
                </motion.div>
              ))}
            </div>
            <div className='ripi6'>
              {sparksData3.map((spark, index) => (
                <motion.div
                  key={spark.href}
                  {...(getSharedMotionProps(index + sparksData.length + sparksData2.length) as HTMLMotionProps<'div'>)}
                >
                  <SparkItem
                    {...spark}
                    isHovered={hoveredId === spark.href}
                    onHover={(isHovered) => setHoveredId(isHovered ? spark.href : null)}
                    hoveredId={hoveredId}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface SparkItemProps extends SparkData {
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
  hoveredId: string | null;
}

const SparkItem: React.FC<SparkItemProps> = ({
  href,
  title,
  description,
  date,
  type,
  src,
  mediaType,
  blurSrc,
  width,
  height,
  isHovered,
  onHover,
  hoveredId
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  // Remove the key prop from the motion.div since we're using it in the parent

  useEffect(() => {
    // Force video reload when src changes
    setVideoKey(prevKey => prevKey + 1);
  }, [src]);

  return (
    <Link
      href={href}
      passHref
      className={`block transition-opacity duration-300 ${isHovered ? 'opacity-100' : (hoveredId ? 'opacity-20' : 'opacity-100')
        }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="spark_block space-y-3 flex flex-col">
        <div className={`flex-1 ${isLoaded ? 'loaded' : 'loading'}`}>
          {type === 'video' ? (
            <div className="relative w-full border border-[#f9f9f9] rounded-[24px] dark:border-[#2b2b2b] dark:bg-[#111111]">
              <video
                key={videoKey}
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
                onLoadedData={() => setIsLoaded(true)}
                poster={typeof src === 'object' ? src.preview : undefined}
              >
                {typeof src === 'object' ? (
                  <>
                    <source src={src.webm} type="video/webm" />
                    <source src={src.mp4} type="video/mp4" />
                  </>
                ) : (
                  <source src={src.startsWith('http') ? src : `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`} type={mediaType} />
                )}
                Your browser does not support the video tag.
              </video>
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-[#0f0f0f] rounded-lg">
                  <div className="animate-pulse w-full h-full bg-gray-200 dark:bg-[#1c1c1c] rounded-lg"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <Image
                alt={title}
                src={typeof src === 'string' ? src : src.preview}
                width={800}
                height={600}
                placeholder={blurSrc && blurSrc !== '/' ? 'blur' : 'empty'}
                blurDataURL={blurSrc && blurSrc !== '/' ? blurSrc : undefined}
                className='w-full h-auto rounded-lg'
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          )}
          <AnimatePresence>
            {!isLoaded && (
              <motion.div
                className="absolute inset-0 bg-gray-100 dark:bg-[#0f0f0f] rounded-lg"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-[#1c1c1c] rounded-lg"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* <div className="spark_info">
          <div className='flex justify-between '>
            <div className="spark_title inline text-sm">{title}</div>
            <span className="text-stone-500  float-none text-[0.5rem] self-center p-px bg-stone-100 pl-1.5 pr-1.5 rounded-full">{date}</span>
          </div>
          <div className="spark_dec mt-2.5">{description}</div>
        </div> */}
        <button className='bg-[#f6f6f6] text-[#757575] w-full rounded-3xl mb-0  border border-stone-200/20 p-2 text-sm m-0   transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:bg-[#171717]'>Discover</button>
      </div>
    </Link>
  );
};

export default Sparks;