// components/Footer.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import pages from './data';

const SparksNav = ({ currentPath }) => {
  const currentPageIndex = pages.findIndex(page => page.path === currentPath);
  const prevPage = pages[currentPageIndex - 1];
  const nextPage = pages[currentPageIndex + 1];

  const linkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <footer className='flex-row gap-x-0 mt-20'>
      <nav className='flex justify-between mt-5'>
        {prevPage && (
          <Link href={prevPage.path}>
            <div className='flex justify-end flex-row'>
              <motion.p
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4 }}
                variants={linkVariants}
              >
                {"<- " + prevPage.title}
              </motion.p>
            </div>
          </Link>
        )}
        {nextPage && (
          <Link href={nextPage.path}>
            <div className='flex justify-start flex-row'>
              <motion.p
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4 }}
                variants={linkVariants}
              >
                {nextPage.title + " ->"}
              </motion.p>
            </div>
          </Link>
        )}
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
