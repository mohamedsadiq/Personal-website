import { useEffect, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import BackButton from "../../../components/backButton";
import { KeyDisplay } from "../../../utilsSpark";
import { CharacterControls } from "../../../characterControls";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const TheMartian: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
        <title>The Martian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
        <div className="container inner_container_sparks_parent">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
          <h2 className="mt-10">The Martian</h2>
          <p>
              This interactive demo allows you to control and observe the
              behavior of a character in a 3D environment. Using <span className="spark_tools">Three.js.</span>
            </p>
            <h2>Navigation Controls:</h2>
            <p>
              <ul>
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
            </p>
            <div className="exp" ref={containerRef} style={{ height:"700px"}} ></div>
          
            

          </div>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H699TZ29QW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H699TZ29QW');
          `}
        </Script>
      
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

function wrapAndRepeatTexture(map: THREE.Texture) {
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.x = map.repeat.y = 10;
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
