import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeaderMin from "../HeaderMin";
import KeyNav from "../keyNav";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    document.body.style.backgroundColor = mode === "dark" ? "#000" : "#fafafa";
    document.body.style.color = mode === "dark" ? "#fff" : "#fafafa";
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
      window.scrollTo(0, 0);
    }
  }, [transitionStage]);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo(0, 0);
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
    <div className="light" >
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
      
        <Analytics />
      </div>
     
    </div>
  );
};

export default Layout;





// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import HeaderMin from "../HeaderMin";
// import KeyNav from "../keyNav";
// import { Analytics } from "@vercel/analytics/react";

// const Layout = ({ children }) => {
//   const router = useRouter();
//   const [displayChildren, setDisplayChildren] = useState(children);
//   const [transitionStage, setTransitionStage] = useState("fadeOut");

//   // Function to detect system preference for dark mode
//   const prefersDarkMode = () => {
//     if (typeof window !== "undefined" && window.matchMedia) {
//       return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//     return false; // default to light mode if matchMedia is not supported or if window is not defined
//   };

//   // Get the initial mode from localStorage or system preference
//   const getInitialMode = () => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mode") || (prefersDarkMode() ? "dark" : "light");
//     }
//     return "light"; // default mode for server-side rendering
//   };

//   // Set initial mode statically for server render, update after mount
//   const [mode, setMode] = useState(getInitialMode);

//   // Apply the mode to the document body
//   const applyMode = (mode) => {
//     document.body.style.backgroundColor = mode === "dark" ? "#000" : "#fff";
//     document.body.style.color = mode === "dark" ? "#fff" : "#000";
//   };

//   // Set the mode on mount and whenever it changes
//   useEffect(() => {
//     applyMode(mode);
//     localStorage.setItem("mode", mode);
//   }, [mode]);

//   // Handle transition effects
//   useEffect(() => {
//     setTransitionStage("fadeIn");
//   }, []);

//   useEffect(() => {
//     if (children !== displayChildren) setTransitionStage("fadeOut");
//   }, [children, displayChildren]);

//   useEffect(() => {
//     if (transitionStage === "fadeOut") {
//       window.scrollTo(0, 0);
//     }
//   }, [transitionStage]);

//   useEffect(() => {
//     const handleRouteChangeComplete = () => {
//       window.scrollTo(0, 0);
//     };

//     router.events.on("routeChangeComplete", handleRouteChangeComplete);

//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChangeComplete);
//     };
//   }, [router]);

//   const clonedChildren = React.Children.map(displayChildren, (child) =>
//     React.cloneElement(child, { mode })
//   );

//   // Determine if the current route includes "blog/"
//   const isBlogPage = router.pathname.includes("blog");

//   return (
//     <div className={`${"mode"} theBody`}>
//       <HeaderMin />
//       <div
//         onTransitionEnd={() => {
//           if (transitionStage === "fadeOut") {
//             setDisplayChildren(children);
//             setTransitionStage("fadeIn");
//           }
//         }}
//         className={`contents ${transitionStage} ${isBlogPage ? "contenttttt" : ""}`}
//       >
//         {clonedChildren}
//         <Analytics />
//       </div>
//       {/* <KeyNav /> */}
//       {/* <div className="blur"></div> */}
//     </div>
//   );
// };

// export default Layout;
