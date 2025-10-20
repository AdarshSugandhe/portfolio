"use client";

import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/lib/projectsData";
import Heading from "../Heading";
import WorkItem from "./WorkItem";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const infoRefs = useRef([]);

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      infoRefs.current.forEach((info) => {
        if (!info) return;
        gsap.fromTo(
          info,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: info,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleItems]);

  return (
    <section ref={sectionRef} className="w-full bg-black" id="work">
      <div className="container mx-auto">
        <Heading
          heading="WORKS"
          styles="h2 pt-12 px-4 font-bold text-white text-6xl md:text-8xl leading-[51.5px] md:leading-[68px]"
        />
      </div>

      {projectsData.slice(0, visibleItems).map((work, idx) => (
        <WorkItem work={work} val={idx} infoRefs={infoRefs} key={idx} />
      ))}

      {visibleItems < projectsData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleItems((prev) => prev + 5)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            More Work
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
