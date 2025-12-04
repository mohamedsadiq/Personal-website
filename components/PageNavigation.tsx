import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, type Variants } from 'framer-motion';

// Navigation item type
interface NavItem {
    id: string;
    title: string;
    path: string;
}

// Projects data
const projects: NavItem[] = [
    { id: 'lightup', title: 'LightUp', path: '/projects/lightup' },
    { id: 'daosspot', title: 'DAOs Spot', path: '/projects/daosspot' },
    { id: 'developerdaofm', title: 'DeveloperDAO FM', path: '/projects/developerdaofm' },
    { id: 'developerdao', title: 'DeveloperDAO', path: '/projects/developerdao' },
    { id: 'web3boy', title: 'Certified Web3 Boy', path: '/projects/web3boy' },
];

// Sparks data
const sparks: NavItem[] = [
    { id: 'scroll', title: 'Scrolling', path: '/sparks/scroll' },
    { id: 'button', title: 'Button', path: '/sparks/button' },
    { id: 'onhover', title: 'On Hover', path: '/sparks/onhover' },
    { id: 'TheMartian', title: 'The Martian', path: '/sparks/TheMartian' },
    { id: 'gameui', title: '3D Interactive', path: '/sparks/gameui' },
    { id: 'line', title: 'Temporal Flow', path: '/sparks/line' },
    { id: 'widget', title: 'Widget', path: '/sparks/widget' },
];

// Navigation type configuration
type NavigationType = 'project' | 'spark';

interface NavigationConfig {
    items: NavItem[];
    basePath: string;
    prevLabel: string;
    nextLabel: string;
}

const navigationConfigs: Record<NavigationType, NavigationConfig> = {
    project: {
        items: projects,
        basePath: '/projects',
        prevLabel: 'Previous Project',
        nextLabel: 'Next Project',
    },
    spark: {
        items: sparks,
        basePath: '/sparks',
        prevLabel: 'Previous Spark',
        nextLabel: 'Next Spark',
    },
};

// Animation variants for the navigation links
const linkVariants: Variants = {
    initial: {
        opacity: 0.85,
        x: 0,
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
        },
    },

};

// Arrow animation variants
const arrowLeftVariants: Variants = {
    initial: { x: 0 },
    hover: {
        x: -4,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 20,
        },
    },
};

const arrowRightVariants: Variants = {
    initial: { x: 0 },
    hover: {
        x: 4,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 20,
        },
    },
};

// Label fade animation
const labelVariants: Variants = {
    initial: {
        opacity: 0.7,
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
};

// Component props
interface PageNavigationProps {
    type: NavigationType;
    currentPath?: string;
}

// Navigation Link Component with animations
interface NavLinkProps {
    href: string;
    label: string;
    title: string;
    direction: 'prev' | 'next';
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, title, direction }) => {
    const isPrev = direction === 'prev';

    return (
        <Link href={href} aria-label={`${label}: ${title}`} className="block">
            <motion.div
                className={`
          group flex items-center 
          py-3 px-4 -mx-3 rounded-xl
          cursor-pointer select-none
          w-full md:w-auto
          ${isPrev ? '' : 'md:ml-auto justify-end md:justify-start'}
        `}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={linkVariants}
            >
                {/* Previous Arrow */}
                {isPrev && (
                    <motion.div
                        className="flex-shrink-0 mr-3"
                        variants={arrowLeftVariants}
                    >
                        <svg
                            className="w-5 h-5 text-[#898989] dark:text-[#898989] group-hover:text-[#646363] dark:group-hover:text-[#898989] transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </motion.div>
                )}

                {/* Text Content */}
                <div className={`flex flex-col overflow-hidden ${isPrev ? '' : 'items-end md:items-start'}`}>
                    <motion.span
                        className="text-xs text-[#ababab] dark:text-[#5c5c5c] mb-0.5 font-medium tracking-wide uppercase"
                        variants={labelVariants}
                    >
                        {label}
                    </motion.span>
                    <span className="truncate text-sm sm:text-base font-medium text-[#646363] dark:text-[#8a8a8a] group-hover:text-[#1f1f1f] dark:group-hover:text-white transition-colors duration-150">
                        {title}
                    </span>
                </div>

                {/* Next Arrow */}
                {!isPrev && (
                    <motion.div
                        className="flex-shrink-0 ml-3"
                        variants={arrowRightVariants}
                    >
                        <svg
                            className="w-5 h-5 text-[#ababab] dark:text-[#898989] group-hover:text-[#646363]  dark:group-hover:text-[#898989] transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </motion.div>
                )}
            </motion.div>
        </Link>
    );
};

const PageNavigation: React.FC<PageNavigationProps> = ({ type, currentPath: customPath }) => {
    const router = useRouter();
    const currentPath = customPath || router.pathname;

    const config = navigationConfigs[type];
    const { items, basePath, prevLabel, nextLabel } = config;

    // Find current item index
    const currentIndex = items.findIndex(item => currentPath.includes(item.path));

    const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
    const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

    return (
        <motion.nav
            className="mt-6 sm:mt-8 md:mt-16 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
                {prevItem && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <NavLink
                            href={`${basePath}/${prevItem.id}`}
                            label={prevLabel}
                            title={prevItem.title}
                            direction="prev"
                        />
                    </motion.div>
                )}

                {nextItem && (
                    <motion.div
                        className="md:ml-auto"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <NavLink
                            href={`${basePath}/${nextItem.id}`}
                            label={nextLabel}
                            title={nextItem.title}
                            direction="next"
                        />
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default PageNavigation;

// Export types for external use
export type { NavigationType, NavItem, PageNavigationProps };

// Export data arrays for reuse elsewhere (e.g., listing pages)
export { projects, sparks };
