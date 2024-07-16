import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import KeyNav from "../keyNav";

const Layout = ({ children }) => {
  const router = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const contents = "contents";

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, displayChildren]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      window.scrollTo(0, 0);
    }
  }, [transitionStage]);

  const prefersDarkMode = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // default to light mode if matchMedia is not supported or if window is not defined
  };

  const getInitialMode = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") || (prefersDarkMode() ? "dark" : "light");
    }
    return "light"; // default mode for server-side rendering
  };

  // Set initial mode statically for server render, update after mount
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    const initialMode = savedMode || (prefersDarkMode() ? "dark" : "light");
    setMode(initialMode);

    document.body.style.backgroundColor = initialMode === "dark" ? "#000" : "#fff";
    document.body.style.color = initialMode === "dark" ? "#fff" : "#000";
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mode", mode);
      document.body.style.backgroundColor = mode === "dark" ? "#000" : "#fff";
      document.body.style.color = mode === "dark" ? "#fff" : "#000";
    }
  }, [mode]);

  const clonedChildren = React.Children.map(displayChildren, (child) =>
    React.cloneElement(child, { mode })
  );

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  // Determine if the current route includes "blog/"
  const isBlogPage = router.pathname.includes("blog");

  return (
    <div className={mode + " theBody"}>
      <Header modeValue={mode} setMode={setMode} />
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${contents} ${transitionStage} ${isBlogPage ? "contenttttt" : ""}`}
      >
        {clonedChildren}
      </div>
      {/* <KeyNav /> */}
      {/* <div className="blur"></div> */}
    </div>
  );
};

export default Layout;
