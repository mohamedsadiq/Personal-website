import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BackButton from "../../components/backButton";
import { useRouter } from 'next/router';
import Footer from '../../components/sparksNav';
import * as THREE from 'three';

export default function Test() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

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

  return (
    <>
      <Head>
        <title>Rocket Game</title>
        <meta name="description" content="3D Rocket Game with Three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="container inner_container_sparks">
        <BackButton title={""} />
        <div className="inner_container inner_container_sparks">
          <h2 className="mt-10 mb-0 text-xl font-semibold inline text-black">Rocket Game</h2>
          <span className="text-xs text-stone-500"> - Jun 2024</span>
          <p>
            Move your cursor to navigate the rocket. Don't hit the edges!
          </p>
          <div ref={containerRef} className="exp" style={{ height: "300px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * (2 * Math.PI) + scrollPosition;
                const radius = 100;
                const centerX = 100;
                const centerY = 100;
                const x = centerX + radius * Math.cos(angle) - 25;
                const y = centerY + radius * Math.sin(angle) - 25;
                return (
                  <div 
                    key={i} 
                    className="object" 
                    style={{ 
                      top: `${y}px`, 
                      left: `${x}px`,
                      transform: `scale(${1 + Math.sin(angle) * 0.2})`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .object {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #ccc;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
        .object:hover {
          background-color: #aaa;
          transform: scale(1.1);
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .object:active {
          animation: pulse 0.5s infinite;
        }
      `}</style>
    </>
  );
}
