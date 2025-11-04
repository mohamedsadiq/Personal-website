import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { VideoThumbnail } from './VideoThumbnail';

interface VideoItem {
  id: string;
  src: string;
  title: string;
  description: string;
}

interface ScatteredVideoGalleryProps {
  videos: VideoItem[];
  onVideoSelect: (src: string) => void;
}

export const ScatteredVideoGallery: React.FC<ScatteredVideoGalleryProps> = ({ videos, onVideoSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  
  // Initial positions (percentages) - adjust these to create your desired layout
  const seedPercentPositions = [
    { x: 5, y: 5 },   { x: 35, y: 10 },  { x: 65, y: 5 },
    { x: 15, y: 35 }, { x: 50, y: 30 }, { x: 80, y: 35 },
    { x: 5, y: 65 }, { x: 35, y: 60 }, { x: 65, y: 65 },
    { x: 15, y: 85 }, { x: 80, y: 85 }
  ];

  const [positions, setPositions] = useState(() => 
    seedPercentPositions.map(() => ({ x: 0, y: 0 }))
  );

  // Type for the drag reference
  interface DragState {
    idx: number | null;
    offsetX: number;
    offsetY: number;
  }

  const dragRef = useRef<DragState>({ 
    idx: null, 
    offsetX: 0, 
    offsetY: 0 
  });

  // Measure container
  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    }
    
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Set initial px positions when size is known
  useEffect(() => {
    if (size.w === 0) return;
    setPositions(
      seedPercentPositions.map(p => ({
        x: Math.round((p.x / 100) * size.w),
        y: Math.round((p.y / 100) * size.h)
      }))
    );
  }, [size.w, size.h]);

  const onPointerDown = (e: React.PointerEvent, idx: number) => {
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    const rect = el.getBoundingClientRect();
    dragRef.current = {
      idx,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    };
    el.classList.add('cursor-grabbing');
  };

  const onPointerMove = (e: PointerEvent) => {
    const { idx, offsetX, offsetY } = dragRef.current;
    if (idx === null || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    let newX = e.clientX - containerRect.left - offsetX;
    let newY = e.clientY - containerRect.top - offsetY;
    
    // Clamp values to keep items within container
    const itemW = 240; // Approximate item width
    const itemH = 180; // Approximate item height
    
    newX = Math.max(0, Math.min(newX, containerRect.width - itemW));
    newY = Math.max(0, Math.min(newY, containerRect.height - itemH));
    
    setPositions(prev => {
      const copy = [...prev];
      copy[idx] = { x: newX, y: newY };
      return copy;
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.releasePointerCapture(e.pointerId);
    el.classList.remove('cursor-grabbing');
    dragRef.current = { idx: null, offsetX: 0, offsetY: 0 };
  };

  // Calculate dynamic height based on number of videos for mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full ${isMobile ? 'h-auto min-h-[1200px] pb-20' : 'h-[800px] md:h-[1000px]'} overflow-x-hidden overflow-y-auto md:overflow-hidden bg-white`}
    >
      {videos.map((video, i) => {
        // For mobile, stack videos vertically with some spacing
        const pos = isMobile 
          ? { x: 10, y: i * 220 } // Stacked vertically with 20px gap (200px height + 20px gap)
          : positions[i] || { x: 20 + i * 40, y: 20 + (i % 3) * 40 };
          
        const [isDragging, setIsDragging] = useState(false);
        
        return (
          <motion.div
            key={video.id}
            className={`${isMobile ? 'relative' : 'absolute'} touch-none select-none transition-all duration-200 hover:z-10 mx-auto`}
            style={{
              left: isMobile ? 'auto' : `${pos.x}px`,
              top: isMobile ? 'auto' : `${pos.y}px`,
              width: isMobile ? 'calc(100% - 2rem)' : '240px',
              height: isMobile ? '200px' : '180px',
              margin: isMobile ? '1rem' : '0',
            }}
            onPointerDown={(e) => {
              // Only start dragging if clicking on the video container, not the play button
              if (e.target === e.currentTarget) {
                onPointerDown(e, i);
                setIsDragging(false);
              }
            }}
            onPointerMove={(e) => {
              if (dragRef.current.idx === i) {
                setIsDragging(true);
                onPointerMove(e as unknown as PointerEvent);
              }
            }}
            onPointerUp={(e) => {
              onPointerUp(e);
              // Only trigger click if not dragging
              if (!isDragging) {
                onVideoSelect(video.src);
              }
              setIsDragging(false);
            }}
            onPointerLeave={() => {
              if (dragRef.current.idx === i) {
                setIsDragging(false);
                dragRef.current = { idx: null, offsetX: 0, offsetY: 0 };
              }
            }}
            role="button"
            tabIndex={0}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div 
              className="w-full h-full"
              onClick={(e) => {
                // Prevent click if dragging
                if (!isDragging) {
                  onVideoSelect(video.src);
                }
                e.stopPropagation();
              }}
            >
              <VideoThumbnail
                src={video.src}
                title={video.title}
                description={video.description}
                aspect={isMobile ? 'aspect-video' : 'aspect-video'}
                className="w-full h-full rounded-lg shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
