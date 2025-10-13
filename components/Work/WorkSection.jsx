"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/lib/projectsData";

const WorkSection = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className="relative mt-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 60,
    },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full bg-black" id="work">
      <AnimatedText
        text="My Latest Work"
        textStyles="h2 md:text-5xl font-bold py-12 text-left px-4 container text-accent"
      />

      {projectsData.slice(0, visibleItems).map((work, idx) => (
        <div
          key={idx}
          className={`min-h-[700px] flex items-center justify-center mx-2 md:mx-4`}
          style={{ backgroundColor: work.bgColor }}
        >
          <div className="container mx-auto py-16 flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
            {/* Left: Slider */}
            <div className="w-full lg:w-[65%] max-w-full px-2 md:px-6">
              <Slider {...settings}>
                {Object.values(work.img).map((src, i) => (
                  <div
                    key={i}
                    className="h-[260px] sm:h-[350px] md:h-[450px] xl:h-[520px] flex items-center"
                  >
                    <a
                      href={work.href}
                      target="_blank"
                      className="block w-full h-full overflow-hidden "
                    >
                      <Image
                        src={src}
                        alt={`${work.title} screenshot ${i + 1}`}
                        width={850}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 md:hover:scale-[1.03]"
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Right: Info */}
            <div className="flex-1 text-white text-left self-start md:self-end overflow-hidden px-2 md:px-6">
              <motion.h1
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.6 }}
                className="text-4xl md:text-[40px] text-white mb-2 font-[900] leading-10"
              >
                {work.title}
              </motion.h1>

              <motion.div
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.6 }}
              >
                <p className="uppercase tracking-wider text-white/80 mb-6 text-sm sm:text-base">
                  — {work.category}
                </p>
                <p className="pb-4 font-[400] leading-5">
                  {work.description.first}
                </p>
                <p className="pb-4 font-[400] leading-5">
                  {work.description.second}
                </p>
                <p className="font-[400] leading-5">{work.description.third}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {work.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-sm text-xs font-medium text-white shadow-sm uppercase"
                      style={{
                        background:
                          "linear-gradient(to bottom, #ffffff40, #ffffff59)",
                        border: "1px solid #fff3",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={work.href}
                    target="_blank"
                    className="text-xs inline-flex items-center gap-1 group pt-3"
                  >
                    VIEW WEBSITE{" "}
                    <FiArrowRight className="-rotate-45 group-hover:scale-[1.3] transition-all duration-300" />
                  </Link>
                  {work.githubUrl && (
                    <Link
                      href={work.githubUrl}
                      target="_blank"
                      className="text-xs inline-flex items-center gap-1 group pt-3"
                    >
                      GitHub{" "}
                      <FaGithub className="group-hover:scale-[1.1] transition-all duration-300" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      {visibleItems < projectsData.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleItems((prev) => prev + 5)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-l hover:from-purple-600 hover:to-accent hover:scale-105"
          >
            <FiArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
