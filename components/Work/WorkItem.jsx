import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useLayoutEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkItem = (props) => {
  const { work, val, infoRefs } = props;
  const slideRefs = useRef([]);

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

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide) => {
        gsap.fromTo(
          slide,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      key={`work-${val}`}
      ref={(el) => (slideRefs.current[val] = el)}
      className="min-h-[700px] flex items-center justify-center mx-2 md:mx-4 overflow-hidden"
      style={{ backgroundColor: work.bgColor }}
    >
      <div className="container mx-auto py-16 flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
        {/* Slider */}
        <div className="w-full lg:w-2/3 px-2 md:px-6">
          <Slider {...settings}>
            {Object.values(work.img).map((src, i) => (
              <div
                key={`slide-${val}-${i}`}
                className="h-[260px] sm:h-[350px] md:h-[450px] xl:h-[520px] flex items-center"
              >
                <a
                  href={work.href}
                  target="_blank"
                  className="block w-full h-full overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${work.title} screenshot ${i + 1}`}
                    width={850}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Info */}
        <div
          ref={(el) => (infoRefs.current[val] = el)}
          className="flex-1 text-white text-left overflow-hidden px-2 md:px-6 self-end"
        >
          <h1 className="text-4xl md:text-[40px] font-extrabold mb-2 text-white">
            {work.title}
          </h1>
          <p className="uppercase tracking-wider text-white/80 mb-6 text-sm sm:text-base">
            — {work.category}
          </p>
          <p className="pb-4 font-medium leading-5">{work.description.first}</p>
          <p className="pb-4 font-medium leading-5">
            {work.description.second}
          </p>
          <p className="font-medium leading-5">{work.description.third}</p>
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
          <div className="flex gap-3 mt-4">
            <Link
              href={work.href}
              target="_blank"
              className="text-xs inline-flex items-center gap-1 group"
            >
              VIEW WEBSITE
              <FiArrowRight className="-rotate-45 group-hover:scale-125 transition-transform duration-300" />
            </Link>
            {work.githubUrl && (
              <Link
                href={work.githubUrl}
                target="_blank"
                className="text-xs inline-flex items-center gap-1 group"
              >
                GitHub
                <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
