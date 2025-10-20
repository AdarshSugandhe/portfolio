"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Heading from "./Heading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const rootRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const linesRef = useRef([]);
  const resumeBtnRef = useRef(null);
  const blobARef = useRef(null);
  const blobBRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      // Floating blobs background animation
      gsap.to(blobARef.current, {
        y: -30,
        x: -20,
        rotation: 5,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(blobBRef.current, {
        y: 30,
        x: 20,
        rotation: -6,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Animate left (profile image)
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate heading lines
      gsap.fromTo(
        linesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate right section content (text + button)
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={rootRef}
      className="relative overflow-hidden py-20 bg-[#02040a] text-gray-200 px-6 md:px-8"
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-10 -top-16 w-[440px] h-[440px] rounded-full blur-3xl opacity-30"
          ref={blobARef}
          style={{
            background:
              "radial-gradient(closest-side, rgba(6,182,212,0.25), rgba(6,182,212,0.05))",
          }}
        />
        <div
          className="absolute -right-20 -bottom-20 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
          ref={blobBRef}
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.18), rgba(99,102,241,0.03))",
          }}
        />
      </div>

      <div className="container mx-auto">
        <Heading
          heading="ABOUT"
          styles="h2 pt-12 px-4 font-bold text-white text-6xl md:text-8xl leading-[51.5px] md:leading-[68px]"
        />

        <div className="flex flex-col items-end">
          {[
            "A Computer Science Engineer",
            "passionate about building scalable, efficient, and",
            "user-focused applications.",
          ].map((text, index) => (
            <h2
              key={index}
              ref={(el) => (linesRef.current[index] = el)}
              className="text-2xl md:text-3xl text-white text-right uppercase pb-3 font-light leading-tight"
            >
              {text}
            </h2>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center my-20">
          {/* Profile Image Section */}
          <div
            ref={leftRef}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 border border-white/6 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg">
              <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-cyan-400/10 to-indigo-500/8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/hero/profile.png"
                  width={300}
                  height={300}
                  alt="Profile picture"
                />
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div ref={rightRef} className="w-full">
            <p className="text-white text-lg text-[#ffffffb3]">
              I’m a Full-Stack Developer passionate about building efficient and
              user-friendly applications with React.js, Next.js, Node.js, and
              Express.js. <br />
              I’ve built production-ready apps (doctor appointment systems,
              admin/doctor dashboards, SaaS platforms) focusing on scalable
              APIs, secure authentication, and resilient data design. <br />I
              enjoy leveling up systems for performance, accessibility, and
              delightful user experiences.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://drive.google.com/file/d/1DpXRLxpZxPubkpjXQgf51p6bkuOGdirA/view?usp=sharing"
                target="_blank"
                ref={resumeBtnRef}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-medium text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg"
              >
                VIEW RESUME
                <FiArrowRight className="-rotate-45 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
