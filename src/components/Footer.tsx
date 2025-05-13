
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t-4 border-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-space-grotesk">John Doe</h3>
            <p className="mb-4">
              Full Stack Developer, IoT Engineer & Data Scientist based in Jakarta, Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" 
                className="bg-black text-white p-2 hover:bg-gray-800 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"
                className="bg-black text-white p-2 hover:bg-gray-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@johndoe.com"
                className="bg-black text-white p-2 hover:bg-gray-800 transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer"
                className="bg-black text-white p-2 hover:bg-gray-800 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-space-grotesk">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/projects" className="hover:underline">Projects</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-space-grotesk">Get in Touch</h3>
            <p className="mb-2">hello@johndoe.com</p>
            <p className="mb-2">+62 812 3456 7890</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        
        <div className="border-t-2 border-black mt-8 pt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-2">
            Built with React & TailwindCSS in Neobrutalism style.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
