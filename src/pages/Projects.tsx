import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

// Sample projects data
const allProjects = [
  {
    id: "project1",
    title: "Smart Home IoT System",
    description: "A comprehensive IoT solution for home automation using Arduino, Raspberry Pi, and custom sensors.",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IoT", "Home Automation", "Arduino", "Raspberry Pi"],
    category: "IoT",
    colorClass: "bg-pastel-blue",
    githubUrl: "https://github.com/johndoe/smart-home",
    demoUrl: "https://smarthome-demo.example.com"
  },
  {
    id: "project2",
    title: "E-commerce Analytics Dashboard",
    description: "Data visualization platform for e-commerce businesses to track sales, inventory, and customer behavior.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Data Science", "React", "D3.js", "API"],
    category: "Data Science",
    colorClass: "bg-pastel-green",
    githubUrl: "https://github.com/johndoe/ecommerce-analytics",
    demoUrl: "https://analytics-demo.example.com"
  },
  {
    id: "project3",
    title: "AI Content Generator",
    description: "Machine learning application that generates blog articles and social media content based on user input.",
    imageUrl: "https://images.unsplash.com/photo-1677442135137-3743b6be7237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    tags: ["AI", "ML", "Python", "NLP"],
    category: "Data Science",
    colorClass: "bg-pastel-pink",
    githubUrl: "https://github.com/johndoe/ai-content-gen",
    demoUrl: "https://ai-content.example.com"
  },
  {
    id: "project4",
    title: "Environmental Monitoring Station",
    description: "IoT device that collects data on air quality, temperature, humidity, and noise levels for urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IoT", "Environmental", "ESP32", "Sensors"],
    category: "IoT",
    colorClass: "bg-pastel-yellow",
    githubUrl: "https://github.com/johndoe/env-monitor",
    demoUrl: "https://envmon.example.com"
  },
  {
    id: "project5",
    title: "Personal Finance Web App",
    description: "Full-stack web application for tracking personal expenses, generating reports, and setting financial goals.",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Web Development", "React", "Node.js", "MongoDB"],
    category: "Web Development",
    colorClass: "bg-pastel-blue",
    githubUrl: "https://github.com/johndoe/finance-app",
    demoUrl: "https://finance.example.com"
  },
  {
    id: "project6",
    title: "Customer Segmentation Tool",
    description: "Data analysis application that uses clustering algorithms to segment customers for targeted marketing.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    tags: ["Data Science", "Python", "Clustering", "Marketing"],
    category: "Data Science",
    colorClass: "bg-pastel-green",
    githubUrl: "https://github.com/johndoe/customer-segments",
    demoUrl: "https://segments.example.com"
  },
  {
    id: "project7",
    title: "Smart Irrigation System",
    description: "IoT solution for agricultural use that optimizes water usage based on soil conditions and weather forecasts.",
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    tags: ["IoT", "Agriculture", "Water Conservation", "Sensors"],
    category: "IoT",
    colorClass: "bg-pastel-pink",
    githubUrl: "https://github.com/johndoe/smart-irrigation",
    demoUrl: "https://irrigation.example.com"
  },
  {
    id: "project8",
    title: "E-learning Platform",
    description: "Comprehensive web application for online courses with video hosting, assignments, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Web Development", "React", "Firebase", "Video Streaming"],
    category: "Web Development",
    colorClass: "bg-pastel-yellow",
    githubUrl: "https://github.com/johndoe/elearning",
    demoUrl: "https://learn.example.com"
  }
];

// Categories for filtering
const categories = ["All", "Web Development", "IoT", "Data Science"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-pastel-pink">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my work across web development, IoT solutions, and data science. Each project represents a unique challenge and solution.
          </motion.p>
        </div>
      </section>
      
      {/* Filter and Search */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 border-2 border-black ${
                    activeCategory === category ? 'bg-black text-white' : 'bg-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05, translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search projects..."
                className="neo-input w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">No projects found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-neon-green">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Have a project in mind?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm always looking for interesting projects and collaborations. Let's discuss how I can help bring your ideas to life.
          </motion.p>
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.4,
              type: "spring",
              stiffness: 300,
            }}
          >
            <Link to="/contact" className="neo-button bg-black text-white">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
