import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";

const Journey = () => {
  return (
    <section id="journey" className="bg-black px-2 md:px-4 pt-10">
      <div className="container mx-auto">
        <AnimatedText
          text="My Professional Journey"
          textStyles="h2 mb-12 font-bold text-center text-left text-accent md:text-5xl"
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;
