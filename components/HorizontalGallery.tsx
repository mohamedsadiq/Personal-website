import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HorizontalGalleryProps {
  images: {
    src: any;
    alt: string;
    caption?: string;
  }[];
  className?: string;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ 
  images, 
  className = '' 
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
        <div className="flex space-x-6">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="flex-shrink-0 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] snap-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-xl overflow-hidden shadow-lg bg-gray-50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <p className="text-sm sm:text-base">{image.caption}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalGallery;
