import Image, { type StaticImageData } from 'next/image'
import React, { FC, ReactNode, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { motion, LayoutGroup } from 'framer-motion'
import styles from '../../styles/Home.module.css'
import SEO from '../../components/SEO'
import { getProjectSchema, SITE_URL } from '../../lib/seo.config'
import ExternalLink from '../../components/ExternalLink'
import { AnimatedSection } from '../../components/AnimatedSection'

import BackButton from '../../components/backButton'
import ProjectOverview from '../../components/ProjectOverview'
import PageNavigation from '../../components/PageNavigation';
import PhotoViewerOverlay, { type PhotoPreview } from '../../components/PhotoViewerOverlay'
import VideoViewerOverlay, { type VideoPreview } from '../../components/VideoViewerOverlay'
import { CallToAction, EmblaImageSlider } from '../../components/blog'
// Removed unused HorizontalGallery

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  caption?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

type CaseStudySection = {
  id: string;
  label: string;
};

// Import images with blur placeholders
import LightupIntroImage from '../../public/lightup/linkimage.png';
import boxesIsideBoxes from "../../public/lightup/boxes.jpg"
import jayKadamImage from '../../public/lightup/GrKWWxqWkAA2zie.png'
import studentTestimonialA from '../../public/lightup/GqFpAIGXwAAabN0.png'
import studentTestimonialB from '../../public/lightup/Gq7LBA2XMAAApxq.png'
import teacherTestimonial from '../../public/lightup/GoRtowjWEAA3JP1.jpeg'
import peerlistProjectDay from '../../public/lightup/1748282477575.jpeg'
import lightupLogo from '../../public/lightup/logo.png'
import brandPalette from '../../public/lightup/ebe607a8-f6f8-47d2-a8f5-a80ac36606da_2880x2160.png'
import brandPosters from '../../public/lightup/d213566b-7ade-4640-92d5-a2273b2affc5_2880x2160.webp'
import eclipse1 from '../../public/eclipse/911c4764b296050715a26d2cf325afdf.jpg'
import eclipse2 from '../../public/eclipse/97410092a774ae24d5fa794ff3b99bc7.jpg'
import eclipse3 from '../../public/eclipse/993a2450f1d4368e5ec7d0fbf2d516b4.jpg'
import eclipse4 from '../../public/eclipse/f3deeb85a7d3708f5096f525c2d92c56.jpg'
import webDesign1 from '../../public/websiteDesign/GkDVoucXUAAVOp_.jpeg'
import webDesign2 from '../../public/websiteDesign/Gkxy6NCWUAEZyDY.jpeg'
import webDesign3 from '../../public/websiteDesign/Gp1gON-WcAAR8m9.jpeg'
import webDesign4 from '../../public/websiteDesign/Image Style Transformation Apr 25 2025.png'
import webDesign5 from '../../public/websiteDesign/Lightup _ AI-powered explanations and annotations for the web.jpeg'
import webDesign6 from '../../public/websiteDesign/unnamed.png'
import webDesign7 from '../../public/websiteDesign/unnamed (2).png'

// UI Settings Images
import setting1 from '../../public/ui setting/Screenshot 2025-12-06 at 3.17.29 AM.png'
import setting2 from '../../public/ui setting/Screenshot 2025-12-06 at 3.17.35 AM.png'
import setting3 from '../../public/ui setting/Screenshot 2025-12-06 at 3.17.40 AM.png'
import setting4 from '../../public/ui setting/Screenshot 2025-12-06 at 3.17.46 AM.png'
import setting5 from '../../public/ui setting/Screenshot 2025-12-06 at 3.17.48 AM.png'
import setting6 from '../../public/ui setting/Screenshot 2025-12-06 at 3.18.01 AM.png'
import setting7 from '../../public/ui setting/Screenshot 2025-12-06 at 3.18.19 AM.png'
import setting8 from '../../public/ui setting/Screenshot 2025-12-06 at 3.19.29 AM.png'
import setting9 from '../../public/ui setting/Screenshot 2025-12-06 at 3.19.36 AM.png'
import setting10 from '../../public/ui setting/Screenshot 2025-12-06 at 3.19.42 AM.png'
import setting11 from '../../public/ui setting/Screenshot 2025-12-06 at 3.19.49 AM.png'

// UI Popup Images
import popup1 from '../../public/ui lightup/Screenshot 2025-12-05 at 1.52.49 AM.png'
import popup2 from '../../public/ui lightup/Screenshot 2025-12-05 at 12.40.27 AM.png'
import popup3 from '../../public/ui lightup/Screenshot 2025-12-05 at 12.49.47 AM.png'
import popup4 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.21.53 AM.png'
import popup5 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.22.15 AM.png'
import popup6 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.22.23 AM.png'
import popup7 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.23.04 AM.png'
import popup8 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.23.13 AM.png'
import popup9 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.23.28 AM.png'
import popup10 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.23.52 AM.png'
import popup11 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.24.14 AM.png'
import popup12 from '../../public/ui lightup/Screenshot 2025-12-06 at 3.24.41 AM.png'

// Image map for resolving image keys from markdown to actual imports
const imageMap: Record<string, StaticImageData> = {
  LightupIntroImage,
  boxesIsideBoxes,
  jayKadamImage,
  studentTestimonialA,
  studentTestimonialB,
  teacherTestimonial,
  peerlistProjectDay,
  lightupLogo,
  brandPalette,
  brandPosters,
  eclipse1,
  eclipse2,
  eclipse3,
  eclipse4,
  webDesign1,
  webDesign2,
  webDesign3,
  webDesign4,
  webDesign5,
  webDesign6,
  webDesign7,
  // Settings
  setting1, setting2, setting3, setting4, setting5, setting6,
  setting7, setting8, setting9, setting10, setting11,
  // Popups
  popup1, popup2, popup3, popup4, popup5, popup6,
  popup7, popup8, popup9, popup10, popup11, popup12,
};

/**
 * Resolve media source - converts image keys to actual imports or returns path as-is
 */
const resolveMediaSrc = (src: string): StaticImageData | string => {
  // If it's a path (starts with /), return as-is
  if (src.startsWith('/')) {
    return src;
  }
  // Otherwise, look up in the image map
  return imageMap[src] || src;
};

const slugifyTitle = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

type ProjectPhotoPreview = PhotoPreview;

// Media marker components for MDX - these render nothing but carry props
const ImageMedia: FC<Omit<MediaItem, 'type'>> = () => null;
ImageMedia.displayName = 'ImageMedia';

const VideoMedia: FC<Omit<MediaItem, 'type'>> = () => null;
VideoMedia.displayName = 'VideoMedia';

// Helper to split media from body children
const extractSectionContent = (children: ReactNode) => {
  const media: MediaItem[] = [];
  const body: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const childType = child.type as FC & { displayName?: string };
      const props = child.props as Record<string, unknown>;
      if (childType.displayName === 'ImageMedia') {
        media.push({
          type: 'image',
          src: String(props.src || ''),
          alt: props.alt ? String(props.alt) : undefined,
          caption: props.caption ? String(props.caption) : undefined,
        });
        return;
      }
      if (childType.displayName === 'VideoMedia') {
        media.push({
          type: 'video',
          src: String(props.src || ''),
          alt: props.alt ? String(props.alt) : undefined,
          caption: props.caption ? String(props.caption) : undefined,
        });
        return;
      }
    }
    body.push(child);
  });

  return { media, body };
};

// Component for project image with caption
const ProjectImage: FC<{
  src: any;
  alt: string;
  caption?: string | null;
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
        caption: caption || undefined,
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

// Component for rendering a project section with title and children content
const ProjectSectionContent: FC<{
  title: string;
  children?: ReactNode;
  className?: string;
  media?: { type: 'image' | 'video'; src: any; alt?: string; caption?: string; autoPlay?: boolean; loop?: boolean; muted?: boolean }[];
  enableMediaPreview?: boolean;
  onPreview?: (photo: ProjectPhotoPreview) => void;
  useSlider?: boolean;
}> = ({ title, children, className = '', media = [], enableMediaPreview = false, onPreview, useSlider }) => {
  // Filter images and videos separately
  const imageMedia = media.filter(item => item.type === 'image');
  const videoMedia = media.filter(item => item.type === 'video');

  // Use slider when there are 2+ images OR when explicitly requested
  const shouldUseSlider = useSlider || imageMedia.length >= 2;

  const handleSliderImageClick = (item: { src: any; alt: string; caption?: string }, index: number) => {
    if (enableMediaPreview && onPreview) {
      const isImportedImage = item.src && typeof item.src === 'object' && 'src' in item.src;
      const aspectRatioValue = isImportedImage && item.src?.width && item.src?.height
        ? item.src.height / item.src.width
        : 9 / 16;

      onPreview({
        id: `${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${index}`,
        src: item.src,
        alt: item.alt,
        caption: item.caption,
        aspectRatio: aspectRatioValue,
      });
    }
  };

  // Tension subsections get slightly different styling
  const tensionSections = ['Present vs. Invisible', 'Powerful vs. Simple', 'Consistent vs. Adaptive'];
  const isTensionSection = tensionSections.includes(title);
  const isOpeningSection = title === 'The Space Between';
  
  return (
    <AnimatedSection delay={0} className={className}>
      <h2 className={
        isOpeningSection 
          ? 'mt-4 mb-2 text-slate-950 dark:text-white' 
          : isTensionSection 
            ? 'mt-8 mb-2 text-slate-900 dark:text-white' 
            : ' mb-2'
      }>{title}</h2>
      <div className="text-[#616161] dark:text-[#d5d5d5] leading-7 text-base prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </div>

      {/* Horizontal Slider for multiple images */}
      {shouldUseSlider && imageMedia.length > 0 && (
        <div className="mt-6">
          <EmblaImageSlider
            items={imageMedia.map(item => ({
              src: item.src,
              alt: item.alt || title,
              caption: item.caption || undefined
            }))}
            onImageClick={handleSliderImageClick}
          />
        </div>
      )}

      {/* Single image (no slider) */}
      {!shouldUseSlider && imageMedia.length === 1 && (
        <div className="mt-6">
          <div className="w-full rounded-2xl shadow-sm">
            <ProjectImage
              src={imageMedia[0].src}
              alt={imageMedia[0].alt || title}
              className="w-full h-auto"
              objectFit="contain"
              enablePreview={enableMediaPreview}
              onPreview={onPreview}
              previewId={`${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-0`}
              caption={imageMedia[0].caption}
            />
          </div>
        </div>
      )}

      {/* Videos */}
      {videoMedia.length > 0 && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          {videoMedia.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <ProjectVideo
                src={item.src}
                caption={item.caption}
                autoPlay={item.autoPlay}
                loop={item.loop}
                muted={item.muted}
              />
            </div>
          ))}
        </div>
      )}
    </AnimatedSection>
  );
};

const VideoTowersSection: FC<{
  title: string;
  children?: ReactNode;
  media: { type: 'image' | 'video'; src: any; alt?: string; caption?: string }[];
  onVideoClick: (video: { src: string; caption?: string }) => void;
}> = ({ title, children, media, onVideoClick }) => {
  const leftColumn = media.filter((_, index) => index % 2 === 0);
  const rightColumn = media.filter((_, index) => index % 2 === 1);

  return (
    <AnimatedSection delay={0} className="mt-10">
      <h2 className="mb-2">{title}</h2>
      {children && (
        <div className="text-[#616161] dark:text-[#d5d5d5] leading-7 text-base prose prose-neutral dark:prose-invert max-w-none mt-4 mb-8">
          {children}
        </div>
      )}

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
    <div className="relative flex items-center justify-center w-full py-20 overflow-hidden">
      <div className="w-full h-[1px] max-w-[300px] bg-gradient-to-r from-transparent via-gray-300 dark:via-neutral-800 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-gray-400/30 dark:via-white/20 to-transparent blur-sm" />
    </div>
  </AnimatedSection>
);

const CaseStudySidebar: FC<{
  sections: CaseStudySection[];
  activeSectionId: string;
  onNavigate: (id: string) => void;
  positionLeft?: number | null;
}> = ({ sections, activeSectionId, onNavigate, positionLeft }) => {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const container = listRef.current;
    if (!container || !activeSectionId) {
      return;
    }

    const activeButton = container.querySelector<HTMLButtonElement>(
      `[data-section-id="${activeSectionId}"]`
    );

    if (!activeButton) {
      return;
    }

    const containerHeight = container.clientHeight;
    const buttonOffset = activeButton.offsetTop;
    const buttonHeight = activeButton.offsetHeight;
    const targetScrollTop = Math.max(0, buttonOffset - (containerHeight / 2 - buttonHeight / 2));

    if (Math.abs(container.scrollTop - targetScrollTop) <= 4) {
      return;
    }

    container.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });
  }, [activeSectionId]);

  if (!sections.length || positionLeft == null) {
    return null;
  }

  return (
    <LayoutGroup id="case-study-sidebar">
      <nav
        className="fixed top-32 z-20 hidden lg:flex w-64 shrink-0 flex-col gap-4 text-sm text-neutral-400"
        aria-label="Case study index"
        style={{ left: Math.max(positionLeft, 24) }}
      >
        <p className="uppercase text-[0.65rem] tracking-[0.2em] text-neutral-500">
          Index
        </p>
        <ul
          ref={listRef}
          className="flex flex-col gap-0.5 overflow-y-auto pr-2 max-h-[calc(100vh-8rem)]"
        >
          {sections.map((section) => {
            const isActive = activeSectionId === section.id;
            return (
              <li key={section.id} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-black/80 dark:bg-white"
                    aria-hidden="true"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  data-section-id={section.id}
                  className={`w-full rounded-md py-1 pl-5 pr-2 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 dark:focus-visible:ring-white/70 ${isActive ? 'text-black font-medium dark:text-white' : 'text-neutral-400 hover:text-black dark:hover:text-white'}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </LayoutGroup>
  );
};

// Props interface for the LightUp component
interface LightUpProps {
  meta: {
    title: string;
    description: string;
    date: string;
    projectLink: string;
    tags: string[];
    heroImage: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

// Main LightUp component
const LightUp: FC<LightUpProps> = ({ meta, mdxSource }) => {

  const [activeVideo, setActiveVideo] = useState<{ src: string; caption?: string } | null>(null);
  const [activePhoto, setActivePhoto] = useState<ProjectPhotoPreview | null>(null);
  const [sidebarSections, setSidebarSections] = useState<CaseStudySection[]>([]);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [sidebarLeft, setSidebarLeft] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollAnimationFrame = useRef<number | null>(null);
  const sectionOffsets = useRef<Record<string, number>>({});

  const handleOpenVideo = useCallback((video: { src: string; caption?: string }) => setActiveVideo(video), []);
  const handleCloseVideo = useCallback(() => setActiveVideo(null), []);
  const handleOpenPhoto = useCallback((photo: ProjectPhotoPreview) => setActivePhoto(photo), []);
  const handleClosePhoto = useCallback(() => setActivePhoto(null), []);

  const registerSection = useCallback((section: CaseStudySection) => {
    setSidebarSections((prev) => {
      if (prev.some((item) => item.id === section.id)) {
        return prev;
      }
      return [...prev, section];
    });
  }, []);

  const handleSidebarNavigate = useCallback((sectionId: string) => {
    if (typeof document === 'undefined') {
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    if (scrollAnimationFrame.current) {
      cancelAnimationFrame(scrollAnimationFrame.current);
    }

    const rootElement = document.documentElement;
    const originalScrollBehavior = rootElement.style.scrollBehavior;
    rootElement.style.scrollBehavior = 'auto';

    setActiveSectionId(sectionId);

    const startY = window.scrollY;
    const offsetPadding = 96;
    const targetY = window.scrollY + target.getBoundingClientRect().top - offsetPadding;
    const duration = 450;
    const startTime = performance.now();

    isProgrammaticScroll.current = true;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const nextY = startY + (targetY - startY) * eased;
      window.scrollTo({ top: nextY });

      if (progress < 1) {
        scrollAnimationFrame.current = requestAnimationFrame(step);
        return;
      }

      scrollAnimationFrame.current = null;
      window.scrollTo({ top: targetY });

      requestAnimationFrame(() => {
        isProgrammaticScroll.current = false;
        rootElement.style.scrollBehavior = originalScrollBehavior;
      });
    };

    scrollAnimationFrame.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || sidebarSections.length === 0) {
      return;
    }

    const calculateOffsets = () => {
      const offsets: Record<string, number> = {};
      sidebarSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        offsets[section.id] = window.scrollY + rect.top;
      });
      sectionOffsets.current = offsets;
    };

    const handleScroll = () => {
      if (isProgrammaticScroll.current) {
        return;
      }

      const scrollAnchor = window.scrollY + window.innerHeight * 0.3;
      const offsets = sectionOffsets.current;
      const sectionIds = Object.keys(offsets);
      if (!sectionIds.length) {
        return;
      }

      const sortedIds = [...sectionIds].sort((a, b) => offsets[a] - offsets[b]);

      let detectedSectionId = sortedIds[0];
      for (let index = 0; index < sortedIds.length; index += 1) {
        const currentId = sortedIds[index];
        const nextId = sortedIds[index + 1];

        const currentElement = document.getElementById(currentId);
        if (!currentElement) {
          continue;
        }

        const currentTop = offsets[currentId];
        const currentHeight = currentElement.offsetHeight;
        const currentBottom = currentTop + currentHeight;

        const nextTop = nextId ? offsets[nextId] : Infinity;
        const effectiveBottom = Math.min(currentBottom, nextTop - 1);

        if (scrollAnchor >= currentTop && scrollAnchor <= effectiveBottom) {
          detectedSectionId = currentId;
          break;
        }

        if (scrollAnchor > effectiveBottom) {
          detectedSectionId = nextId ?? currentId;
        }
      }

      if (detectedSectionId && detectedSectionId !== activeSectionId) {
        setActiveSectionId(detectedSectionId);
      }
    };

    calculateOffsets();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateOffsets);

    const offsetsInterval = window.setInterval(() => {
      if (!Object.keys(sectionOffsets.current).length) {
        calculateOffsets();
      } else {
        window.clearInterval(offsetsInterval);
      }
    }, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffsets);
      window.clearInterval(offsetsInterval);
    };
  }, [sidebarSections, activeSectionId]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const updateSidebarPosition = () => {
      if (!contentRef.current) {
        return;
      }

      const rect = contentRef.current.getBoundingClientRect();
      const offset = 320;
      setSidebarLeft(rect.left - offset);
    };

    updateSidebarPosition();
    window.addEventListener('resize', updateSidebarPosition);
    return () => window.removeEventListener('resize', updateSidebarPosition);
  }, []);

  // MDX Section component - extracts media and renders content
  const Section = useMemo(() => {
    const SectionComponent: FC<{ title: string; gallery?: boolean; children?: ReactNode }> = ({ title, gallery, children }) => {
      const { media, body } = extractSectionContent(children);
      const sectionId = useMemo(() => slugifyTitle(title), [title]);

      useEffect(() => {
        registerSection({ id: sectionId, label: title });
      }, [registerSection, sectionId, title]);

      const resolvedMedia = media.map(m => ({
        ...m,
        src: resolveMediaSrc(m.src),
      }));

      if (gallery && resolvedMedia.length > 0) {
        return (
          <>
            <SectionDivider />
            <section id={sectionId} className="scroll-mt-32">
              <VideoTowersSection
                title={title}
                media={resolvedMedia}
                onVideoClick={handleOpenVideo}
              >
                {body}
              </VideoTowersSection>
            </section>
          </>
        );
      }

      const noDividerSections = [
        'The Space Between',
        'Present vs. Invisible',
        'Powerful vs. Simple',
        'Consistent vs. Adaptive',
        'Surface and Depth',
        'The Settings',
        'The Website',
      ];

      const showDivider = !noDividerSections.includes(title);

      return (
        <>
          {showDivider && <SectionDivider />}
          <section id={sectionId} className="scroll-mt-32">
            <ProjectSectionContent
              title={title}
              media={resolvedMedia}
              enableMediaPreview
              onPreview={handleOpenPhoto}
            >
              {body}
            </ProjectSectionContent>
          </section>
        </>
      );
    };

    SectionComponent.displayName = 'LightUpSection';
    return SectionComponent;
  }, [handleOpenPhoto, handleOpenVideo, registerSection]);

  const mdxComponents = useMemo(() => ({
    Section,
    ImageMedia,
    VideoMedia,
  }), [Section]);

  return (
    <LayoutGroup id="lightup-photo-viewer">
      <div className={styles.container}>
        <SEO
          title={meta.title}
          description={meta.description}
          path="/projects/lightup"
          ogImage={`${SITE_URL}/lightup/linkimage.png`}
          ogImageAlt="LightUp - AI-Powered Annotations"
          customSchema={getProjectSchema({
            name: meta.title,
            description: meta.description,
            url: `${SITE_URL}/projects/lightup`,
            image: `${SITE_URL}/lightup/linkimage.png`,
            datePublished: '2024-01-01',
          })}
        />
        <main>
          <div className="container">
            <AnimatedSection delay={0.05}>
              <BackButton href="/projects" />
            </AnimatedSection>
            <div className="inner_container_project_parent inner_container inner_container_mobile">
              {/* Header */}
              <AnimatedSection delay={0.1}>
                <div className="project_title">
                  <h1 className='text-black text-lg dark:text-white'>{meta.title}</h1>
                  <p className='text-base text-[#616161] dark:text-[#d5d5d5]'>{meta.description} <span className="dateProject"> {meta.date} </span></p>
                </div>
              </AnimatedSection>

              {/* Hero Image */}
              <div className="blog_photo inner_blog work_intro_image">
                <ProjectImage
                  src={LightupIntroImage}
                  alt={meta.title}
                  placeholder="blur"
                  blurDataURL={LightupIntroImage.blurDataURL}
                  className="max-w-full h-auto"
                  objectFit="contain"
                  delay={0.15}
                />
              </div>

              {/* Project Overview */}
              <AnimatedSection delay={0.2}>
                <h2 className='mt-6'>Project Overview</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.25}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 pt-4">
                  <ExternalLink
                    href={meta.projectLink}
                    className="text-[#000] underline decoration-dotted underline-offset-2 transition-colors duration-200 group-hover:decoration-current w-fit"
                  >
                    Visit Live
                  </ExternalLink>
                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((tag: string, index: number) => (
                      <span key={index} className="bg-[#f6f6f6] border border-[#f0f0f0] text-black text-sm px-3 py-1.5 rounded-xl whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ProjectOverview
                  background={{
                    type: 'video',
                    src: '/lightup/lightup.mp4',
                    placeholderSrc: '/lightup/lightupplaceholder.png',
                    className: 'w-full h-full object-cover'
                  }}
                  infoItems={[
                    { title: 'Platform', content: 'Chrome Extension' },
                    { title: 'Role', content: 'Solo Designer & Developer (0 → 1)' },
                    { title: 'Traction', content: '668 installs · 252 weekly active users · 37.7% retention' },
                    { title: 'Marketing', content: '$0 funding. $0 Marketing spend. 100% organic growth' },
                    { title: 'Timeline', content: 'December 2024 – Present' }
                  ]}
                  linksTitle="Links"
                />
              </AnimatedSection>

            </div>
          </div>

          {/* Main Content - Rendered from MDX */}
          <div className='container relative'>
            <CaseStudySidebar
              sections={sidebarSections}
              activeSectionId={activeSectionId}
              onNavigate={handleSidebarNavigate}
              positionLeft={sidebarLeft}
            />
            <div ref={contentRef} className="inner_container flex flex-col gap-10">
              <MDXRemote {...mdxSource} components={mdxComponents} />

              {/* Links Section */}
              <SectionDivider />
              <AnimatedSection delay={0.45}>
                <ProjectOverview
                  background={{
                    type: 'video',
                    src: '/lightup/lightup.mp4',
                    placeholderSrc: '/lightup/Screenshot 2025-11-16 at 8.46.05 PM.png',
                    className: 'w-full h-full object-cover'
                  }}
                  infoItems={[]}
                  links={[
                    { label: 'Chrome Store', url: 'https://chromewebstore.google.com/detail/lightup-ai-powered-web-an/pncapgeoeedlfppkohlbelelkkihikel' },
                    { label: 'GitHub Repository', url: 'https://github.com/mohamedsadiq/LightUp' },
                    { label: 'Peerlist', url: 'https://peerlist.io/sadiqo/project/lightup' },
                  ]}
                  linksTitle="Links"
                />
              </AnimatedSection>

            </div>
          </div>

          <AnimatedSection delay={0.5}>
            <div className="container mx-auto px-4 py-8">
              <PageNavigation type="project" />
            </div>
          </AnimatedSection>
        </main>
        <PhotoViewerOverlay photo={activePhoto} onClose={handleClosePhoto} />
        <VideoViewerOverlay video={activeVideo} onClose={handleCloseVideo} />

      </div >
    </LayoutGroup >
  )
}

export default LightUp

export async function getStaticProps() {
  // Read the MDX file
  const filePath = path.join(process.cwd(), 'project-posts', 'lightup.mdx');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and serialize MDX
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      meta: {
        title: data.title || 'LightUp',
        description: data.description || '',
        date: data.date || '',
        projectLink: data.projectLink || '',
        tags: data.tags || [],
        heroImage: data.heroImage || '',
      },
      mdxSource,
    },
  };
}