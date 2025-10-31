import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/ProjectNavigation.module.css';

const projects = [
  { id: 'lightup', title: 'LightUp', path: '/projects/lightup' },
  { id: 'daosspot', title: 'DAOs Spot', path: '/projects/daosspot' },
  { id: 'developerdaofm', title: 'DeveloperDAO FM', path: '/projects/developerdaofm' },
  { id: 'developerdao', title: 'DeveloperDAO', path: '/projects/developerdao' },
  { id: 'web3boy', title: 'Certified Web3 Boy', path: '/projects/web3boy' },
];

const ProjectNavigation = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  // Find current project index
  const currentIndex = projects.findIndex(project => 
    currentPath.includes(project.path)
  );

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <nav className="mt-16 border-t border-gray-200 pt-8 mb-20">
      <div className="flex justify-between items-center">
        {prevProject ? (
          <Link 
            href={prevProject.path} 
            className="group flex items-center text-gray-600 hover:text-black transition-colors"
            aria-label={`Previous project: ${prevProject.title}`}
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
              <span className="text-xs text-gray-500">Previous Project</span>
              <span className="">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div></div> // Empty div to maintain flex spacing
        )}
        
        {nextProject && (
          <Link 
            href={nextProject.path} 
            className="group flex items-center text-gray-600 hover:text-black transition-colors text-right ml-auto"
            aria-label={`Next project: ${nextProject.title}`}
          >
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Next Project</span>
              <span className="">{nextProject.title}</span>
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

export default ProjectNavigation;
