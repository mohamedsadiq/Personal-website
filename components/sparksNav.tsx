import Link from 'next/link';
import { useRouter } from 'next/router';

const sparks = [
  { id: 'scroll', title: 'Scrolling', path: '/sparks/scroll' },
  { id: 'button', title: 'Button', path: '/sparks/button' },
  { id: 'onhover', title: 'On Hover', path: '/sparks/onhover' },
  { id: 'the-martian', title: 'The Martian', path: '/sparks/TheMartian' },
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
    <nav className="mt-16 border-t border-gray-200 pt-8 mb-20">
      <div className="flex justify-between items-center">
        {prevSpark ? (
          <Link 
            href={`/sparks/${prevSpark.id}`} 
            className="group flex items-center text-gray-600 hover:text-black transition-colors"
            aria-label={`Previous spark: ${prevSpark.title}`}
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
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
            <div className="flex flex-col">
              <span className="text-xs text-[#ababab]">Previous Spark</span>
              <span className="text-[#737373] hover:text-black transition-colors">{prevSpark.title}</span>
            </div>
          </Link>
        ) : (
          <div></div> // Empty div to maintain flex spacing
        )}
        
        {nextSpark && (
          <Link 
            href={`/sparks/${nextSpark.id}`} 
            className="group flex items-center text-gray-600 hover:text-black transition-colors text-right ml-auto"
            aria-label={`Next spark: ${nextSpark.title}`}
          >
            <div className="flex flex-col">
              <span className="text-xs text-[#ababab]">Next Spark</span>
              <span className="text-[#737373] hover:text-black transition-colors">{nextSpark.title}</span>
            </div>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
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
