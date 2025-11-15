import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import AnimatedLink from "../ui/AnimatedLink";

const Section8 = ({ MohamedSadiq, motionCtl, order }) => {
  const [hoveredId, setHoveredId] = useState(null);
    
  const motionProps = motionCtl
    ? {
        variants: motionCtl.variants,
        initial: "hidden",
        animate: "visible",
        transition: motionCtl.getTransition(order),
      }
    : {
        initial: MohamedSadiq.initial,
        animate: MohamedSadiq.animate,
        transition: { delay: 0.8 },
      };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
      {...motionProps}
    >
      <div className="text-zinc-400">
        <h1 className="text-sm leading-6">Mentions</h1>
      </div>
      <div id="links_home">
        <ul>
          <motion.li 
            className="mb-2 relative"
            onHoverStart={() => setHoveredId('todayInDesign')}
            onHoverEnd={() => setHoveredId(null)}
          >
            <a 
              href="https://x.com/colderoshay/status/1824092686405820431" 
              className="text-black inline-flex items-center text-base leading-relaxed relative z-10"
            >
              <motion.img 
                src="/newsletter icon/today in design.png" 
                alt="Today in Design" 
                className="w-5 h-5 mr-2 object-cover rounded-full inline-block"
                animate={{
                  // filter: 'blur(0px)',
                  scale: hoveredId === 'todayInDesign' ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="underline decoration-dotted text-sm"
              >
                Today in Design
              </motion.span>
              <motion.span 
                className="text-xs text-zinc-400 ml-1"
              >
                - Newsletter
              </motion.span>
              <svg className="ml-1 inline-block" width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z" fill="#909090"/>
                <path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z" fill="#909090"/>
              </svg>
            </a>
            <AnimatePresence>
              {hoveredId === 'todayInDesign' && (
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li 
            className="mb-2 relative"
            onHoverStart={() => setHoveredId('productHunt')}
            onHoverEnd={() => setHoveredId(null)}
          >
            <a 
              href="https://www.producthunt.com/" 
              className="text-black inline-flex items-center text-base leading-relaxed relative z-10"
            >
              <motion.img 
                src="/newsletter icon/product-hunt-logo-orange-240.jpg" 
                alt="Product Hunt" 
                className="w-5 h-5 mr-2 object-cover rounded-full inline-block"
                animate={{
                  // filter: 'blur(0px)',
                  scale: hoveredId === 'productHunt' ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="text-sm underline decoration-dotted"
              >
                Product Hunt
              </motion.span>
              <motion.span 
                className="text-xs text-zinc-400 ml-1"
              >
                - Newsletter
              </motion.span>
              <svg className="ml-1 inline-block" width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z" fill="#a1a1aa"/>
                <path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z" fill="#a1a1aa"/>
              </svg>
            </a>
            <AnimatePresence>
              {hoveredId === 'productHunt' && (
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li 
            className="mb-2 relative"
            onHoverStart={() => setHoveredId('developerDao')}
            onHoverEnd={() => setHoveredId(null)}
          >
            <a 
              href="https://x.com/developer_dao" 
              className="text-black inline-flex items-center text-base leading-relaxed relative z-10"
            >
              <motion.img 
                src="/newsletter icon/developerdao.png" 
                alt="Developer DAO" 
                className="w-5 h-5 mr-2 object-cover rounded-full inline-block"
                animate={{
                  // filter: 'blur(0px)',
                  scale: hoveredId === 'developerDao' ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="text-sm underline decoration-dotted"
              >
                DeveloperDAO
              </motion.span>
              <motion.span 
                className="text-xs text-zinc-400 ml-1"
              >
                - Newsletter
              </motion.span>
              <svg className="ml-1 inline-block" width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z" fill="#a1a1aa"/>
                <path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z" fill="#a1a1aa"/>
              </svg>
            </a>
            <AnimatePresence>
              {hoveredId === 'developerDao' && (
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li 
            className="mb-2 relative"
            onHoverStart={() => setHoveredId('dss')}
            onHoverEnd={() => setHoveredId(null)}
          >
            <a 
              href="https://deadsimplesites.com/" 
              className="text-black inline-flex items-center text-base leading-relaxed relative z-10"
            >
              <motion.img 
                src="/newsletter icon/deadsimpewebsite.png" 
                alt="Dead Simple Sites" 
                className="w-5 h-5 mr-2 object-cover rounded-full inline-block"
                animate={{
                  // filter: 'blur(0px)',
                  scale: hoveredId === 'dss' ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="text-sm underline decoration-dotted"
                animate={{
                  // filter: hoveredId && hoveredId !== 'dss' ? 'blur(2px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.2 }}
              >
                DSS
              </motion.span>
              <motion.span 
                className="text-xs text-zinc-400 ml-1"
                animate={{
                  // filter: hoveredId && hoveredId !== 'dss' ? 'blur(2px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.2 }}
              >
                - Dead Simple Sites
              </motion.span>
              <svg className="ml-1 inline-block" width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z" fill="#a1a1aa"/>
                <path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z" fill="#a1a1aa"/>
              </svg>
            </a>
            <AnimatePresence>
              {hoveredId === 'dss' && (
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Section8;
