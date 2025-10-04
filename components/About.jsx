"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const [age, setAge] = useState(null);

  useEffect(() => {
    setAge(new Date().getFullYear() - 2004);
  }, []);

  const aboutInfo = [
    { label: "Age", value: age ? age : "--" },
    { label: "Location", value: "Maharashtra, India" },
    { label: "Phone", value: "+91 8766813577" },
    { label: "Email", value: "adarshsugandhe2024@gmail.com" },
  ];

  return (
    <section
      id="about"
      className="relative py-16 bg-black text-gray-200 px-2 md:px-4"
    >
      <div className="container mx-auto">
        {/* Text Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <AnimatedText
            text="About Me"
            textStyles="h2 mb-12 font-bold text-left text-accent text-4xl md:text-5xl"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-purple-400">
            Hi, I'm Adarsh Sugandhe — MERN Stack Developer
          </h3>

          <p className="leading-relaxed max-w-2xl mx-auto sm:mx-0 text-white">
            I’m a Full-Stack Developer passionate about building efficient and
            user-friendly applications with React.js, Next.js, Node.js, and
            Express.js. <br /> I’ve worked on projects like doctor appointment
            systems with admin and doctor dashboards, and SaaS platforms,
            focusing on APIs, authentication, and databases. <br /> I love
            creating scalable solutions, learning new technologies, and
            delivering meaningful digital experiences.
          </p>

          <Link
            href="https://drive.google.com/file/d/1DpXRLxpZxPubkpjXQgf51p6bkuOGdirA/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-medium text-xs hover:bg-cyan-400 hover:text-black transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-cyan-500/70 group hover:font-bold"
          >
            VIEW RESUME
            <FiArrowRight className="transform -rotate-45 group-hover:scale-[1.2] transition-all duration-300" />
          </Link>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {aboutInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-lg hover:shadow-cyan-500/30 transition duration-300 text-center"
              >
                <div className="text-xs uppercase font-semibold tracking-wider text-cyan-400">
                  {item.label}
                </div>
                <p className="mt-1 text-base font-medium text-gray-100 break-words">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
