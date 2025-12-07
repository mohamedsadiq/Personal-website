import { FC, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface SlideItem {
    src: StaticImageData | string;
    alt: string;
    caption?: string;
}

interface HorizontalImageSliderProps {
    items: SlideItem[];
    onImageClick?: (item: SlideItem, index: number) => void;
    className?: string;
    fullWidth?: boolean;
    aspectRatio?: number; // Fixed aspect ratio for all images (height/width), e.g., 3/4 = 0.75
}

const HorizontalImageSlider: FC<HorizontalImageSliderProps> = ({
    items,
    onImageClick,
    className = '',
    fullWidth = true,
    aspectRatio = 3 / 4 // Default 4:3 landscape (0.75), use 1 for square, 4/3 for portrait
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

        // Calculate active index based on scroll position
        const slideWidth = el.querySelector('.slide-item')?.clientWidth || el.clientWidth * 0.7;
        const gap = 24; // 6 * 4 = 24px gap
        const newIndex = Math.round(el.scrollLeft / (slideWidth + gap));
        setActiveIndex(Math.min(Math.max(0, newIndex), items.length - 1));
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        checkScroll();
        el.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [items.length]);

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;

        const slideItem = el.querySelector('.slide-item');
        const slideWidth = slideItem?.clientWidth || el.clientWidth * 0.7;
        const gap = 24;
        const scrollAmount = direction === 'left' ? -(slideWidth + gap) : (slideWidth + gap);

        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const scrollToIndex = (index: number) => {
        const el = scrollRef.current;
        if (!el) return;

        const slideItem = el.querySelector('.slide-item');
        const slideWidth = slideItem?.clientWidth || el.clientWidth * 0.7;
        const gap = 24;
        el.scrollTo({ left: index * (slideWidth + gap), behavior: 'smooth' });
    };

    // Full width container styles - breaks out of parent container
    const fullWidthStyles = fullWidth ? {
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        paddingLeft: 'max(2rem, calc((100vw - 720px) / 2))',
        paddingRight: '2rem'
    } : {};

    return (
        <div className={`relative ${className}`}>
            {/* Full-width container */}
            <div
                className="relative group"
                style={fullWidthStyles}
            >
                {/* Gradient fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#111] to-transparent z-10"
                    style={{ left: fullWidth ? 'max(0rem, calc((100vw - 720px) / 2 - 2rem))' : 0 }}
                />
                <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#111] to-transparent z-10" />

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                        scrollSnapType: 'x mandatory'
                    }}
                    onMouseDown={() => setIsDragging(false)}
                    onMouseMove={() => setIsDragging(true)}
                >
                    {items.map((item, index) => {
                        const isImported = typeof item.src === 'object' && 'src' in item.src;
                        const imgData = isImported ? item.src as StaticImageData : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className="slide-item flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-[600px]"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <motion.button
                                    type="button"
                                    onClick={() => !isDragging && onImageClick?.(item, index)}
                                    className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 rounded-2xl block"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div
                                        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-900 shadow-lg hover:shadow-2xl transition-shadow duration-500"
                                        style={{ paddingBottom: `${aspectRatio * 100}%` }}
                                    >
                                        {/* Shimmer loading effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />

                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                                            sizes="(max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
                                            {...(imgData && imgData.blurDataURL ? {
                                                placeholder: 'blur' as const,
                                                blurDataURL: imgData.blurDataURL
                                            } : {})}
                                        />

                                        {/* Hover overlay with zoom icon */}
                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                                            <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center backdrop-blur-sm shadow-lg">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 dark:text-gray-200">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <path d="M21 21l-4.35-4.35" />
                                                    <path d="M11 8v6M8 11h6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {item.caption && (
                                        <motion.p
                                            className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-medium"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {item.caption}
                                        </motion.p>
                                    )}
                                </motion.button>
                            </motion.div>
                        );
                    })}

                    {/* End spacer for proper scroll ending */}
                    <div className="flex-shrink-0 w-4 md:w-8" />
                </div>

                {/* Navigation Arrows - Larger and more prominent */}
                <AnimatePresence>
                    {canScrollLeft && (
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onClick={() => scroll('left')}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-neutral-900 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-100 dark:border-neutral-700"
                            style={{ left: fullWidth ? 'max(1rem, calc((100vw - 720px) / 2))' : undefined }}
                            aria-label="Previous slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-700 dark:text-gray-200">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </motion.button>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {canScrollRight && (
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            onClick={() => scroll('right')}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-neutral-900 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-gray-100 dark:border-neutral-700"
                            aria-label="Next slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-700 dark:text-gray-200">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Progress Indicators - More elegant pill style */}
            <div className="flex justify-center items-center gap-2 mt-6">
                <span className="text-xs text-gray-400 dark:text-gray-500 mr-2 font-medium">
                    {activeIndex + 1} / {items.length}
                </span>
                <div className="flex gap-1.5">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-amber-500 w-8'
                                : 'bg-gray-200 dark:bg-neutral-700 w-1.5 hover:bg-gray-300 dark:hover:bg-neutral-600'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalImageSlider;
