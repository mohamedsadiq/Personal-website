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
    <nav className="mt-6 sm:mt-8 md:mt-16 border-t border-gray-200 pt-4 sm:pt-6 md:pt-8 mb-10 sm:mb-12 md:mb-20 px-4 sm:px-0">
      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
        {prevProject && (
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white active:scale-95 transition-all duration-150 py-3 px-3 -mx-3 rounded-lg active:bg-gray-50 dark:active:bg-neutral-800 w-full md:w-auto md:px-0 md:mx-0 md:py-0 md:active:scale-100"
            aria-label={`Previous project: ${prevProject.title}`}
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
              <span className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Previous Project</span>
              <span className="truncate text-sm sm:text-base font-medium">{prevProject.title}</span>
            </div>
          </Link>
        )}

        {nextProject && (
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white active:scale-95 transition-all duration-150 py-3 px-3 -mx-3 rounded-lg active:bg-gray-50 dark:active:bg-neutral-800 w-full md:w-auto md:px-0 md:mx-0 md:py-0 md:active:scale-100 text-right md:ml-auto justify-end md:justify-start"
            aria-label={`Next project: ${nextProject.title}`}
          >
            <div className="flex flex-col items-end md:items-start">
              <span className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">Next Project</span>
              <span className="truncate text-sm sm:text-base font-medium">{nextProject.title}</span>
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

export default ProjectNavigation;
