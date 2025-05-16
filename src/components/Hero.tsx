
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-x-clip">
      {/* Removed ArrowBackButton */}
      <motion.div
        className="absolute inset-0 bg-pastel-yellow -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div variants={heroVariants} className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk leading-tight">
            Hi, I'm <span className="bg-neon-pink text-white px-2">Elvan Nasrul</span>
          </h1>
          
          <motion.h2 className="text-2xl md:text-4xl font-bold mb-6 font-satoshi" variants={heroVariants}>
            I build <span className="bg-neon-blue px-2">websites</span>, create <span className="bg-neon-green px-2">IoT solutions</span> & analyze <span className="bg-neon-yellow px-2">data</span>
          </motion.h2>
          
          <motion.p className="text-lg mb-8 max-w-lg" variants={heroVariants}>
            Full stack developer, IoT engineer, and data scientist with a passion for creating innovative solutions that make a difference.
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4" variants={heroVariants}>
            <Link to="/projects" className="neo-button">
              See My Work
            </Link>
            <Link to="/contact" className="neo-button bg-neon-pink text-white">
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={heroVariants}
          className="order-1 md:order-2"
        >
          <div className="bg-white border-4 border-black p-4 shadow-neo-lg transform rotate-3 relative">
            <div className="w-full pb-[100%] bg-gray-200 border-2 border-black overflow-hidden">
              <img 
                src="IMG_20230710_015043.jpg" 
                alt="Elvan Nasrul's Portrait" 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-neon-green text-black p-3 border-2 border-black transform rotate-6 shadow-neo-sm font-bold">
              That's me!
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
