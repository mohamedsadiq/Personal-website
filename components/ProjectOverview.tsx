import { FC, ReactNode } from 'react';
import ExternalLink from './ExternalLink';

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
  return (
    <div className={`relative rounded-[15px] overflow-hidden mb-8 ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {background.type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover ${background.className || ''}`}
          >
            <source src={background.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={background.src}
            alt={background.alt || 'Background'}
            className={`w-full h-full object-cover ${background.className || ''}`}
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
