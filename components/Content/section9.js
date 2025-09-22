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
            className="flex flex-col md:flex-row gap-x-32 gap-y-6 md:gap-y-0"
            {...motionProps}
        >
            <div className="mainContent flex h-auto w-full md:w-auto flex-none">
                <h1 className="mt-1 text-zinc-400">Thoughts</h1>
            </div>
            <div className="mainContent main_projects">
                {[
                    { href: "https://moosadiq.substack.com/p/does-this-feel-indispensable?r=8bhus&triedRedirect=true", title: "Does this feel indispensable?", date: "Jan 2025" },
                   
                   
                ].map((link, index) => (
                    <motion.div className="hover_project padding-0 " key={index} whileHover={hoverEffect}>
                        <Link className="sparkLinks mt-2" href={link.href} >
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
