import {useState, useEffect} from "react"
import Header from "../Header"
import KeyNav from "../keyNav"

const Layout =  ({ children })=> {
    // const children = props.children;
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const contents = "contents";

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  const [mode, setMode] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem("mode") || "light";
  });

  // Browser theme detection logic
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleDarkModeChange = (event) => {
      if (event.matches) {
        setMode("dark");
      } else {
        setMode("light");
      }
    };

    darkModeQuery.addListener(handleDarkModeChange);
    handleDarkModeChange(darkModeQuery);

    return () => {
      darkModeQuery.removeListener(handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("mode", mode);
    }
  }, [mode]);

  return (
    <div className={mode + " theBody"}>
      <Header modeValue={mode} setMode={setMode}/>
      <div   
       onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          console.log("fading out");
          setDisplayChildren(children);
          setTransitionStage("fadeIn");
        }
      }}
      className={ `${contents} ${transitionStage}`  }
      // #a8a8a8
      >
      {displayChildren}
      </div>
    <KeyNav />
    <div className="nextjs">
      <span className="star">*</span>
    <span className="crafted">Crafted by hand using <a>NextJs</a></span>
     </div>
    </div>
  )
}

export default Layout
