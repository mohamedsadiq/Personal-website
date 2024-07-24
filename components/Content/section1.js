import { motion } from "framer-motion";


const Section1 = () => {
    const MohamedSadiq = {
        initial: {
          opacity: 0,
          top: "20px",
          position:"relative"
        },
        animate:{
          opacity: 1,
          top: "0",
          position:"relative"
        }
      }
    
    return (
        <motion.div
        className="flex flex-col md:flex-row gap-x-6 gap-y-6 md:gap-y-0"
         initial={MohamedSadiq.initial}
         animate={MohamedSadiq.animate}
        >
        <div id="name" className="p-0 flex h-auto w-full md:w-44 flex-none ">Mohamed Sadiq
         <svg 
         className=" mr-0 w-3.5 ml-1 mt-0.5 opacity-75"
         style={{cursor:"pointer"}}
         width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_25_14)">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M10.878 11.6479L9.45338 11.7085C9.29356 11.7154 9.15444 11.6102 9.11675 11.4541C9.07958 11.2986 9.15604 11.1419 9.30152 11.0756L12.4417 9.64087C12.9286 9.41839 13.4665 9.8214 13.3895 10.3518C12.9875 13.1177 12.6971 14.7117 12.2936 17.4775L13.7182 17.417C13.878 17.4106 14.0171 17.5152 14.0548 17.6713C14.092 17.8269 14.0155 17.9835 13.87 18.0504L10.7298 19.4846C10.2429 19.7071 9.70506 19.3041 9.78206 18.7741C10.1835 16.0078 10.4744 14.4138 10.878 11.6479Z" fill="black" />
             <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0157 4.43945C14.0442 4.43945 14.8783 5.27308 14.8783 6.30157C14.8783 7.33007 14.0442 8.1637 13.0157 8.1637C11.9872 8.1637 11.1536 7.33007 11.1536 6.30157C11.1536 5.27308 11.9872 4.43945 13.0157 4.43945Z" fill="black" />
             <path d="M11.9931 0C18.6159 0 23.9857 5.3692 23.9857 11.9926C23.9857 18.6159 18.6159 23.9857 11.9931 23.9857C5.36973 23.9857 0 18.6159 0 11.9926C0 5.3692 5.36973 0 11.9931 0ZM11.9931 0.996106C5.91929 0.996106 0.996106 5.91929 0.996106 11.9926C0.996106 18.0658 5.91929 22.989 11.9931 22.989C18.0664 22.989 22.9896 18.0658 22.9896 11.9926C22.9896 5.91929 18.0664 0.996106 11.9931 0.996106Z" fill="black" />
           </g>
           <defs>
             <clipPath id="clip0_25_14">
               <rect width="24" height="24" fill="white" />
             </clipPath>
           </defs>
         </svg></div>
        <div className="home_text_front">
         <p>
           A Product Designer & Engineer, turning ideas into crafted products. Founder of{" "}
           <a href={"/projects/daosspot"} target="_blink">
             DAOs Spot
           </a>
           , Early OSS contributor at{" "}
           <a href="https://www.developerdao.com/" target="_blink">
             Developer DAO
           </a>
           , Creator of{" "}
           <a href="https://www.boimaginations.com/" target="_blink">
             BOI
           </a>
           , Focused on{" "}
           <span className="web3">
             web3.<span id="animation_web3"></span>
           </span>
         </p>
        </div>
        </motion.div>
        
    )
}

export default Section1


