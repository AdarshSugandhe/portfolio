"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import WorkSection from "@/components/Work/WorkSection";
import HorizontalScrollPage from "@/components/HorizontalScrollPage";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => scroll.destroy();
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container>
      <Hero />
      <FixedMenu />
      <WorkSection />
      <About />
      <Journey />
      <HorizontalScrollPage />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
