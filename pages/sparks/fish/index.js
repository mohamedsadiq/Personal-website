import { useEffect, useRef } from "react";
import Head from "next/head";
import BackButton from "../../../components/backButton";
import styles from './fish.module.css'
import Stats from 'stats.js';
import Script from "next/script";

import * as THREE from 'three';
let renderer, scene, camera, stats;


export default function Fish() {
  const containerRef = useRef(null);

  useEffect(() => {
    init();

    // THREEJS RELATED VARIABLES 
    let camera, fieldOfView, aspectRatio, nearPlane, farPlane, shadowLight, light, renderer;

    // SCREEN VARIABLES 
    let HEIGHT, WIDTH, windowHalfX, windowHalfY, xLimit, yLimit;

    // FISH BODY PARTS
    let fish, bodyFish, tailFish, topFish, rightIris, leftIris, rightEye, leftEye, lipsFish, tooth1, tooth2, tooth3, tooth4, tooth5;
    let sideRightFish, sideLeftFish;


    // FISH SPEED
    let fishFastColor = { r: 255, g: 0, b: 224 };
    let fishSlowColor = { r: 0, g: 207, b: 255 };
    let angleFin = 0;

    // PARTICLES COLORS
    let colors = ['#dff69e', '#00ceff', '#002bca', '#ff00e0', '#3f159f', '#71b583', '#00a2ff'];

    // PARTICLES
    let flyingParticles = [];
    let waitingParticles = [];
    let maxParticlesZ = 600;

    // SPEED
    let speed = { x: 0, y: 0 };
    let smoothing = 10;

    // MISC
    let mousePos = { x: 0, y: 0 };
    let stats;
    let halfPI = Math.PI / 2;

    // Init the scene
   
    function init() {
      let HEIGHT, WIDTH, aspectRatio, fieldOfView, nearPlane, farPlane;
      let camera, renderer, yLimit, xLimit, windowHalfX, windowHalfY, maxParticlesZ ;

      scene = new THREE.Scene();

      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      aspectRatio = WIDTH / HEIGHT;
      fieldOfView = 10;
      nearPlane = 1;
      farPlane = 2000;
      camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
      camera.position.z = 3000;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(WIDTH, HEIGHT);
      containerRef.current.appendChild(renderer.domElement);

      let ang = (fieldOfView / 2) * Math.PI / 180;
      yLimit = (camera.position.z + maxParticlesZ) * Math.tan(ang);
      xLimit = yLimit * camera.aspect;

      windowHalfX = WIDTH / 1;
      windowHalfY = HEIGHT / 1;

      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('mousemove', handleMouseMove, false);
      document.addEventListener('touchstart', handleTouchStart, false);
      document.addEventListener('touchend', handleTouchEnd, false);
      document.addEventListener('touchmove', handleTouchMove, false);
    }

    function onWindowResize() {
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
      let ang = (fieldOfView / 2) * Math.PI / 180;
      yLimit = (camera.position.z + maxParticlesZ) * Math.tan(ang);
      xLimit = yLimit * camera.aspect;
    }

    function handleMouseMove(event) {
      mousePos = { x: event.clientX, y: event.clientY };
      updateSpeed();
    }

    function handleTouchStart(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
        mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        updateSpeed();
      }
    }

    function handleTouchEnd(event) {
      mousePos = { x: windowHalfX, y: windowHalfY };
      updateSpeed();
    }

    function handleTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
        updateSpeed();
      }
    }

    function updateSpeed() {
      speed.x = (mousePos.x / WIDTH) * 100;
      speed.y = (mousePos.y - windowHalfY) / 10;
    }

    function loop() {
      
      fish.rotation.z += ((-speed.y / 50) - fish.rotation.z) / smoothing;
      fish.rotation.x += ((-speed.y / 50) - fish.rotation.x) / smoothing;
      fish.rotation.y += ((-speed.y / 50) - fish.rotation.y) / smoothing;

      fish.position.x += (((mousePos.x - windowHalfX)) - fish.position.x) / smoothing;
      fish.position.y += ((-speed.y * 10) - fish.position.y) / smoothing;

      rightEye.rotation.z = leftEye.rotation.z = -speed.y / 150;
      rightIris.position.x = leftIris.position.y = -10 - speed.y / 2;

      rightEye.scale.set(1, 1 - (speed.x / 150), 1);
      leftEye.scale.set(1, 1 - (speed.x / 150), 1);

      let s2 = speed.x / 100;
      let s3 = speed.x / 300;

      angleFin += s2;
      let backTailCycle = Math.cos(angleFin);
      let sideFinsCycle = Math.sin(angleFin / 5);

      tailFish.rotation.y = backTailCycle * .5;
      topFish.rotation.x = sideFinsCycle * .5;
      sideRightFish.rotation.x = halfPI + sideFinsCycle * .2;
      sideLeftFish.rotation.x = halfPI + sideFinsCycle * .2;

      let rvalue = (fishSlowColor.r + (fishFastColor.r - fishSlowColor.r) * s2) / 255;
      let gvalue = (fishSlowColor.g + (fishFastColor.g - fishSlowColor.g) * s2) / 255;
      let bvalue = (fishSlowColor.b + (fishFastColor.b - fishSlowColor.b) * s2) / 255;
      bodyFish.material.color.setRGB(rvalue, gvalue, bvalue);
      lipsFish.material.color.setRGB(rvalue, gvalue, bvalue);

      fish.scale.set(1 + s3, 1 - s3, 1 - s3);

      for (let i = 0; i < flyingParticles.length; i++) {
        let particle = flyingParticles[i];
        particle.rotation.y += (1 / particle.scale.x) * .05;
        particle.rotation.x += (1 / particle.scale.x) * .05;
        particle.rotation.z += (1 / particle.scale.x) * .05;
        particle.position.x += -10 - (1 / particle.scale.x) * speed.x * .2;
        particle.position.y += (1 / particle.scale.x) * speed.y * .2;
        if (particle.position.x < -xLimit - 80) {
          scene.remove(particle);
          waitingParticles.push(flyingParticles.splice(i, 1)[0]);
          i--;
        }
      }
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
      stats.update();
      requestAnimationFrame(loop);
    }

    function createStats() {
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      stats.domElement.style.right = '0px';
      containerRef.current.appendChild(stats.domElement);
    }

    function createLight() {
      light = new THREE.HemisphereLight(0xffffff, 0xffffff, .3)
      scene.add(light);
      shadowLight = new THREE.DirectionalLight(0xffffff, .8);
      shadowLight.position.set(1, 1, 1);
      scene.add(shadowLight);
    }

    function createFish() {
      fish = new THREE.Group();

      let bodyGeom = new THREE.BoxGeometry(120, 120, 120);
      let bodyMat = new THREE.MeshLambertMaterial({
        color: 0x80f5fe,
        flatShading: true
      });
      bodyFish = new THREE.Mesh(bodyGeom, bodyMat);

      let tailGeom = new THREE.CylinderGeometry(0, 60, 60, 4, false);
      let tailMat = new THREE.MeshLambertMaterial({
        color: 0xff00dc,
        flatShading: true
      });
      tailFish = new THREE.Mesh(tailGeom, tailMat);
      tailFish.scale.set(1, .5, 1);
      tailFish.position.z = -80;
      tailFish.rotation.x = halfPI;

      let topGeom = new THREE.CylinderGeometry(0, 50, 50, 4, false);
      let topMat = new THREE.MeshLambertMaterial({
        color: 0xff00dc,
        flatShading: true
      });
      topFish = new THREE.Mesh(topGeom, topMat);
      topFish.scale.set(1, .5, 1);
      topFish.position.z = -10;
      topFish.position.y = 80;
      topFish.rotation.x = halfPI;

      let sideGeom = new THREE.BoxGeometry(60, 30, 1);
      let sideMat = new THREE.MeshLambertMaterial({
        color: 0xff00dc,
        flatShading: true
      });

      sideRightFish = new THREE.Mesh(sideGeom, sideMat);
      sideRightFish.position.y = 50;
      sideRightFish.position.x = 30;
      sideRightFish.position.z = -20;

      sideLeftFish = new THREE.Mesh(sideGeom, sideMat);
      sideLeftFish.position.y = 50;
      sideLeftFish.position.x = -30;
      sideLeftFish.position.z = -20;

      let rightEyeGeom = new THREE.BoxGeometry(40, 40, 20);
      let rightEyeMat = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        flatShading: true
      });
      rightEye = new THREE.Mesh(rightEyeGeom, rightEyeMat);
      rightEye.position.x = -45;
      rightEye.position.y = 40;
      rightEye.position.z = 40;

      let leftEyeGeom = new THREE.BoxGeometry(40, 40, 20);
      let leftEyeMat = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        flatShading: true
      });
      leftEye = new THREE.Mesh(leftEyeGeom, leftEyeMat);
      leftEye.position.x = 45;
      leftEye.position.y = 40;
      leftEye.position.z = 40;

      let irisGeom = new THREE.BoxGeometry(10, 10, 5);
      let irisMat = new THREE.MeshLambertMaterial({
        color: 0x000000,
        flatShading: true
      });
      rightIris = new THREE.Mesh(irisGeom, irisMat);
      rightIris.position.x = 0;
      rightIris.position.y = 0;
      rightIris.position.z = 10;
      rightEye.add(rightIris);

      leftIris = new THREE.Mesh(irisGeom, irisMat);
      leftIris.position.x = 0;
      leftIris.position.y = 0;
      leftIris.position.z = 10;
      leftEye.add(leftIris);

      let lipsGeom = new THREE.BoxGeometry(40, 20, 20);
      let lipsMat = new THREE.MeshLambertMaterial({
        color: 0xff0000,
        flatShading: true
      });
      lipsFish = new THREE.Mesh(lipsGeom, lipsMat);
      lipsFish.position.z = 70;
      lipsFish.position.y = -10;

      let toothGeom = new THREE.BoxGeometry(8, 8, 4);
      let toothMat = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        flatShading: true
      });

      tooth1 = new THREE.Mesh(toothGeom, toothMat);
      tooth1.position.x = 0;
      tooth1.position.y = 10;
      tooth1.position.z = 12;
      lipsFish.add(tooth1);

      tooth2 = new THREE.Mesh(toothGeom, toothMat);
      tooth2.position.x = -15;
      tooth2.position.y = 10;
      tooth2.position.z = 8;
      lipsFish.add(tooth2);

      tooth3 = new THREE.Mesh(toothGeom, toothMat);
      tooth3.position.x = 15;
      tooth3.position.y = 10;
      tooth3.position.z = 8;
      lipsFish.add(tooth3);

      tooth4 = new THREE.Mesh(toothGeom, toothMat);
      tooth4.position.x = -10;
      tooth4.position.y = 10;
      tooth4.position.z = 12;
      lipsFish.add(tooth4);

      tooth5 = new THREE.Mesh(toothGeom, toothMat);
      tooth5.position.x = 10;
      tooth5.position.y = 10;
      tooth5.position.z = 12;
      lipsFish.add(tooth5);

      fish.add(bodyFish);
      fish.add(tailFish);
      fish.add(topFish);
      fish.add(sideRightFish);
      fish.add(sideLeftFish);
      fish.add(rightEye);
      fish.add(leftEye);
      fish.add(lipsFish);

      fish.position.y = -100;
      fish.position.z = 50;
      fish.position.x = 0;

      scene.add(fish);
    }

    function createParticles() {
      let particle;
      let particleGeom = new THREE.TetrahedronGeometry(10, 1);

      for (let i = 0; i < 100; i++) {
        let colorIndex = Math.floor(Math.random() * colors.length);
        let particleMat = new THREE.MeshLambertMaterial({
          color: colors[colorIndex],
          flatShading: true
        });
        particle = new THREE.Mesh(particleGeom, particleMat);
        particle.scale.set(.1 + Math.random() * .9, .1 + Math.random() * .9, .1 + Math.random() * .9);
        particle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        particle.position.set(-xLimit, Math.random() * yLimit * 2 - yLimit, Math.random() * maxParticlesZ * 2 - maxParticlesZ);

        waitingParticles.push(particle);
      }
    }

    function addParticle() {
      if (waitingParticles.length) {
        let particle = waitingParticles.pop();
        flyingParticles.push(particle);
        particle.position.x = xLimit + 20;
        scene.add(particle);
      }
    }

    createStats();
    createLight();
    createFish();
    createParticles();
    loop();

    setInterval(addParticle, 500);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      <div  ref={containerRef} id={styles.world}></div>
      <div id={styles.instructions}>Move your mouse <br/>to change speed and direction</div>
    </>
  );
}
