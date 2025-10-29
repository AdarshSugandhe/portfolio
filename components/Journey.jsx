"use client"

import Cards from "./Cards/Cards";
import Heading from "./Heading";

const Journey = () => {
  return (
    <section id="journey" className="bg-black px-2 md:px-4 pt-10">
      <div className="container mx-auto">
        <Heading heading="MY PROFESSIONAL JOURNEY" styles="h2 font-bold text-center text-white text-[55px] md:text-8xl" />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;
