import { FC } from 'react';
import { motion } from 'framer-motion';

interface Decision {
    title: string;
    choice: string;
    rationale: string;
    impact?: string;
}

interface KeyDecisionsProps {
    decisions: Decision[];
    title?: string;
    className?: string;
}

const KeyDecisions: FC<KeyDecisionsProps> = ({
    decisions,
    title = "Key Decisions",
    className = ''
}) => {
    return (
        <div className={`py-6 ${className}`}>
            {title && (
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    {title}
                </h3>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {decisions.map((decision, index) => (
                    <motion.div
                        key={decision.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="group relative p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-neutral-800/80 dark:to-neutral-900/50 border border-gray-100 dark:border-neutral-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-neutral-900/50 hover:-translate-y-0.5"
                    >
                        {/* Decision indicator */}
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-500">
                                <path d="M12 2L14.09 8.26L20.98 9.27L16.25 13.97L17.27 20.85L12 18.13L6.73 20.85L7.75 13.97L3.02 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                    {decision.title}
                                </h4>
                                <div className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                    {decision.choice}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {decision.rationale}
                            </p>

                            {decision.impact && (
                                <div className="pt-2 border-t border-gray-200/60 dark:border-neutral-700/50">
                                    <span className="text-xs font-medium text-green-600 dark:text-green-400">
                                        ↗ {decision.impact}
                                    </span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default KeyDecisions;
