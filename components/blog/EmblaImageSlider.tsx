import { FC, useCallback, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface SlideItem {
    src: StaticImageData | string;
    alt: string;
    caption?: string;
}

interface EmblaImageSliderProps {
    items: SlideItem[];
    onImageClick?: (item: SlideItem, index: number) => void;
    className?: string;
    aspectRatio?: number;
}

const EmblaImageSlider: FC<EmblaImageSliderProps> = ({
    items,
    onImageClick,
    className = '',
    aspectRatio = 3 / 4
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        dragFree: true,
    });

    const [scrollProgress, setScrollProgress] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const updateProgress = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress);
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        
        updateProgress();
        
        // Listen to all relevant events for accurate progress tracking
        emblaApi.on('scroll', updateProgress);
        emblaApi.on('select', updateProgress);
        emblaApi.on('settle', updateProgress);
        emblaApi.on('reInit', updateProgress);
        
        return () => {
            emblaApi.off('scroll', updateProgress);
            emblaApi.off('select', updateProgress);
            emblaApi.off('settle', updateProgress);
            emblaApi.off('reInit', updateProgress);
        };
    }, [emblaApi, updateProgress]);

    return (
        <div className={`${className}`}>
            {/* Carousel */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex gap-3">
                    {items.map((item, index) => {
                        const isImported = typeof item.src === 'object' && 'src' in item.src;
                        const imgData = isImported ? item.src as StaticImageData : null;

                        return (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[38%]"
                            >
                                <button
                                    type="button"
                                    onClick={() => onImageClick?.(item, index)}
                                    className="w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 rounded-lg block"
                                >
                                    <div
                                        className="relative w-full overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900"
                                        style={{ paddingBottom: `${aspectRatio * 100}%` }}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 38vw"
                                            {...(imgData && imgData.blurDataURL ? {
                                                placeholder: 'blur' as const,
                                                blurDataURL: imgData.blurDataURL
                                            } : {})}
                                        />
                                    </div>

                                    {item.caption && (
                                        <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                                            {item.caption}
                                        </p>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Controls: Arrows + Progress */}
            <div className="mt-5 flex items-center gap-4">
                {/* Prev/Next arrows */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
                            canScrollPrev 
                                ? 'border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer' 
                                : 'border-neutral-100 dark:border-neutral-800 opacity-40 cursor-not-allowed'
                        }`}
                        aria-label="Previous"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
                            canScrollNext 
                                ? 'border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer' 
                                : 'border-neutral-100 dark:border-neutral-800 opacity-40 cursor-not-allowed'
                        }`}
                        aria-label="Next"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Progress bar */}
                <div className="flex-1 h-[2px] bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-neutral-400 dark:bg-neutral-500 rounded-full"
                        style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmblaImageSlider;
