import { motion } from 'framer-motion';
import { useState } from 'react';

interface VideoThumbnailProps {
  src: string;
  title: string;
  description?: string;
  className?: string;
  aspect?: string;
  onClick?: () => void;
}

export const VideoThumbnail = ({
  src,
  title,
  description = 'Click to watch full screen',
  className = '',
  aspect = 'aspect-square',
  onClick
}: VideoThumbnailProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group cursor-pointer ${aspect} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <video
          src={src}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-4">
          <div className="flex-1"></div>
          <div className="w-full">
            <h3 className="text-white text-lg font-medium">{title}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
        <div 
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoThumbnail;
