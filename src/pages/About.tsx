import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <section className="py-20 bg-pastel-green">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <p className="text-xl max-w-3xl">
            I am Elvan Nasrul, a passionate developer and engineer dedicated to creating innovative solutions. With a background in IoT, data science, and web development, I bring a unique perspective to every project.

            My journey began with a fascination for technology and its potential to transform the world. This led me to pursue a career where I could combine my technical skills with my creativity to build impactful products.

            I believe in continuous learning and staying up-to-date with the latest trends in the industry. Whether it's exploring new frameworks, experimenting with machine learning algorithms, or diving into the world of connected devices, I am always eager to expand my knowledge and push the boundaries of what's possible.

            When I'm not coding, you can find me exploring the outdoors, reading about science and technology, or tinkering with hardware projects.
          </p>
        </div>
      </section>
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <ul className="list-disc pl-5">
                <li>React</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">IoT</h3>
              <ul className="list-disc pl-5">
                <li>Arduino</li>
                <li>Raspberry Pi</li>
                <li>Sensor Integration</li>
                <li>Embedded Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Data Science</h3>
              <ul className="list-disc pl-5">
                <li>Python</li>
                <li>Machine Learning</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-pastel-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Education</h2>
          <div>
            <h3 className="text-xl font-bold mb-2">University of Example</h3>
            <p className="mb-1">Bachelor of Science in Computer Science</p>
            <p className="text-gray-600">2015 - 2019</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
