import { FC, ReactNode, useState, useRef, useEffect } from 'react';
import ExternalLink from './ExternalLink';
import Image from 'next/image';

type LinkItem = {
  label: string;
  url: string;
};

type InfoItem = {
  title: string;
  content: string | ReactNode;
  className?: string;
};

interface ProjectOverviewProps {
  background: {
    type: 'video' | 'image';
    src: string;
    alt?: string;
    className?: string;
  };
  infoItems: InfoItem[];
  links?: LinkItem[];
  linksTitle?: string;
  className?: string;
  contentClassName?: string;
}

const ProjectOverview: FC<ProjectOverviewProps> = ({
  background,
  infoItems,
  links = [],
  linksTitle = 'Links',
  className = '',
  contentClassName = '',
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasBlur, setHasBlur] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      // Small delay to ensure video is ready to play
      setTimeout(() => {
        setIsVideoLoaded(true);
        // Keep the blur for a moment longer for smoother transition
        setTimeout(() => setHasBlur(false), 200);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    
    // For browsers that may have already loaded the video
    if (video.readyState >= 3) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [background.src]);
  return (
    <div className={`relative rounded-[15px] overflow-hidden mb-8 ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {background.type === 'video' ? (
          <>
            {/* Blurred preview */}
            {hasBlur && (
              <div className="absolute inset-0 z-10 transition-opacity duration-500 ease-in-out">
                <Image
                  src={background.src.replace('.mp4', '.jpg')}
                  alt={background.alt || 'Video preview'}
                  fill
                  className={`object-cover ${background.className || ''} ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
                  style={{
                    filter: 'blur(20px)',
                    transform: 'scale(1.05)', // Prevents edge artifacts
                  }}
                  unoptimized={true} // For local development with dynamic paths
                />
              </div>
            )}
            
            {/* Video element */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                background.className || ''
              } ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transform: hasBlur ? 'scale(1.02)' : 'scale(1)', // Smooth scale transition
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
              }}
            >
              <source src={background.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <Image
            src={background.src}
            alt={background.alt || 'Background'}
            fill
            className={`object-cover ${background.className || ''}`}
            placeholder="blur"
            blurDataURL={background.src.replace(/\.(jpg|jpeg|png)$/, '-blur.jpg')}
          />
        )}
      </div>
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Content */}
      <div className={`relative z-10 py-[30px] px-[18px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-${Math.min(
        infoItems.length + (links.length > 0 ? 1 : 0),
        4
      )} gap-6 ${contentClassName}`}>
        {/* Info Items */}
        {infoItems.map((item, index) => (
          <div key={index} className={item.className}>
            <h3 className="text-sm font-medium text-white mb-2">{item.title}</h3>
            <div className="text-sm font-medium text-white !text-white mb-2">
              {item.content}
            </div>
          </div>
        ))}

        {/* Links */}
        {links.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-white mb-2">{linksTitle}</h3>
            <div className="flex flex-col space-y-2">
              {links.map((link, index) => (
                <ExternalLink 
                  key={index}
                  href={link.url}
                  className="text-white text-sm hover:text-white"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;
