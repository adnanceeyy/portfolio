import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: -40 }, // text comes from top
  to = { opacity: 1, y: 0 },     // text settles in place
  outTo = { opacity: 0, y: 100 }, // text moves down out of view
  textAlign = "center",
  tag = "p",
  displayTime = 1000, // time to stay before going down
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  useEffect(() => {
    if (!ref.current || !fontsLoaded) return;

    const el = ref.current;
    const split = new GSAPSplitText(el, { type: splitType, charsClass: "split-char" });
    const chars = split.chars;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animate IN
    tl.fromTo(
      chars,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: 0.05,
      }
    )
    // Wait displayTime then animate letters downward (OUT)
    .to(
      chars,
      {
        ...outTo,
        duration,
        ease,
        stagger: 0.05,
        delay: displayTime / 1000,
      }
    );

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    fontsLoaded,
    from,
    to,
    outTo,
    displayTime,
  ]);

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      style={{ textAlign, willChange: "transform, opacity" }}
      className={`split-parent inline-block whitespace-normal ${className}`}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
