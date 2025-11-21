import { motion } from "framer-motion";
import Image from "next/image";


const Section5 = ({ MohamedSadiq, motionCtl, order }) => {

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
      transition: { delay: 0.6 },
    };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-[176px_1fr] gap-6"
      {...motionProps}
    >
      <div className="text-zinc-400">
        <h1 className="text-sm leading-6">Latest Activity</h1>
      </div>
      <div >
        <div className="bg-[#f8f8f8] border border-[#eeeeee] hover_project latest_activity_project hover:bg-[#fff] hover:border-[#eee] hover:scale-[1.01] transition-all duration-10 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-800">
          <a href="https://x.com/j4ykadam/status/1924056811214356905" target="_blink">
            <Image
              src="/lightupper.jpeg"
              width={400}
              height={400}
            ></Image>

            <h1 className="h_m text-[#000] dark:text-white text-sm leading-relaxed mt-4"> Staff-picked projects of the day <svg className="inline  " width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z" className="fill-[#909090] dark:fill-gray-400" />
              <path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z" className="fill-[#909090] dark:fill-gray-400" />
            </svg></h1>
            <p className=" mt-2 text-[#6c6c6c] dark:text-gray-400 text-sm leading-relaxed">LightUp was featured on Peerlist’s list of the best Chrome extensions of 2025 and was selected as a Staff Pick: Project of the Day.</p>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Section5
