import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PullQuoteProps {
    children: ReactNode;
    author?: string;
    className?: string;
    variant?: 'default' | 'highlight' | 'subtle';
}

const PullQuote: FC<PullQuoteProps> = ({
    children,
    author,
    className = '',
    variant = 'default'
}) => {
    const variants = {
        default: 'border-l-4 border-gray-200 dark:border-neutral-700 pl-6 py-2',
        highlight: 'border-l-4 border-amber-400 dark:border-amber-500 bg-gradient-to-r from-amber-50/50 to-transparent dark:from-amber-900/10 dark:to-transparent pl-6 py-4 pr-6 rounded-r-xl',
        subtle: 'bg-gray-50/80 dark:bg-neutral-800/30 rounded-2xl p-6 border border-gray-100 dark:border-neutral-700/50'
    };

    return (
        <motion.blockquote
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`my-8 ${variants[variant]} ${className}`}
        >
            <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed">
                "{children}"
            </p>
            {author && (
                <cite className="block mt-3 text-sm text-gray-500 dark:text-gray-400 not-italic">
                    — {author}
                </cite>
            )}
        </motion.blockquote>
    );
};

export default PullQuote;
