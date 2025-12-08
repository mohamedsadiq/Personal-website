import { FC, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export type VideoSlideItem = {
  src: string;
  alt: string;
  caption?: string;
};

interface EmblaVideoSliderProps {
  items: VideoSlideItem[];
  onVideoClick?: (item: VideoSlideItem, index: number) => void;
  className?: string;
  aspectRatio?: number;
}

const EmblaVideoSlider: FC<EmblaVideoSliderProps> = ({
  items,
  onVideoClick,
  className = '',
  aspectRatio = 9 / 16,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: true,
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleScrollPrev = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleScrollNext = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    emblaApi.scrollNext();
  }, [emblaApi]);

  const handleUpdateProgress = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    handleUpdateProgress();

    emblaApi.on('scroll', handleUpdateProgress);
    emblaApi.on('select', handleUpdateProgress);
    emblaApi.on('settle', handleUpdateProgress);
    emblaApi.on('reInit', handleUpdateProgress);

    return () => {
      emblaApi.off('scroll', handleUpdateProgress);
      emblaApi.off('select', handleUpdateProgress);
      emblaApi.off('settle', handleUpdateProgress);
      emblaApi.off('reInit', handleUpdateProgress);
    };
  }, [emblaApi, handleUpdateProgress]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {/* Carousel */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-3">
          {items.map((item, index) => (
            <div
              key={item.src + index.toString()}
              className="flex-shrink-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[44%]"
            >
              <button
                type="button"
                onClick={() => onVideoClick?.(item, index)}
                className="w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 rounded-lg block"
                aria-label={item.alt}
              >
                <div
                  className="relative w-full overflow-hidden rounded-lg bg-black/90"
                  style={{ paddingBottom: `${aspectRatio * 100}%` }}
                >
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0" />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black text-xs font-medium shadow-lg">
                      ▶
                    </span>
                  </div>
                </div>

                {item.caption && (
                  <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                    {item.caption}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Controls: Arrows + Progress */}
      <div className="mt-5 flex items-center gap-4">
        {/* Prev/Next arrows */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleScrollPrev}
            disabled={!canScrollPrev}
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
              canScrollPrev
                ? 'border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer'
                : 'border-neutral-100 dark:border-neutral-800 opacity-40 cursor-not-allowed'
            }`}
            aria-label="Previous video"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-600 dark:text-neutral-400"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleScrollNext}
            disabled={!canScrollNext}
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${
              canScrollNext
                ? 'border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer'
                : 'border-neutral-100 dark:border-neutral-800 opacity-40 cursor-not-allowed'
            }`}
            aria-label="Next video"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-600 dark:text-neutral-400"
            >
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

export default EmblaVideoSlider;
