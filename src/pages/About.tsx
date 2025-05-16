import React from 'react';
import Layout from '../components/Layout';
import SkillsList from '../components/SkillsList';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Sample skills data
const technicalSkills = [
  { name: "JavaScript/TypeScript" },
  { name: "React & React Native" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "IoT Prototyping" },
  { name: "TensorFlow & PyTorch" },
  { name: "SQL & NoSQL Databases" },
  { name: "AWS & Cloud Services" }
];

const designSkills = [
  { name: "UI/UX Design" },
  { name: "Responsive Design" },
  { name: "Figma & Sketch" },
  { name: "Design Systems" }
];

const toolsUsed = [
  { name: "VS Code" },
  { name: "GitHub" },
  { name: "Docker" },
  { name: "Arduino IDE" },
  { name: "Jupyter Notebooks" },
  { name: "Postman" },
  { name: "Firebase" },
  { name: "MongoDB Atlas" }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-pastel-blue">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a multidisciplinary tech professional with expertise in web development, IoT solutions, and data science. I love solving complex problems and creating user-friendly experiences.
          </motion.p>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-space-grotesk px-6 py-3 bg-pastel-pink inline-block border-4 border-black shadow-neo">My Journey</h2>
            <div className="space-y-4">
              <p>
                With over 8 years of experience in the tech industry, I've worked on projects ranging from small startups to enterprise-level applications. My background in computer science, combined with my passion for IoT and data science, allows me to approach problems from multiple perspectives.
              </p>
              <p>
                I started my career as a web developer, gradually expanding my expertise to include IoT systems and data analysis. This unique combination lets me build end-to-end solutions that integrate hardware sensors with powerful web interfaces and intelligent data processing.
              </p>
              <p>
                My goal is to create technology that improves people's lives while being accessible, efficient, and enjoyable to use. I'm particularly interested in projects related to smart homes, environmental monitoring, and data visualization.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new IoT devices in my home lab.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white border-4 border-black p-4 shadow-neo-lg">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="John Doe working" 
                className="w-full h-auto border-2 border-black"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-neon-yellow p-3 border-2 border-black shadow-neo-sm transform -rotate-6">
              <span className="font-bold">Always learning!</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-pastel-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-space-grotesk text-center px-8 py-4 bg-neon-green inline-block border-4 border-black shadow-neo mx-auto">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillsList 
              title="Technical Skills" 
              skills={technicalSkills} 
              colorClass="bg-white"
            />
            
            <SkillsList 
              title="Design Skills" 
              skills={designSkills} 
              colorClass="bg-white"
            />
            
            <SkillsList 
              title="Tools I Use" 
              skills={toolsUsed} 
              colorClass="bg-white"
            />
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-space-grotesk text-center px-6 py-3 bg-pastel-green inline-block border-4 border-black shadow-neo mx-auto">Work Experience</h2>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="neo-card p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk">Senior Full Stack Developer</h3>
                  <p className="text-lg">TechInnovate Inc.</p>
                </div>
                <p className="text-lg font-mono mt-2 md:mt-0">2020 - Present</p>
              </div>
              <p className="mb-4">
                Leading development of web and IoT applications, managing a team of 5 developers, and designing data processing pipelines for client projects.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed a real-time monitoring system for industrial equipment using IoT sensors</li>
                <li>Created a React-based dashboard for visualizing complex data sets</li>
                <li>Implemented machine learning algorithms to predict system failures</li>
              </ul>
            </div>
            
            <div className="neo-card p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk">IoT Solutions Architect</h3>
                  <p className="text-lg">Smart Systems Ltd.</p>
                </div>
                <p className="text-lg font-mono mt-2 md:mt-0">2018 - 2020</p>
              </div>
              <p className="mb-4">
                Designed and implemented IoT systems for smart buildings and environmental monitoring applications.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Built an energy monitoring system that reduced client energy costs by 22%</li>
                <li>Developed custom sensor networks for agricultural applications</li>
                <li>Created web interfaces for IoT management systems</li>
              </ul>
            </div>
            
            <div className="neo-card p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk">Web Developer</h3>
                  <p className="text-lg">Digital Creators Studio</p>
                </div>
                <p className="text-lg font-mono mt-2 md:mt-0">2015 - 2018</p>
              </div>
              <p className="mb-4">
                Developed responsive websites and web applications for clients across various industries.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Programmed front-end interfaces using JavaScript frameworks</li>
                <li>Implemented back-end systems using Node.js and Python</li>
                <li>Worked with design team to create visually appealing UIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-pastel-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-space-grotesk text-center px-8 py-4 bg-neon-blue text-white inline-block border-4 border-black shadow-neo mx-auto">Education</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="neo-card p-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold font-space-grotesk">Master of Science in Computer Science</h3>
                <p className="text-lg font-mono mt-2 md:mt-0">2013 - 2015</p>
              </div>
              <p className="text-lg">University of Technology</p>
              <p className="mt-2">Specialization in Machine Learning and IoT Systems</p>
            </div>
            
            <div className="neo-card p-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold font-space-grotesk">Bachelor of Science in Computer Engineering</h3>
                <p className="text-lg font-mono mt-2 md:mt-0">2009 - 2013</p>
              </div>
              <p className="text-lg">State University</p>
              <p className="mt-2">Minor in Data Science</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-neon-pink text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk px-8 py-4 bg-white inline-block border-4 border-black shadow-neo mx-auto">Ready to start a project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to turn your ideas into reality. Whether you need a website, IoT solution, or data analysis, I'm here to help.
          </p>
          <Link to="/contact" className="neo-button bg-white text-black inline-block">
            Contact Me
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
