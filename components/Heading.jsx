import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ heading, styles }) => {
  const headingRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { width: 0, opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={headingRef}>
        <h1 className={styles}>{heading}</h1>
      </div>
      <div
        ref={lineRef}
        className="h-px bg-white mx-auto mb-12 origin-left"
      ></div>
    </>
  );
};

export default Heading;
