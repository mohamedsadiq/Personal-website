// components/Footer.js
import Link from 'next/link';
import pages from './data';

const SparksNav = ({ currentPath }) => {
  const currentPageIndex = pages.findIndex(page => page.path === currentPath);
  const prevPage = pages[currentPageIndex - 1];
  const nextPage = pages[currentPageIndex + 1];

  console.log(currentPath)
  return (
    <footer className='flex-row gap-x-0 mt-20'>
      <nav className='flex justify-between mt-5'>
        {prevPage && (
          <Link href={prevPage.path}>
            
            <p>{"<- " + prevPage.title}</p>
          </Link>
        )}
        {nextPage && (
          <Link href={nextPage.path}>
            <p>{nextPage.title + " ->"} </p>
          </Link>
        )}
      </nav>
      <style jsx>{`
        footer {
            border-top: 1px solid #d9d9d9;
        //   display: flex;
        //   justify-content: space-between;
          padding: 1rem;
        //   background-color: #f0f0f0;
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
