
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { Separator } from '../components/ui/separator';

// Sample projects data - in a real app, this would come from an API or database
const featuredProjects = [
  {
    id: "project1",
    title: "Smart Home IoT System",
    description: "A comprehensive IoT solution for home automation using Arduino, Raspberry Pi, and custom sensors.",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IoT", "Home Automation", "Arduino", "Raspberry Pi"],
    colorClass: "bg-pastel-blue"
  },
  {
    id: "project2",
    title: "E-commerce Analytics Dashboard",
    description: "Data visualization platform for e-commerce businesses to track sales, inventory, and customer behavior.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Data Science", "React", "D3.js", "API"],
    colorClass: "bg-pastel-green"
  },
  {
    id: "project3",
    title: "AI Content Generator",
    description: "Machine learning application that generates blog articles and social media content based on user input.",
    imageUrl: "https://images.unsplash.com/photo-1677442135137-3743b6be7237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    tags: ["AI", "ML", "Python", "NLP"],
    colorClass: "bg-pastel-pink"
  }
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <Separator className="h-2 bg-black" />
      
      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk px-6 py-3 bg-pastel-blue inline-block border-4 border-black shadow-neo">Featured Projects</h2>
              <p className="text-lg max-w-xl mt-4">Check out some of my best work spanning web development, IoT solutions, and data science.</p>
            </div>
            <Link to="/projects" className="neo-button mt-4 md:mt-0">View All Projects</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                {...project} 
              />
            ))}
          </div>
        </div>
      </section>
      
      <Separator className="h-2 bg-black" />
      
      {/* What I Do Section */}
      <section className="py-20 bg-pastel-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-space-grotesk px-6 py-3 bg-neon-green inline-block border-4 border-black shadow-neo text-black">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-card p-6">
              <div className="w-16 h-16 bg-neon-blue flex items-center justify-center mb-4 border-2 border-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-space-grotesk px-4 py-2 bg-pastel-blue inline-block border-2 border-black">Web Development</h3>
              <p className="mt-4">Creating responsive, high-performance web applications using modern frameworks and best practices.</p>
            </div>
            
            <div className="neo-card p-6">
              <div className="w-16 h-16 bg-neon-green flex items-center justify-center mb-4 border-2 border-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-space-grotesk px-4 py-2 bg-pastel-green inline-block border-2 border-black">IoT Solutions</h3>
              <p className="mt-4">Designing and implementing connected device ecosystems that bring the physical world online.</p>
            </div>
            
            <div className="neo-card p-6">
              <div className="w-16 h-16 bg-neon-pink flex items-center justify-center mb-4 border-2 border-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-space-grotesk px-4 py-2 bg-pastel-pink inline-block border-2 border-black">Data Science</h3>
              <p className="mt-4">Extracting valuable insights from data using machine learning, statistical analysis, and visualization techniques.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Separator className="h-2 bg-black" />
      
      {/* CTA Section */}
      <section className="py-20 bg-neon-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk px-6 py-3 bg-black text-white inline-block border-4 border-white shadow-neo mx-auto">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and interesting collaborations.
          </p>
          <Link to="/contact" className="neo-button bg-white text-black inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
