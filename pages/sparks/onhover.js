import { useState } from "react";
import SEO from "../../components/SEO";
import BackButton from "../../components/backButton";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import PageNavigation from '../../components/PageNavigation';
import { AnimatedSection } from "../../components/AnimatedSection";
import SparkContainer from "../../components/SparkContainer";

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
      <SEO
        title="On Hover - Interactive 3D Models"
        description="Explore interactive 3D models with dynamic animations on hover. Built with React and Framer Motion."
        path="/sparks/onhover"
      />
      <SparkContainer>
        <AnimatedSection delay={0.1}>
          <BackButton title="" />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h1 className="text-lg text-black dark:text-white">On Hover - Interactive 3D Models Showcase</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-0 text-base text-[#616161] mb-4 leading-7 dark:text-[#cfcfcf]">
            This demo showcases a series of dynamically animated buttons built with <span className="spark_tools">React</span> and <span className="spark_tools">Framer Motion</span>.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25} className="w-full">
          <div className="expBorder">
            <div className="exp" style={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="exp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="expButton" >
                  {models.map((model, index) => (
                    <motion.button
                      className="buttonOnHover text-black dark:text-white"
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
        </AnimatedSection>
        <AnimatedSection delay={0.3} className="w-full">
          <PageNavigation type="spark" currentPath={router.pathname} />
        </AnimatedSection>
      </SparkContainer>


    </>
  );
}
