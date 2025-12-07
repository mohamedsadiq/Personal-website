import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
    phase: string;
    title: string;
    description: string;
    duration?: string;
    icon?: string;
}

interface DesignTimelineProps {
    items: TimelineItem[];
    title?: string;
    className?: string;
}

const DesignTimeline: FC<DesignTimelineProps> = ({
    items,
    title,
    className = ''
}) => {
    const defaultIcons = ['💡', '🎨', '⚡', '🚀', '📈'];

    return (
        <div className={`py-8 ${className}`}>
            {title && (
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    {title}
                </h3>
            )}

            <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-[22px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 dark:from-amber-600 dark:via-amber-500 dark:to-amber-600 opacity-40" />

                <div className="space-y-0">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.phase}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="relative flex gap-5 group"
                        >
                            {/* Icon circle */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg border-2 transition-all duration-300 group-hover:scale-110 ${index === 0
                                        ? 'bg-gradient-to-br from-amber-400 to-orange-400 border-amber-300 dark:border-amber-600 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30'
                                        : 'bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 group-hover:border-amber-300 dark:group-hover:border-amber-600'
                                    }`}>
                                    {item.icon || defaultIcons[index % defaultIcons.length]}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-8">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                        {item.phase}
                                    </span>
                                    {item.duration && (
                                        <span className="text-xs text-gray-400 dark:text-gray-500">
                                            {item.duration}
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesignTimeline;
