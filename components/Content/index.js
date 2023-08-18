import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from 'react';

const MyComponent = () => {
    const [divTop, setDivTop] = useState('68vh'); // Default value for smaller heights
    
    const updateDivPosition = () => {
        const screenHeight = window.innerHeight;
        let newDivTop;

        if (screenHeight > 1200) {
            newDivTop = '68vh';
        } else if (screenHeight <= 795) {
            newDivTop = '73vh';
        } else {
            newDivTop = '68vh';
        }

        setDivTop(newDivTop);
    };

    useEffect(() => {
        updateDivPosition();
        window.addEventListener('resize', updateDivPosition);

        return () => {
            window.removeEventListener('resize', updateDivPosition);
        };
    }, []);

    return (
        <div className="content" style={{  top:divTop }}>
            <motion.div
                className="content_animete"
                animate={{ opacity: 1, top: 73 }}
                transition={{
                    duration: 0.5,
                    delay: 1,
                    ease: "easeOut"
                }}
            >
                <div id="name">Mohamed Sadiq</div>
                <div>
                    

<p> A product designer, Founder of <a target="_blank" href="https://www.daosspot.xyz/">DAOs Spot</a> Focusing on <span className="web3">
web3
<span id="animation_web3"></span>
</span>, Open source products <a href="https://twitter.com/developer_dao"  className="links" target="_blank" rel="noreferrer">@DeveloperDAO</a>, member of <a href="https://twitter.com/Anticollective_" className="links" target="_blank" rel="noreferrer">@Anti.</a> you can find me on  <a href="https://x.com/sadiq_moo">X.</a> </p>
<Link className="aboutme" href={"/about"}>About me</Link>

                </div>
                {/* ... */}
            </motion.div>
        </div>
    );
}

const Content = () => {
    return (
        <div>
            {/* ... */}
            <MyComponent />
        </div>
    );
}

export default Content;

