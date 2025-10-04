"use client";
import { projects } from "@/lib/data.js";
import { useEffect, useRef } from "react";

function HorizontalRow({ row, reverse }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rowEl = rowRef.current;
      if (!rowEl) return;

      const viewportHeight = window.innerHeight;
      const rowTop = rowEl.getBoundingClientRect().top;
      const rowHeight = rowEl.offsetHeight;

      let progress =
        (viewportHeight - rowTop) / (viewportHeight + rowHeight / 2);
      progress = Math.min(Math.max(progress, 0), 10);

      const direction = reverse ? 1 : -1;
      const maxTranslate = rowEl.scrollWidth - window.innerWidth;

      rowEl.style.transform = `translateX(${
        direction * progress * maxTranslate * 0.5
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [reverse]);

  return (
    <div
      ref={rowRef}
      className="flex w-[120vw] will-change-transform transition-transform duration-75 ease-linear"
    >
      {row.map((src, i) => (
        <div
          key={i}
          className="relative p-[1.25vw] w-1/2 sm:p-[1.2vw] xs:p-[2.5vw]"
        >
          <div className="relative w-full overflow-hidden before:block before:content-[''] before:pb-[75%]">
            {src.endsWith(".mp4") ? (
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={src}
                loop
                muted
                autoPlay
                playsInline
              />
            ) : (
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const HorizontalScrollPage = () => {
  return (
    <section className="bg-black overflow-hidden pt-[40px] pb-[40px]">
      <div className="relative h-[calc(100vw/4.3)]">
        <div className="flex flex-col absolute top-0 -left-6 md:-left-12 w-full">
          <HorizontalRow row={projects[0]} reverse={false} />
        </div>
      </div>

      <div className="relative h-[calc(100vw/4.3)]">
        <div className="flex flex-col absolute top-0 -left-16 md:-left-32 lg:-left-62 xl:-left-64 w-full">
          <HorizontalRow row={projects[1]} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollPage;
