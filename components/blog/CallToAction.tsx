import { FC } from 'react';
import { motion } from 'framer-motion';
import ExternalLink from '../ExternalLink';

interface CTALink {
    label: string;
    href: string;
    primary?: boolean;
    icon?: 'chrome' | 'github' | 'arrow';
}

interface CallToActionProps {
    title: string;
    description?: string;
    links: CTALink[];
    className?: string;
    variant?: 'default' | 'gradient' | 'minimal';
}

const icons = {
    chrome: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.931 5.47zm13.489 1.166l3.953 6.848A5.42 5.42 0 0 1 18 12a5.454 5.454 0 0 1-5.5 5.455H7.364l-4.432 7.68A12 12 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.106-1.18-5.937-3.116-8.06l-5.464-.304z" />
        </svg>
    ),
    github: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    arrow: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    )
};

const CallToAction: FC<CallToActionProps> = ({
    title,
    description,
    links,
    className = '',
    variant = 'default'
}) => {
    const variants = {
        default: 'bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700/50',
        gradient: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-yellow-900/10 border border-amber-200/40 dark:border-amber-800/30',
        minimal: 'border-t border-b border-gray-200 dark:border-neutral-700'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-8 md:p-10 text-center ${variants[variant]} ${className}`}
        >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
            </h3>

            {description && (
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    {description}
                </p>
            )}

            <div className="flex flex-wrap justify-center gap-3">
                {links.map((link, index) => (
                    <ExternalLink
                        key={link.label}
                        href={link.href}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${link.primary
                                ? 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-lg shadow-gray-900/10 hover:shadow-xl hover:-translate-y-0.5'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700 dark:hover:border-neutral-600 dark:hover:bg-neutral-700'
                            }`}
                    >
                        {link.icon && icons[link.icon]}
                        {link.label}
                    </ExternalLink>
                ))}
            </div>
        </motion.div>
    );
};

export default CallToAction;
