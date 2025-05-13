
import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-neon-green">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Get In Touch</h1>
          <p className="text-xl max-w-4xl">
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-2">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-space-grotesk">Email</h3>
                    <a href="mailto:hello@johndoe.com" className="hover:underline">hello@johndoe.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-2">
                    <svg 
                      className="text-white w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-space-grotesk">Phone</h3>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-2">
                    <svg 
                      className="text-white w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-space-grotesk">Location</h3>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Follow Me</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/johndoe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neo-card p-3 hover:bg-pastel-yellow transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neo-card p-3 hover:bg-pastel-blue transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:hello@johndoe.com"
                  className="neo-card p-3 hover:bg-pastel-green transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="https://instagram.com/johndoe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neo-card p-3 hover:bg-pastel-pink transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Send Me a Message</h2>
              <div className="neo-card p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-pastel-pink">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-space-grotesk text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="neo-card p-6">
              <h3 className="text-xl font-bold mb-3 font-space-grotesk">What services do you offer?</h3>
              <p>
                I offer web development, IoT solutions, and data science services. This includes full-stack development, IoT system design, data analysis, and visualization.
              </p>
            </div>
            
            <div className="neo-card p-6">
              <h3 className="text-xl font-bold mb-3 font-space-grotesk">How do you charge for projects?</h3>
              <p>
                Each project is unique, so I offer custom quotes based on scope, timeline, and complexity. I work on both fixed-price and hourly arrangements.
              </p>
            </div>
            
            <div className="neo-card p-6">
              <h3 className="text-xl font-bold mb-3 font-space-grotesk">What is your typical process?</h3>
              <p>
                I start with a discovery phase to understand your needs, create a detailed proposal, then move into design, development, testing, and deployment with regular check-ins.
              </p>
            </div>
            
            <div className="neo-card p-6">
              <h3 className="text-xl font-bold mb-3 font-space-grotesk">Do you take on international clients?</h3>
              <p>
                Yes, I work with clients globally. Remote collaboration tools make it easy to communicate and deliver projects regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
