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
    router.push(path);
  };

  return (
    <footer className='flex-row gap-x-0 mt-20'>
      <nav className='flex justify-between mt-5'>
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
                  <span className="block text-sm text-gray-500">Previous</span>
                  { prevPage.title}
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
              whileHover={{opacity:0.5}}
            >
          
          
            

              {nextPage && (
                <>
                  <span className="block text-sm text-gray-500 text-right">Next</span>
                  { nextPage.title }
                </>
              )}
            </motion.p>
          </div>
        </motion.div>
      </nav>
      <style jsx>{`
        footer {
          border-top: 1px solid #d9d9d9;
          padding: 1rem;
        }
        nav a {
          text-decoration: none;
          color: #0070f3;
        }
      `}</style>
    </footer>
  );
};

export default SparksNav;
