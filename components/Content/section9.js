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
                <h1>Thoughts</h1>
            </div>
            <div className="main_projects">
                {[
                    { href: "/blog/does-this-feel-indispensable", title: "Does this feel indispensable?", date: "Jan 2025" },
                   
                   
                ].map((link, index) => (
                    <motion.div className="hover_project padding-0 " key={index} whileHover={hoverEffect}>
                        <Link className="sparkLinks" href={link.href} >
                            <h1 className="flex gap-x-1.5 justify-center items-center">
                                <span className="text-[#000]">{link.title}</span>
                                {/* <span className="h-px w-16 bg-stone-300 block"></span> */}
                                <span className="arrowspan text-zinc-500">{link.date}</span>
                            </h1>
                        </Link>
                    </motion.div>
                ))}
              
            </div>
        </motion.div>
    );
};

export default Section9;

