import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll, scroller } from 'react-scroll';
import HeaderMin from "../HeaderMin";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  // Function to detect system preference for dark mode
  const prefersDarkMode = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // default to light mode if matchMedia is not supported or if window is not defined
  };

  // Get the initial mode from localStorage or system preference
  const getInitialMode = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") || (prefersDarkMode() ? "dark" : "light");
    }
    return "light"; // default mode for server-side rendering
  };

  // Set initial mode statically for server render, update after mount
  const [mode, setMode] = useState(getInitialMode);

  // Apply the mode to the document body
  const applyMode = (mode) => {
    document.body.style.backgroundColor = mode === "dark" ? "#fff" : "#fff";
    document.body.style.color = mode === "dark" ? "#fff" : "#fff";
  };

  // Set the mode on mount and whenever it changes
  useEffect(() => {
    applyMode(mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  // Handle transition effects
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, displayChildren]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      scroll.scrollToTop({ smooth: true, duration: 500 });
    }
  }, [transitionStage]);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      scroll.scrollToTop({ smooth: true, duration: 500 });
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  const clonedChildren = React.Children.map(displayChildren, (child) =>
    React.cloneElement(child, { mode })
  );

  // Determine if the current route includes "blog/"
  const isBlogPage = router.pathname.includes("blog");

  return (
    <div className="light">
      {/* <div className="blur_top"></div> */}
      <HeaderMin />
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`contents ${transitionStage} ${isBlogPage ? "contenttttt" : ""}`}
      >
        {clonedChildren}
    
      
      </div>
      {/* <div className="blur_buttom"></div> */}
      <Analytics />
    </div>
  );
};

export default Layout;
