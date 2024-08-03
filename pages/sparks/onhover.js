import { useState } from "react";
import Head from "next/head";
import BackButton from "../../components/backButton";
import { motion } from "framer-motion";

const models = [
  { url: "/Spartan helmet44.glb", name: "Spartan Helmet", cameraPosition: [0, 0.1, 0.5], lightIntensity: 5 },
  { url: "/Crane Sword 3D model.glb", name: "Crane Sword", cameraPosition: [0, 1, 1], lightIntensity: 5 },
  { url: "/Samurai Oni Mask.glb", name: "Samurai Oni Mask", cameraPosition: [300, 1, 1], lightIntensity: 5 },
];

export default function OnHover() {
  const [modelIndex, setModelIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Head>
        <title>On Hover</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mosadiq.com" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="Product designer & Engineer." />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />  
      </Head>
        <div className="container inner_container_sparks_parent">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
          <h2 className="mt-10">On Hover</h2>
            <p>
            This demo showcases a series of dynamically animated buttons built with <span className="spark_tools">React</span> and <span className="spark_tools"> Framer Motion.</span>
            </p>
            <div className="exp" style={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="expButton">
                {models.map((model, index) => (
                  <motion.button
                  className="buttonOnHover"
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
        </div>
    
    
    </>
  );
}
