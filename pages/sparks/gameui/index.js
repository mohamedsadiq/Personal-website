import React, { useState, useEffect } from "react";
import SEO from "../../../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import BackButton from "../../../components/backButton";
import { useRouter } from 'next/router';
import PageNavigation from '../../../components/PageNavigation';
import { AnimatedSection } from "../../../components/AnimatedSection";
import SparkContainer from "../../../components/SparkContainer";

// R3F
import { Canvas, useThree, useFrame } from "@react-three/fiber";

// three js
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";

// sound 
import useSound from "use-sound";

// Define models
const models = [
  { url: "/Spartan helmet44.glb", name: "Spartan Helmet", cameraPosition: [0, 0.1, 0.5], lightIntensity: 5 },
  { url: "/Crane Sword 3D model.glb", name: "Crane Sword", cameraPosition: [0, 1, 1], lightIntensity: 5 },
  { url: "/Samurai Oni Mask.glb", name: "Samurai Oni Mask", cameraPosition: [300, 1, 1], lightIntensity: 5 },
];

function Model({ url, isVisible, cameraPosition, lightIntensity }) {
  const { scene } = useThree();
  const [model, setModel] = useState(null);


  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      setModel(model);

      // Calculate model dimensions
      const bbox = new THREE.Box3().setFromObject(model);
      const modelSize = new THREE.Vector3();
      bbox.getSize(modelSize);

      // Center the model
      model.position.x = -bbox.min.x - modelSize.x / 2;
      model.position.y = -bbox.min.y - modelSize.y / 2;
      model.position.z = -bbox.min.z - modelSize.z / 2;

      // Set initial visibility
      model.visible = isVisible;
    });
  }, [url, scene, isVisible]);

  useEffect(() => {
    if (model) {
      model.visible = isVisible;
    }
  }, [isVisible, model]);

  return null;
}

export default function GameUi() {
  const router = useRouter();
  const [modelIndex, setModelIndex] = useState(0); // State for the current model index
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered button
  const [cursorStyle, setCursorStyle] = useState("grab"); // State for cursor style
  const [isSpinning, setIsSpinning] = useState(true); // State to control spinning
  const modelMotionVariants = {
    initial: { opacity: 0, y: 160, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        // opacity: { duration: 0.9 },
        y: { duration: 0.55, type: "spring", stiffness: 160, damping: 30 },
        filter: { duration: 0.2 }
      }
    },
    exit: {
      opacity: 0,
      y: 300,
      filter: "blur(10px)",
      transition: {
        // opacity: { duration: 0.4 },
        y: { duration: 0.55, ease: "easeInOut" },
        filter: { duration: 0.2 }
      }
    }
  };

  // Function to handle drag end
  const handleDragEnd = () => {
    setCursorStyle("grab"); // Reset cursor to default grab
  };

  return (
    <>
      <SEO
        title="3D Interactive Demo"
        description="Explore and interact with a collection of 3D models using React, Three.js, React Three Fiber, and Framer Motion. Experience smooth animations and state transitions."
        path="/sparks/gameui"
      />

      <SparkContainer>
        <AnimatedSection delay={0.1}>
          <BackButton title={""} />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h1 className="mb-0 text-lg text-black dark:text-white">3D Models Interactive Demo</h1>
          {/* <span className="text-xs text-stone-500"> Published Jul 2024</span> */}
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-0 text-base text-[#3b3b3b] mb-4 leading-7 dark:text-[#d5d5d5]">
            This interactive demo showcases a collection of 3D models brought to life using <span className="spark_tools">React</span>, <span className="spark_tools">Three.js</span>, <span className="spark_tools">React Three Fiber</span>. <span className="spark_tools">Framer Motion</span>, the interface provides a seamless experience through smooth animations and state transitions.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25} className="w-full">
          <div className="expBorder">
            <AnimatedSection delay={0.3} className="w-full">
              <div className="exp exp3d remove-buttom-borders" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "500px", background: "#000", border: "none" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    drag
                    dragElastic={0.2}
                    dragMomentum={true}
                    dragConstraints={{ left: 0, right: 300 }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                    dragSnapToOrigin
                    key={models[modelIndex].name}
                    variants={modelMotionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 1 },
                    }}
                    whileDrag={{ cursor: cursorStyle }} // Dynamic cursor style
                    onDragEnd={handleDragEnd} // Reset cursor on drag end
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Canvas
                      camera={{ position: models[modelIndex].cameraPosition }}
                      onCreated={({ gl, camera }) => {
                        gl.setClearColor(new THREE.Color(0x000000));
                        camera.lookAt(0, 0, 0);
                      }}
                      shadows // Enable shadows
                    >
                      <ambientLight intensity={1} />
                      <directionalLight
                        position={[5, 10, 7.5]}
                        intensity={6}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-camera-near={0.5}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                      />
                      <pointLight position={[100, 100, 100]} intensity={1} color={0xffffff} />
                      <pointLight position={[-100, -100, -100]} intensity={1} color={0xff0000} />
                      <spotLight position={[10, 20, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

                      {/* Load selected model and toggle visibility */}
                      {models.map((model, index) => (
                        <Model
                          key={model.name}
                          url={model.url}
                          isVisible={index === modelIndex} // Only set isVisible for the selected model
                          cameraPosition={model.cameraPosition}
                          lightIntensity={model.lightIntensity}
                        />
                      ))}

                      {/* Controls for Orbit */}
                      <OrbitControls />

                      {/* Rotation Animation */}
                      <ModelRotationAnimation modelIndex={modelIndex} isSpinning={isSpinning} />
                    </Canvas>
                  </motion.div>
                </AnimatePresence>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.35} className="text-white flex justify-start flex-row flex-wrap gap-x-1.5 expControllSection bg-black">
              <div className="expButton">
                {models.map((model, index) => (
                  <motion.button
                    key={model.name}
                    onClick={() => setModelIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ scale: 1.03 }}
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
              <div className="">
                <motion.button
                  onClick={() => setIsSpinning((prev) => !prev)}
                  whileHover={{ opacity: 0.8 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`pl-3 pr-3 pt-1 pb-1 text-base bg-black rounded-2xl rotate3d`}
                >
                  <motion.span
                    key={isSpinning ? "Freeze" : "Rotate"} // Ensure key changes to force re-render
                    initial={{ filter: "blur(10px)", opacity: 1 }}
                    animate={{ filter: "blur(0)", opacity: 1, transitionEnd: { filter: "blur(0)", opacity: 1 } }}
                    transition={{ duration: 0.01 }}
                  >
                    {isSpinning ? "Freeze" : "Rotate"}
                  </motion.span>
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.4} className="w-full">
          <PageNavigation type="spark" currentPath={router.pathname} />
        </AnimatedSection>
      </SparkContainer>


    </>
  );
}

// Component for Model Rotation Animation
function ModelRotationAnimation({ modelIndex, isSpinning }) {
  const { scene } = useThree();

  // Rotate the model
  useFrame(() => {
    if (!isSpinning) return;

    scene.traverse((object) => {
      if (object.isMesh) {
        if (modelIndex === 2) {
          // Rotate vertically for the Samurai model
          object.rotation.z += 0.01;
        } else {
          // Rotate horizontally for other models
          object.rotation.y += 0.01;
        }
      }
    });
  });

  return null;
}
