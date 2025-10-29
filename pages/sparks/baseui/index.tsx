import {  useState }  from 'react';
import Head from "next/head";
import { motion, AnimatePresence, useAnimation, filterProps } from "framer-motion";
import BackButton from "../../../components/backButton";
import { Popover } from '@base-ui-components/react/popover';
import styles from "./index.module.scss";
import { Avatar } from '@base-ui-components/react/avatar';
import { useRouter } from 'next/router';
import Footer from '../../../components/sparksNav';

export default function BaseUI() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>BaseUI</title>
        <meta name="description" content="3D Model Showcase with Three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="container inner_container_sparks">
        <BackButton title={""} />
        <div className="inner_container inner_container_sparks">
          <h2 className="mt-10 mb-0 text-xl font-semibold inline text-black">Title</h2>
          <span className="text-xs text-stone-500"> - Jun 2024</span>
          <p>
            test
          </p>
          <div className="expBorder" >
          <div  className="exp" style={{ height: "500px", position: "relative", display: "flex",alignItems: "center",justifyContent: "center",width: "100%"}}>
            <ExamplePopover />
          </div>
          </div>
          <Footer currentPath={router.pathname} />
        </div>
      </div>
    </>
  );
}


export function ExamplePopover() {
  const [isHovered, setIsHovered] = useState(false)

  const imageHolder = {
    hovered: {
      y:  0,
      scale: 0.9,
      
    }
  };



  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.div 
      whileHover={imageHolder.hovered}
     >
        {/* Avatar 1 */}
        <motion.div    
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex:10
          }}
        >
          <Avatar.Root className={styles.Root}>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
              width="48"
              height="48"
              className={styles.Image}
              alt="User 1"
            />
            <Avatar.Fallback className={styles.Fallback}>
              LT
            </Avatar.Fallback>
          </Avatar.Root>
        </motion.div>
      </motion.div>
    </div>
    
  );
}
  
  
 