import { motion } from "framer-motion"
const Content = () => {
   
    return  <div className="content">
         <motion.div
            className="content_animete"
            animate={{ opacity: 1, top:73 }}
            transition={{ 
            duration: 0.5,
            delay:1,
            ease:"easeOut"
            }}
          >
        <div id="name">Mohamed Sadiq</div>
        <div>
            <p>A product designer who can code, focusing on <span className="web3">
            web3
            <span id="animation_web3"></span>
            </span>, Open source products <a href="https://twitter.com/developer_dao"  className="links" target="_blank" rel="noreferrer">@DeveloperDAO</a>, member of <a href="https://twitter.com/_buildspace" target="_blank" rel="noreferrer">@Bulidspace</a> and <a href="https://twitter.com/Anticollective_" className="links" target="_blank" rel="noreferrer">@Anti</a></p>
            <a
                className="links"
                href="/cv.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
            >Resume</a>
        </div>
        </motion.div>
    </div>
 
}

export default Content