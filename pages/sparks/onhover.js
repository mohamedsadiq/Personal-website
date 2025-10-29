import { useState } from "react";
import Head from "next/head";
import BackButton from "../../components/backButton";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import Footer from '../../components/sparksNav';

const models = [
  { url: "/Spartan helmet44.glb", name: "Spartan Helmet", cameraPosition: [0, 0.1, 0.5], lightIntensity: 5 },
  { url: "/Crane Sword 3D model.glb", name: "Crane Sword", cameraPosition: [0, 1, 1], lightIntensity: 5 },
  { url: "/Samurai Oni Mask.glb", name: "Samurai Oni Mask", cameraPosition: [300, 1, 1], lightIntensity: 5 },
];

export default function OnHover() {
  const [modelIndex, setModelIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>On Hover - Interactive 3D Models Showcase</title>
        <meta name="description" content="Explore interactive 3D models with dynamic animations on hover. Built with React and Framer Motion." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft, 3D models, interactive design, Framer Motion, React" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mosadiq.com" />
        <meta name="twitter:title" content="On Hover - Interactive 3D Models Showcase" />
        <meta name="twitter:description" content="Explore interactive 3D models with dynamic animations on hover. Built with React and Framer Motion." />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />
        <meta property="og:title" content="On Hover - Interactive 3D Models Showcase" />
        <meta property="og:description" content="Explore interactive 3D models with dynamic animations on hover. Built with React and Framer Motion." />
        <meta property="og:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />
        <meta property="og:url" content="https://mosadiq.com/sparks/onhover" />
        <meta property="og:type" content="website" />
      </Head>
        <div className="container inner_container_sparks_parent">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
         
          <h2 className="text-base text-black">On Hover - Interactive 3D Models Showcase</h2>
         
            <p  className="mt-0 text-sm text-[#6f6f6f]">
            This demo showcases a series of dynamically animated buttons built with <span className="spark_tools">React</span> and <span className="spark_tools"> Framer Motion.</span>
            </p>
            <div className="expBorder" >
            <div className="exp" style={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="expButton">
                {models.map((model, index) => (
                  <motion.button
                  className="buttonOnHover text-black"
                    key={model.name}
                    onClick={() => setModelIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === modelIndex ? 1 : 0.6,
                      filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(4px)" : "blur(0px)"
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {model.name}
                  </motion.button>
                ))}
              </div>
            </div>
            </div>
            <Footer currentPath={router.pathname} />
          </div>
        </div>
    
    
    </>
  );
}
