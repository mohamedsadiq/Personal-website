import Head from "next/head";
import BackButton from "../../components/backButton";
import { AnimatedSection } from "../../components/AnimatedSection";
import SparkContainer from "../../components/SparkContainer";


export default function Test() {
  
  return (
    <>
      <Head>
        <title>3D Model Showcase</title>
        <meta name="description" content="3D Model Showcase with Three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <SparkContainer>
        <AnimatedSection delay={0.1}>
          <BackButton title="" />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h2 className="mt-10 mb-0 text-base text-black dark:text-white">Title</h2>
          {/* <span className="text-xs text-stone-500"> - Jun 2024</span> */}
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-0 text-base text-[#616161] mb-4">
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
