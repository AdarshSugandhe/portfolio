"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent xl:bg-black" id="home">
      <Header />
      <div className="container mx-auto h-full px-2 md:px-4">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none font-semibold">
            <span className="xl:text-accent text-4xl md:text-5xl xl:text-6xl">
              I'm Adarsh,
            </span>
            <br />
            <span className="text-2xl md:text-4xl xl:text-white">
              I BUILD & DESIGN
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl">IMPACTFUL</span>
            <br className="xl:hidden" />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["WEBSITES", 2000, "APPS", 2000, "WEB APPS", 2000]}
              speed={50}
              className="ml-2 xl:ml-3 md:text-5xl xl:text-accent"
              repeat={Infinity}
              wrapper="span"
              cursor="false"
            />
          </h1>
          <p className="xl:text-white lead max-w-[476px] mb-7 ">
            I create custom websites that combine striking design with seamless
            performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn bg-black text-white xl:btn-accent xl:text-black font-semibold mb-8">
              Contact me
            </button>
          </ScrollLink>
          {/* <Stats /> */}
        </div>
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[4.5vw]">
            <Image
              src="/assets/hero/profile.png"
              fill
              quality="100"
              priority
              className="object-cover"
              alt="Profile picture"
            />
          </div>
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt="arrow"
            />
          </div>
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt="shape-1"
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt="shape-2"
                />
              }
              direction="left"
              duration={7}
            />
          </div>
          <div
            className="absolute top-[240px] xl:left-[30vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-2.svg"
                  width={38}
                  height={38}
                  alt="shape-3"
                />
              }
              direction="right"
              duration={5}
            />
          </div>

          <div className="absolute bottom-0 right-20">
            <ScrollLink to="work" smooth className="cursor-pointer">
              <div className="flex items-center">
                <p className="font-semibold text-gray-700 text-xl">
                  Scroll Down
                </p>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="none"
                  strokeWidth="1.5"
                  className="relative pb-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                  <path d="M6 15l6 6 6-6"></path>
                  <defs>
                    <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="50%"
                        stopColor="white"
                        stopOpacity="0.9"
                      ></stop>
                    </linearGradient>
                    <mask id="shine-mask">
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#shine)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="translate"
                          values="0 -40; 0 40"
                          dur="2s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </rect>
                    </mask>
                  </defs>
                  <g mask="url(#shine-mask)">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="#cfa355"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M6 15l6 6 6-6"
                      stroke="#cfa355"
                      strokeWidth="2"
                    ></path>
                  </g>
                </svg>
              </div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
