import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  const controls = useAnimation();
  const bgRef = useRef(null);

  useEffect(() => {
    controls.start("visible");

    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.pageYOffset;
        bgRef.current.style.backgroundPosition = `center ${offset * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      ref={bgRef}
      className="relative bg-gradient-to-br from-[#6a11cb] via-[#2575fc] to-[#00d4ff] text-white min-h-[60vh] flex flex-col justify-center items-center px-4 py-16 md:py-24 bg-fixed overflow-hidden"
    >
      <motion.div
        className="relative max-w-3xl text-center space-y-6 z-10 backdrop-blur-md bg-white/20 rounded-2xl p-6 shadow-xl border border-white/30"
        style={{ boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
          initial="hidden"
          animate={controls}
          custom={0}
          variants={headingVariants}
        >
          Find the Best Courses For You!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/80"
          initial="hidden"
          animate={controls}
          custom={1}
          variants={headingVariants}
        >
          Discover, learn, and upskill with our wide range of courses.
        </motion.p>

        <form className="mt-6 flex max-w-md mx-auto gap-3">
          <Input
            type="text"
            placeholder="Search courses..."
            aria-label="Search courses"
            className="flex-grow px-4 py-2 rounded-md text-gray-800 dark:text-white bg-white/80 dark:bg-gray-800/70 shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
          />
          <Button
            type="submit"
            className="bg-cyan-500 text-white font-semibold px-5 py-2 rounded-md shadow-lg hover:bg-cyan-600 transition-all duration-200"
          >
            Search
          </Button>
        </form>

        <motion.div
          className="mt-8 inline-block"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-200"
          >
            Explore Courses
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
