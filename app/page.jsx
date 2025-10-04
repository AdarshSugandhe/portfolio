"use client";
import { useEffect } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work/Work";
import WorkSection from "@/components/Work/WorkSection";
import HorizontalScrollPage from "@/components/HorizontalScrollPage";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      <FixedMenu />
      {/* <Services />
      <Work /> */}
      <WorkSection />
      <About />
      <Journey />
      <HorizontalScrollPage />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
