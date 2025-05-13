
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Framer, LayoutList } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <div className="fixed bottom-8 right-8 flex flex-col gap-3">
        <a 
          href="https://framer.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="neo-button bg-neon-pink text-white flex items-center gap-2 py-2 px-4"
          aria-label="Framer Profile"
        >
          <Framer className="h-5 w-5" />
          <span className="hidden sm:inline">Framer</span>
        </a>
        <a 
          href="https://notion.so" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="neo-button bg-neon-blue text-white flex items-center gap-2 py-2 px-4"
          aria-label="Notion Profile"
        >
          <LayoutList className="h-5 w-5" />
          <span className="hidden sm:inline">Notion</span>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
