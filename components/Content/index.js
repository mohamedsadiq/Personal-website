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
            <p> A product designer, Founder of <a target="_blank" href="https://www.daosspot.xyz/">DAOs Spot</a> Focusing on <span className="web3">
            web3
            <span id="animation_web3"></span>
            </span>, Open source products <a href="https://twitter.com/developer_dao"  className="links" target="_blank" rel="noreferrer">@DeveloperDAO</a>, member of <a href="https://twitter.com/Anticollective_" className="links" target="_blank" rel="noreferrer">@Anti.</a> you can find me on  <a href="https://twitter.com/sadiq_moo">Twitter.</a> </p>
            <a
                className="links"
                href="/cv.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
            >Resume</a>
        </div>
        {/* <div>
            <h1>Recent activity</h1>
            <div className="recent_activity">
                <div className="time">
                    <span>2023 May / 2</span>
                    <span>2023 May / 2</span>
                    <span>2023 May  / 2</span>
                </div>
                <div className="time_icon"></div>
                <div className="project_home">
                    <div className="">
                        <h2>DAOs Spot</h2>
                        <p>A product designer who can code, focusing on web3 Currently building lightweight Web3 experiences at DeveloperDAO and Bulidspace </p>
                    </div>
                    <div className="">
                        <h2>DAOs Spot</h2>
                        <p>A product designer who can code, focusing on web3 Currently building lightweight Web3 experiences at DeveloperDAO and Bulidspace </p>
                    </div>
                    <div className="">
                        <h2>DAOs Spot</h2>
                        <p>A product designer who can code, focusing on web3 Currently building lightweight Web3 experiences at DeveloperDAO and Bulidspace </p>
                    </div>
                </div>
            </div>
        </div> */}
        </motion.div>
    </div>
 
}

export default Content