import {useState, useEffect} from "react"
import Header from "../Header"


const Layout =  ({ children })=> {
    // const children = props.children;
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const contents = "contents"
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div >
      <Header />
      <div   
       onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          console.log("fading out");
          setDisplayChildren(children);
          setTransitionStage("fadeIn");
        }
      }}
      className={ `${contents} ${transitionStage}`  }
      
      >
      {displayChildren}
      </div>
    
    </div>
  )
}

export default Layout
