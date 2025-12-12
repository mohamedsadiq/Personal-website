import { motion } from "framer-motion";
import Link from "next/link";

const Section9 = ({ MohamedSadiq, motionCtl, order }) => {
    const hoverEffect = {

    };

    const motionProps = motionCtl
        ? {
            variants: motionCtl.variants,
            initial: "hidden",
            animate: "visible",
            transition: motionCtl.getTransition(order),
        }
        : {
            initial: MohamedSadiq.initial,
            animate: MohamedSadiq.animate,
            transition: { delay: 0.3 },
        };

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
            {...motionProps}
        >
            <div className="text-zinc-400">
                <h1 className="text-sm leading-relaxed text-zinc-500 dark:text-[#b2b2b2]">Thoughts</h1>
            </div>
            <div className="main_projects">
                {[
                    { href: "/blog/does-this-feel-indispensable", title: "Does this feel indispensable?", date: "Jan / 2025" },


                ].map((link, index) => (
                    <motion.div className="hover_project padding-0 " key={index} whileHover={hoverEffect}>
                        <Link
                            className="text-sm text-black dark:text-white inline-flex items-center group transition-colors duration-200"
                            href={link.href}
                        >
                            <span
                                className="dark:text-[#eee] underline decoration-dotted decoration-[rgba(208,208,208,0.53)] underline-offset-2 transition-all duration-200 group-hover:decoration-current group-hover:decoration-solid"
                            >
                                {link.title}
                            </span>
                            <span className="dark:text-[#9f9f9f] text-xs text-zinc-500 ml-4">{link.date}</span>
                        </Link>
                    </motion.div>
                ))}

            </div>
        </motion.div>
    );
};

export default Section9;

