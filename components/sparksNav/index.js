// components/Footer.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import pages from './data';

const SparksNav = ({ currentPath }) => {
  const router = useRouter();
  const controls = useAnimation();
  const currentPageIndex = pages.findIndex(page => page.path === currentPath);
  const prevPage = pages[currentPageIndex - 1];
  const nextPage = pages[currentPageIndex + 1];

  const linkVariants1 = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };
  const linkVariants2 = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  const handleNavigation = async (path) => {
    await controls.start('exit');
    // Extract the ID from the path to prevent duplication
    const pathParts = path.split('/');
    const sparkId = pathParts[pathParts.length - 1];
    router.push(`/sparks/${sparkId}`);
  };

  return (
    <footer className='flex flex-col gap-y-4 mt-20 border-t border-[#d9d9d9] dark:border-[#2b2b2b] pt-6'>
      <nav className='flex justify-between text-[#1f1f1f] dark:text-[#f5f5f5]'>
        <motion.div
          className='hover:cursor-pointer'
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0 }}
          variants={linkVariants1}
        >
          <div
            className='flex justify-end flex-row'
            onClick={() => prevPage && handleNavigation(prevPage.path)}
          >
            <motion.p
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0 }}
              variants={linkVariants1}
              whileHover={{opacity:0.5}}
            >
             

               
          
             {prevPage && (
                <>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Previous</span>
                  <span className="text-base font-medium text-[#1f1f1f] dark:text-[#e5e5e5]">{ prevPage.title}</span>
                </>
              )}
          
              
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className='hover:cursor-pointer'
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0 }}
          variants={linkVariants2}
        >
          <div
            className='flex justify-start flex-row'
            onClick={() => nextPage && handleNavigation(nextPage.path)}
          >
            <motion.p
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0 }}
              variants={linkVariants2}
              whileHover={{ opacity: 0.65 }}
              className="text-left"
            >
          
          
            

              {nextPage && (
                <>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 text-right">Next</span>
                  <span className="text-base font-medium text-[#1f1f1f] dark:text-[#e5e5e5] text-right">{ nextPage.title }</span>
                </>
              )}
            </motion.p>
          </div>
        </motion.div>
      </nav>
    </footer>
  );
};

export default SparksNav;
