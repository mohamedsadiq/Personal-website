import { useEffect, useRef } from "react";
import SEO from "../../components/SEO";
import BackButton from "../../components/backButton";
import { useRouter } from 'next/router';
import PageNavigation from '../../components/PageNavigation';
import { AnimatedSection } from "../../components/AnimatedSection";
import SparkContainer from "../../components/SparkContainer";

export default function FamilyTransactions() {
  const widgetRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const widget = widgetRef.current;

    const handleScroll = () => {
      const scrollTop = widget.scrollTop;
      const scrollHeight = widget.scrollHeight - widget.clientHeight;

      if (scrollTop > scrollHeight / 4) {
        widget.classList.add("storm-visible");
        widget.classList.remove("rainy-visible");
        document.querySelector(".dot:nth-child(2)").classList.add("activeDot");
        document
          .querySelector(".dot:nth-child(1)")
          .classList.remove("activeDot");
      } else {
        widget.classList.add("rainy-visible");
        widget.classList.remove("storm-visible");
        document.querySelector(".dot:nth-child(1)").classList.add("activeDot");
        document
          .querySelector(".dot:nth-child(2)")
          .classList.remove("activeDot");
      }
    };

    widget.addEventListener("scroll", handleScroll);

    return () => {
      widget.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SEO
        title="Scrolling Widget"
        description="An interactive scrolling widget showcasing dynamic weather transitions. Built with React and CSS animations."
        path="/sparks/scroll"
      />

      <SparkContainer>
        <AnimatedSection delay={0.1}>
          <BackButton title="" />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h1 className="text-lg text-black dark:text-white">Scrolling</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-0 text-base text-[#3b3b3b] mb-4 leading-7 dark:text-[#c8c8c8]">
            It's a scroll, but with a twist. Instead of the typical scroll
            bar, I integrated circular indicators to signify the moving
            content, elevating the overall user experience.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25} className="w-full">
          <div className="expBorder">
            <div className="exp" style={{ height: "400px" }}>
              {/* <div className="rainy"></div> */}
              <div className="dotsForScrolling">
                <div className="dot activeDot"></div>
                <div className="dot"></div>
              </div>
              <div className="widget" ref={widgetRef}>
                <div className="storm"></div>
                <div className="rainy"></div>
                <div style={{ height: "400px" }}></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3} className="w-full">
          <PageNavigation type="spark" currentPath={router.pathname} />
        </AnimatedSection>
      </SparkContainer>


    </>
  );
}
