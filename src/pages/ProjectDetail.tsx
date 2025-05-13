
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

// Sample project data - would typically come from an API or database
const projects = [
  {
    id: "project1",
    title: "Smart Home IoT System",
    description: "A comprehensive IoT solution for home automation using Arduino, Raspberry Pi, and custom sensors.",
    fullDescription: `
      This smart home system integrates various sensors and devices to create an automated, efficient living environment. 
      The system monitors temperature, humidity, motion, and energy usage throughout the home, providing real-time data 
      and allowing for remote control of connected devices.

      The heart of the system is a Raspberry Pi acting as the central hub, with Arduino microcontrollers managing individual 
      sensor nodes. Custom PCBs were designed for the sensor modules to ensure reliability and compactness.

      The user interface is a responsive web application built with React, allowing users to monitor their home from 
      anywhere and set automated routines. The system includes machine learning algorithms that learn from user behavior 
      to suggest optimizations for energy savings.
    `,
    challenge: `
      The biggest challenge was creating a unified system from diverse hardware components while ensuring reliable 
      communication between devices. Power management for battery-operated sensors and secure remote access were 
      additional hurdles that required careful consideration.
    `,
    solution: `
      I developed a custom communication protocol that balances power efficiency with reliability, using MQTT for 
      message passing. For security, I implemented end-to-end encryption and two-factor authentication for the web interface. 
      Battery life was extended by optimizing sleep cycles and transmission frequencies based on usage patterns.
    `,
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1563731657319-83690af04011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80"
    ],
    tags: ["IoT", "Home Automation", "Arduino", "Raspberry Pi"],
    tools: ["Arduino", "Raspberry Pi", "React", "Node.js", "MQTT", "Python", "C++"],
    demoUrl: "https://smarthome-demo.example.com",
    repoUrl: "https://github.com/johndoe/smart-home",
    colorClass: "bg-pastel-blue"
  },
  // Additional project details would be here...
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`py-20 ${project.colorClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/projects" className="flex items-center font-bold text-lg hover:underline w-fit">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-black text-white px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Image */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="neo-card p-4 md:p-6 mb-12">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto border-2 border-black"
            />
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 font-space-grotesk">Project Overview</h2>
              <div className="space-y-4 mb-8">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-4 font-space-grotesk">The Challenge</h2>
              <div className="space-y-4 mb-8">
                {project.challenge.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-4 font-space-grotesk">The Solution</h2>
              <div className="space-y-4 mb-8">
                {project.solution.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
              
              {/* Additional Images */}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4 font-space-grotesk">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.additionalImages.map((img, index) => (
                      <div key={index} className="border-2 border-black overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${project.title} image ${index + 1}`} 
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div>
              <div className="neo-card p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 font-space-grotesk">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="inline-block bg-pastel-yellow border border-black px-2 py-1 text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Links</h4>
                    <div className="space-y-2">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}
                      
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                          </svg>
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="neo-card p-6">
                <h3 className="text-xl font-bold mb-4 font-space-grotesk">Interested in a similar project?</h3>
                <p className="mb-4">Let's discuss how I can help you bring your ideas to life.</p>
                <Link to="/contact" className="neo-button bg-neon-pink text-white block text-center">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Prev Projects - This would typically be more dynamic */}
      <section className="py-10 bg-pastel-green">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <Link to="/projects" className="neo-button">
              All Projects
            </Link>
            
            <Link to="/contact" className="neo-button bg-black text-white">
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
