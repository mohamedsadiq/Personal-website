import { FC } from 'react';
import { motion } from 'framer-motion';

interface Lesson {
    number: string;
    title: string;
    insight: string;
    takeaway?: string;
}

interface LessonsLearnedProps {
    lessons: Lesson[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const LessonsLearned: FC<LessonsLearnedProps> = ({
    lessons,
    title = "What I Learned",
    subtitle,
    className = ''
}) => {
    return (
        <div className={`py-6 ${className}`}>
            <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-gray-600 dark:text-gray-400">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="space-y-6">
                {lessons.map((lesson, index) => (
                    <motion.div
                        key={lesson.number}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="group relative"
                    >
                        <div className="flex gap-5">
                            {/* Number badge */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center border border-amber-200/50 dark:border-amber-800/30 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                                        {lesson.number}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                                    {lesson.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                    {lesson.insight}
                                </p>
                                {lesson.takeaway && (
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/30">
                                        <span className="text-green-600 dark:text-green-400 text-xs">💡</span>
                                        <span className="text-sm text-green-700 dark:text-green-400 font-medium">
                                            {lesson.takeaway}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default LessonsLearned;
