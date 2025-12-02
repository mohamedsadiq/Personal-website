import { motion } from "framer-motion";
import { sharedMotionCtl } from "../../utils/motionConfig";

import Section1 from "./HeroSection";
import Section2 from "./SparksShowcase";
import Section3 from "./FeaturedProjects";
import Section4 from "./SocialMediaLinks";
import Section5 from "./LatestActivity";
import Section6 from "./ContactSection";
import Section7 from "./CuratedWorksPreview";
import Section8 from "./PressMentions";
import Section9 from "./BlogPostsSection";
import type { HeroContentData } from "../../types/heroContent";

interface ContentProps {
  heroContent: HeroContentData;
}

const MyComponent = ({ heroContent }: ContentProps) => {
  const MohamedSadiq = {
    initial: {
      opacity: 0,
      top: "20px",
      position: "relative",
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      top: "0",
      position: "relative",
      filter: "blur(0px)",
    }
  }

  return (
    <div className="content pt-16">
      <motion.div
        className="grid gap-[6rem]"
      >
        <Section1 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={0} heroContent={heroContent} />
        <Section4 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={1}/>
        <Section3 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={2}/>
        <Section2 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={3}/>
        <Section9 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={4}/>
        <Section5 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={5}/>
        <Section7 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={6}/>
        <Section8 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={7}/>
        <Section6 MohamedSadiq={MohamedSadiq} motionCtl={sharedMotionCtl} order={8}/>
      </motion.div>
    </div>
  );
};

const Content = ({ heroContent }: ContentProps) => {
  return (
    <div className={"p-0 md:mx-12 sm:mx-10 text-base"}>
      <MyComponent heroContent={heroContent} />
    </div>
  );
};

export default Content;