import { motion } from "framer-motion";
import Link from "next/link";

const Section2 = ({ MohamedSadiq }) => {
    const hoverEffect = {

    };

    return (
        <motion.div
            className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
            initial={MohamedSadiq.initial}
            animate={MohamedSadiq.animate}
            transition={{ delay: 0.4 }}
        >
            <div className="mainContent flex h-auto w-full md:w-auto flex-none">
                <h1 className="mt-1 text-zinc-400">An Engineering Snippets</h1>
            </div>
            <div className="mainContent main_projects">
                {[
                    { href: "sparks/widget", title: "A Dynamic Widget", date: "Jun 2024" },
                    { href: "sparks/button", title: "Button", date: "Jun 2024" },
                    { href: "sparks/scroll", title: "Scrolling", date: "Jun 2024" },
                    { href: "sparks/TheMartian", title: "The Martian", date: "Jul 2024" },
                    { href: "sparks/onhover", title: "On Hover", date: "Jul 2024" },
                    { href: "sparks/gameui", title: "3D Smooth transitions", date: "Jul 2024" },
                    { href: "sparks/line", title: "Temporal Flow", date: "Jul 2024" },
                ].map((link, index) => (
                    <motion.div className="hover_project padding-0 " key={index} whileHover={hoverEffect}>
                        <Link className="sparkLinks mt-2" href={link.href} >
                            <h1 className="flex gap-x-1.5 justify-center items-center">
                                <span className="text-[#000]">{link.title}</span>
                                <span className="h-px w-16 bg-stone-300 block"></span>
                                <span className="arrowspan text-zinc-500">{link.date}</span>
                            </h1>
                        </Link>
                    </motion.div>
                ))}
                <div className="relative inline-block">
                    <Link className="mt-2 text-slate-950 hover:opacity-70 inline-flex items-center" href={"/sparks"}>
                        Check All of the Sparks
                        <span>   {"->"}</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Section2;
