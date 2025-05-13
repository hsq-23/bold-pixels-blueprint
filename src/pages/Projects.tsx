
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Sample projects data
const allProjects = [
  {
    id: "project1",
    title: "Smart Home IoT System",
    description: "A comprehensive IoT solution for home automation using Arduino, Raspberry Pi, and custom sensors.",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IoT", "Home Automation", "Arduino", "Raspberry Pi"],
    category: "IoT",
    colorClass: "bg-pastel-blue"
  },
  {
    id: "project2",
    title: "E-commerce Analytics Dashboard",
    description: "Data visualization platform for e-commerce businesses to track sales, inventory, and customer behavior.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Data Science", "React", "D3.js", "API"],
    category: "Data Science",
    colorClass: "bg-pastel-green"
  },
  {
    id: "project3",
    title: "AI Content Generator",
    description: "Machine learning application that generates blog articles and social media content based on user input.",
    imageUrl: "https://images.unsplash.com/photo-1677442135137-3743b6be7237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    tags: ["AI", "ML", "Python", "NLP"],
    category: "Data Science",
    colorClass: "bg-pastel-pink"
  },
  {
    id: "project4",
    title: "Environmental Monitoring Station",
    description: "IoT device that collects data on air quality, temperature, humidity, and noise levels for urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IoT", "Environmental", "ESP32", "Sensors"],
    category: "IoT",
    colorClass: "bg-pastel-yellow"
  },
  {
    id: "project5",
    title: "Personal Finance Web App",
    description: "Full-stack web application for tracking personal expenses, generating reports, and setting financial goals.",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Web Development", "React", "Node.js", "MongoDB"],
    category: "Web Development",
    colorClass: "bg-pastel-blue"
  },
  {
    id: "project6",
    title: "Customer Segmentation Tool",
    description: "Data analysis application that uses clustering algorithms to segment customers for targeted marketing.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    tags: ["Data Science", "Python", "Clustering", "Marketing"],
    category: "Data Science",
    colorClass: "bg-pastel-green"
  },
  {
    id: "project7",
    title: "Smart Irrigation System",
    description: "IoT solution for agricultural use that optimizes water usage based on soil conditions and weather forecasts.",
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    tags: ["IoT", "Agriculture", "Water Conservation", "Sensors"],
    category: "IoT",
    colorClass: "bg-pastel-pink"
  },
  {
    id: "project8",
    title: "E-learning Platform",
    description: "Comprehensive web application for online courses with video hosting, assignments, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Web Development", "React", "Firebase", "Video Streaming"],
    category: "Web Development",
    colorClass: "bg-pastel-yellow"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">My Projects</h1>
          <p className="text-xl max-w-4xl">
            A collection of my work across web development, IoT solutions, and data science. Each project represents a unique challenge and solution.
          </p>
        </div>
      </section>
      
      {/* Filter and Search */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 border-2 border-black ${
                    activeCategory === category ? 'bg-black text-white' : 'bg-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                className="neo-input w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  {...project} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">No projects found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-neon-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk">Have a project in mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always looking for interesting projects and collaborations. Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="inline-block neo-button bg-black text-white">
            <Link to="/contact">Get In Touch</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
