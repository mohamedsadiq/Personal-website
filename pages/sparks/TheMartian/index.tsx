import { useEffect, useRef } from "react";
import Head from "next/head";
import BackButton from "../../../components/backButton";
import { KeyDisplay } from "../../../utilsSpark";
import { CharacterControls } from "../../../characterControls";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRouter } from 'next/router';
import SparksNav from '../../../components/sparksNav';
import { AnimatedSection } from "../../../components/AnimatedSection";
import SparkContainer from "../../../components/SparkContainer";

const TheMartian: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let orbitControls: OrbitControls;
    let characterControls: CharacterControls | undefined;
    let keyDisplayQueue: KeyDisplay;

    const initThree = () => {
      // SCENE
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xba9c86);

      // CAMERA
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
      camera.position.set(0, 5, 5);
      
      // RENDERER
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        renderer.setSize(width, height);
      }
      renderer.shadowMap.enabled = true;

      // Append renderer to the container
      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      // CONTROLS
      orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableDamping = true;
      orbitControls.minDistance = 5;
      orbitControls.maxDistance = 15;
      orbitControls.enablePan = false;
      orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
      orbitControls.update();

      // LIGHTS
      light(scene);

      // FLOOR
      generateFloor(scene);

      // MODEL WITH ANIMATIONS
      new GLTFLoader().load("/soldier.glb", (gltf) => {
        const model = gltf.scene;
        model.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) {
            (object as THREE.Mesh).castShadow = true;
          }
        });
        scene.add(model);

        const gltfAnimations = gltf.animations;
        const mixer = new THREE.AnimationMixer(model);
        const animationsMap: Map<string, THREE.AnimationAction> = new Map();
        gltfAnimations
          .filter((a) => a.name !== "TPose")
          .forEach((a) => {
            animationsMap.set(a.name, mixer.clipAction(a));
          });

        characterControls = new CharacterControls(
          model,
          mixer,
          animationsMap,
          orbitControls,
          camera,
          "Idle"
        );
      });

      // CONTROL KEYS
      const keysPressed: { [key: string]: boolean } = {};
      keyDisplayQueue = new KeyDisplay();
      const handleKeyDown = (event: KeyboardEvent) => {
        keyDisplayQueue.down(event.key);
        if (event.shiftKey && characterControls) {
          characterControls.switchRunToggle();
        } else {
          keysPressed[event.key.toLowerCase()] = true;
        }
      };
      const handleKeyUp = (event: KeyboardEvent) => {
        keyDisplayQueue.up(event.key);
        keysPressed[event.key.toLowerCase()] = false;
      };
      document.addEventListener("keydown", handleKeyDown, false);
      document.addEventListener("keyup", handleKeyUp, false);

      // ANIMATE
      const clock = new THREE.Clock();
      function animate() {
        let mixerUpdateDelta = clock.getDelta();
        if (characterControls) {
          characterControls.update(mixerUpdateDelta, keysPressed);
        }
        orbitControls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();

      // RESIZE HANDLER
      const handleResize = () => {
        if (containerRef.current) {
          const { width, height } =
            containerRef.current.getBoundingClientRect();
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
          if (keyDisplayQueue) keyDisplayQueue.updatePosition();
        }
      };
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    initThree();

    return () => {}; // Empty return to satisfy useEffect dependencies
  }, []);

  return (
    <>
      <Head>
        <title>The Martian - Interactive 3D Character Demo</title>
        <meta name="description" content="Explore 'The Martian', an interactive 3D character demo using Three.js. Control and observe the behavior of a character in a 3D environment." />
        <meta name="keywords" content="3D character demo, Three.js, interactive demo, 3D environment, character control, web development" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="The Martian - Interactive 3D Character Demo" />
        <meta property="og:description" content="Explore 'The Martian', an interactive 3D character demo using Three.js. Control and observe the behavior of a character in a 3D environment." />
        <meta property="og:image" content="https://mosadiq.com/og-image.jpg" />
        <meta property="og:url" content="https://mosadiq.com/sparks/themartian" />
        <meta property="og:type" content="website" />
      </Head>
     
        <SparkContainer>
          <AnimatedSection delay={0.1}>
            <BackButton title="" />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="text-base text-black dark:text-white">The Martian - Interactive 3D Character Demo</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-0 text-sm text-[#616161] dark:text-[#cfcfcf]">
              This interactive demo allows you to control and observe the
              behavior of a character in a 3D environment using <span className="spark_tools">Three.js</span>.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <h2 className="text-black mb-4 text-sm text-[#616161] mt-0   dark:text-white">Navigation Controls:</h2>
            <ul className="dark:text-[#cfcfcf] mt-0 text-sm text-[#616161]">
              <li>
                1 - Use <span className="spark_tools">W</span> ,{" "}
                <span className="spark_tools">A</span> ,{" "}
                <span className="spark_tools">S</span> ,{" "}
                <span className="spark_tools">D</span> keys to move the
                character forward, left, backward, and right respectively.
                Hold down Shift while moving to toggle between walking and
                running. 
              </li>
              <li>
                2 - Click and drag with the mouse to change the camera view.
                Use the mouse scroll wheel to zoom in and out.
              </li>
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="w-full">
            <div className="expBorder">
              <div className="exp" ref={containerRef} style={{ height: "700px" }}></div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.35} className="w-full">
            <SparksNav currentPath={router.pathname} />
          </AnimatedSection>
        </SparkContainer>
        
      
    </>
  );
};

function generateFloor(scene: THREE.Scene) {
  // TEXTURES
  const textureLoader = new THREE.TextureLoader();
  const sandBaseColor = textureLoader.load("/Stylized Sand 001 basecolor.jpg");
  const sandNormalMap = textureLoader.load("/Stylized Sand 001 normal.jpg");
  const sandHeightMap = textureLoader.load("/Stylized Sand 001 Ambient Occlusion.jpg");
  const sandAmbientOcclusion = textureLoader.load("/Stylized Sand roughness.jpg");

  const WIDTH = 80;
  const LENGTH = 80;

  const geometry = new THREE.PlaneGeometry(WIDTH, LENGTH, 512, 512);
  const material = new THREE.MeshStandardMaterial({
    map: sandBaseColor,
    normalMap: sandNormalMap,
    displacementMap: sandHeightMap,
    displacementScale: 0.1,
    aoMap: sandAmbientOcclusion,
  });
  wrapAndRepeatTexture(material.map);
  wrapAndRepeatTexture(material.normalMap);
  wrapAndRepeatTexture(material.displacementMap);
  wrapAndRepeatTexture(material.aoMap);

  const floor = new THREE.Mesh(geometry, material);
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
}

function wrapAndRepeatTexture(map: THREE.Texture | null) {
  if (!map) return;
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(8, 8);
}

function light(scene: THREE.Scene) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-60, 100, -10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 50;
  dirLight.shadow.camera.bottom = -50;
  dirLight.shadow.camera.left = -50;
  dirLight.shadow.camera.right = 50;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 200;
  dirLight.shadow.mapSize.width = 4096;
  dirLight.shadow.mapSize.height = 4096;
  scene.add(dirLight);
  // Uncomment to visualize the light's shadow camera
  // scene.add(new THREE.CameraHelper(dirLight.shadow.camera));
}

export default TheMartian;
