import Link from 'next/link';
import { useRouter } from 'next/router';

const sparks = [
  { id: 'scroll', title: 'Scrolling', path: '/sparks/scroll' },
  { id: 'button', title: 'Button', path: '/sparks/button' },
  { id: 'onhover', title: 'On Hover', path: '/sparks/onhover' },
  { id: 'TheMartian', title: 'The Martian', path: '/sparks/TheMartian' },
  { id: 'gameui', title: '3D Interactive', path: '/sparks/gameui' },
  { id: 'line', title: 'Temporal Flow', path: '/sparks/line' },
  { id: 'widget', title: 'Widget', path: '/sparks/widget' },
];

interface SparksNavigationProps {
  currentPath: string;
}

const SparksNav: React.FC<SparksNavigationProps> = ({ currentPath }) => {
  const router = useRouter();
  // currentPath is now passed as a prop

  // Find current spark index
  const currentIndex = sparks.findIndex(spark => 
    currentPath.includes(spark.path)
  );

  const prevSpark = currentIndex > 0 ? sparks[currentIndex - 1] : null;
  const nextSpark = currentIndex < sparks.length - 1 ? sparks[currentIndex + 1] : null;

  return (
    <nav className="mt-6 sm:mt-8 md:mt-16 border-t border-gray-200 dark:border-[#2b2b2b] pt-4 sm:pt-6 md:pt-8 mb-10 sm:mb-12 md:mb-20 px-4 sm:px-0">
      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center text-[#1f1f1f] dark:text-[#f5f5f5]">
        {prevSpark && (
          <Link 
            href={`/sparks/${prevSpark.id}`} 
            className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white active:scale-95 transition-all duration-150 py-3 px-3 -mx-3 rounded-lg active:bg-gray-50 dark:active:bg-neutral-800 w-full md:w-auto md:px-0 md:mx-0 md:py-0 md:active:scale-100"
            aria-label={`Previous spark: ${prevSpark.title}`}
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs text-[#ababab] dark:text-gray-400 mb-0.5">Previous Spark</span>
              <span className="truncate text-sm sm:text-base text-[#646363] hover:text-[#000] dark:hover:text-[#fff]">{prevSpark.title}</span>
            </div>
          </Link>
        )}
        
        {nextSpark && (
          <Link 
            href={`/sparks/${nextSpark.id}`} 
            className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white active:scale-95 transition-all duration-150 py-3 px-3 -mx-3 rounded-lg active:bg-gray-50 dark:active:bg-neutral-800 w-full md:w-auto md:px-0 md:mx-0 md:py-0 md:active:scale-100 text-right md:ml-auto justify-end md:justify-start"
            aria-label={`Next spark: ${nextSpark.title}`}
          >
            <div className="flex flex-col items-end md:items-start">
              <span className="text-xs text-[#ababab] dark:text-gray-400 mb-0.5">Next Spark</span>
              <span className="truncate text-sm sm:text-base text-[#646363] hover:text-[#000] dark:hover:text-[#fff]">{nextSpark.title}</span>
            </div>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default SparksNav;
