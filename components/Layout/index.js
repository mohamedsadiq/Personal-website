import { useState, useEffect } from "react";
import Header from "../Header";
import KeyNav from "../keyNav";

const Layout = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const contents = "contents";

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  const prefersDarkMode = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // default to light mode if matchMedia is not supported or if window is not defined
  };

  const [mode, setMode] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("mode") || (prefersDarkMode() ? "dark" : "light");
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mode", mode);
    }
  }, [mode]);

  return (
    <div className={mode + " theBody"}>
      <Header modeValue={mode} setMode={setMode} />
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${contents} ${transitionStage}`}
      >
        {displayChildren}
      </div>
      <KeyNav />
    </div>
  );
};

export default Layout;
