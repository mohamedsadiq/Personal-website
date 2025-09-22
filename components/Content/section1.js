import { motion } from "framer-motion";

const Section1 = ({ MohamedSadiq, motionCtl, order }) => {
  // Use centralized motion control if available, otherwise fallback to legacy props
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
        transition: { delay: 0.1 },
      };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
      {...motionProps}
    >
      <div id="name" className="p-0 flex h-auto w-full md:w-44 flex-none text-zinc-400">
        Moe Sadiq
      </div>
      <div className="home_text_front">
        <p>
        Hi, I’m Moe—a designer, engineer, and the creator of <a href="https://www.boimaginations.com/" target="_blank" rel="noopener noreferrer">BOI<svg className="inline  ml-1" width="14" height="14" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5163 13.8667C22.555 14.828 21.7964 15.9137 21.8305 16.279C21.8305 16.279 21.8305 16.279 21.8305 16.617C21.8305 21.4656 17.8866 25.4092 13.0403 25.4092C8.19272 25.4092 4.24919 21.4656 4.24919 16.617C4.24919 11.7717 8.19371 7.82919 13.0403 7.82919C13.4055 7.82919 13.4055 7.82919 13.4055 7.82919C13.7972 7.86922 14.9015 7.11796 15.8601 6.15962C16.8181 5.20127 16.2723 4.03982 14.6467 3.57867C14.6467 3.57867 14.6467 3.57867 13.0403 3.57867C5.84963 3.57867 -0.00132798 9.42764 -0.000335567 16.6174C-0.00132798 23.8091 5.84863 29.66 13.0403 29.66C20.2301 29.66 26.081 23.8087 26.0797 16.617C26.081 15.0355 26.081 15.0355 26.081 15.0355C25.6318 13.4314 24.4776 12.9054 23.5163 13.8667Z" fill="#909090"/>
              <path d="M29.6593 2.31564C29.6593 1.04204 28.6173 0 27.3437 0H17.7388C16.4652 0 16.1602 0.736703 17.0609 1.63716L19.3974 3.9733C20.2985 4.87375 20.2985 6.34716 19.3978 7.24761L14.879 11.7667C13.9785 12.6672 13.918 14.0804 14.7443 14.9067C15.571 15.7334 16.9842 15.6726 17.8847 14.7721L22.4031 10.2533C23.3039 9.35286 24.7766 9.35352 25.6764 10.2553L28.0232 12.6077C28.9226 13.5094 29.6583 13.2051 29.6583 11.9315L29.6593 2.31564Z" fill="#909090"/>
              </svg></a>.  I’m passionate about building products that feel like they were always meant to exist. Driven by curiosity for emerging technology, I strive to craft digital realities that not only work flawlessly but also move people on a deeper level.{" "}
         
          
          
          {/* <span className="web3">
            web3 & AI<span id="animation_web3"></span>
          </span> */}
        </p>
      </div>
    </motion.div>
  );
};

export default Section1;
