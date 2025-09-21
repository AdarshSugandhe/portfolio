"use client";

import { motion } from "framer-motion";

const RotatingShape = ({ content, direction, duration }) => {
  const rotationAnimation = {
    animate: {
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div variants={rotationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};

export default RotatingShape;
