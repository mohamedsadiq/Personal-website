// pages/index.js (or another appropriate file)
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new GLTFLoader();
    loader.load('models/gltf/duck/duck.gltf', (gltf) => {
      scene.add(gltf.scene);

      // Example position and scale adjustments
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(0.1, 0.1, 0.1);
    }, undefined, (error) => {
      console.error(error);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ThreeScene;
