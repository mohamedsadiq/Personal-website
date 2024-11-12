import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BackButton from "../../components/backButton";
import { useRouter } from 'next/router';
import Footer from '../../components/sparksNav';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Test() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredObject, setHoveredObject] = useState(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const objectsRef = useRef([]);

  const models = [
    { url: "/Spartan helmet44.glb", name: "Spartan Helmet", cameraPosition: [0, 0.1, 0.5] },
    { url: "/Crane Sword 3D model.glb", name: "Crane Sword", cameraPosition: [0, 1, 1] },
    { url: "/Spartan helmet44.glb", name: "Spartan Helmet", cameraPosition: [0, 0.1, 0.5] },
    { url: "/Crane Sword 3D model.glb", name: "Crane Sword", cameraPosition: [0, 1, 1] },
    { url: "/Spartan helmet44.glb", name: "Spartan Helmet", cameraPosition: [0, 0.1, 0.5] },
    { url: "/Crane Sword 3D model.glb", name: "Crane Sword", cameraPosition: [0, 1, 1] },
  ];

  const handleScroll = (event) => {
    setScrollPosition((prev) => prev + event.deltaY * 0.01);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
      return () => container.removeEventListener('wheel', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const loader = new GLTFLoader();

    models.forEach((model, index) => {
      loader.load(model.url, (gltf) => {
        const object = gltf.scene;
        object.scale.set(0.5, 0.5, 0.5);
        scene.add(object);
        objectsRef.current.push(object);
      });
    });

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const animate = () => {
      requestAnimationFrame(animate);
      objectsRef.current.forEach((object, i) => {
        if (object) {
          const angle = (i / 6) * (2 * Math.PI) + scrollPosition;
          const radius = 3;
          object.position.x = radius * Math.cos(angle);
          object.position.y = radius * Math.sin(angle);
          object.scale.setScalar(hoveredObject === i ? 0.6 : 0.5);
          object.rotation.y += 0.01;
        }
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [hoveredObject]);

  useEffect(() => {
    const updateObjectPositions = () => {
      objectsRef.current.forEach((object, i) => {
        if (object) {
          const angle = (i / 6) * (2 * Math.PI) + scrollPosition;
          const radius = 3;
          object.position.x = radius * Math.cos(angle);
          object.position.y = radius * Math.sin(angle);
        }
      });
    };

    updateObjectPositions();
  }, [scrollPosition]);

  return (
    <>
      <Head>
        <title>3D Model Showcase</title>
        <meta name="description" content="3D Model Showcase with Three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="container inner_container_sparks">
        <BackButton title={""} />
        <div className="inner_container inner_container_sparks">
          <h2 className="mt-10 mb-0 text-xl font-semibold inline text-black">3D Model Showcase</h2>
          <span className="text-xs text-stone-500"> - Jun 2024</span>
          <p>
            Scroll to rotate the models. Hover over a model to enlarge it.
          </p>
          <div ref={containerRef} className="exp" style={{ height: "500px", position: "relative" }}>
            {models.map((model, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
                onMouseEnter={() => setHoveredObject(i)}
                onMouseLeave={() => setHoveredObject(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
