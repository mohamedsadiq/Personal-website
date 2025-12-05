import SEO from "../../components/SEO";
import BackButton from "../../components/backButton";
import { AnimatedSection } from "../../components/AnimatedSection";
import SparkContainer from "../../components/SparkContainer";


export default function Test() {

  return (
    <>
      <SEO
        title="3D Model Showcase"
        description="3D Model Showcase with Three.js"
        path="/sparks/test"
      />

      <SparkContainer>
        <AnimatedSection delay={0.1}>
          <BackButton title="" />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h1 className=" mb-0 text-lg text-black dark:text-white">Title</h1>
          {/* <span className="text-xs text-stone-500"> - Jun 2024</span> */}
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-0 text-base text-[#3b3b3b] mb-4 leading-7 dark:text-[#d5d5d5]">
            test
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.25} className="w-full">
          <div className="expBorder">
            <div className="exp" style={{ height: "500px", position: "relative" }}>
              {/* Your content here */}
            </div>
          </div>
        </AnimatedSection>
      </SparkContainer>
    </>
  );
}
