import React from "react";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About: React.FC = () => (
  <div>
    <motion.section
      className="py-20 md:py-32 bg-pastel-yellow"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk leading-tight">
        About Me
      </h1>
      <p className="max-w-2xl mx-auto text-lg">
        I'm Elvan Nasrul, a passionate Full Stack Developer with a knack for creating innovative solutions. My expertise spans across web development, IoT, and data science, allowing me to tackle complex challenges with a versatile approach.
      </p>
    </motion.section>
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">My Journey</h2>
      <p className="mb-4">
        From tinkering with electronics as a kid to building full-fledged web applications, my journey in tech has been one of continuous learning and growth. I thrive on turning ideas into reality and am always eager to explore new technologies.
      </p>

      <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">Web Development</h3>
          <ul className="list-disc pl-5">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">IoT</h3>
          <ul className="list-disc pl-5">
            <li>Arduino</li>
            <li>Raspberry Pi</li>
            <li>MQTT</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Data Science</h3>
          <ul className="list-disc pl-5">
            <li>Python</li>
            <li>Pandas</li>
            <li>Scikit-learn</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Other</h3>
          <ul className="list-disc pl-5">
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default About;
