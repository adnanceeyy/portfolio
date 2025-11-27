import React from "react";
import SplitText from "../components/SplitText";

export default function ProjectPageName() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="absolute bottom-10 right-5">
      <SplitText
        text="ProjectPage"
        className="text-8xl font-bold text-[#ffffff]"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
