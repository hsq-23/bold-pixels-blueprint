
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    return `font-bold hover:underline transition-colors ${
      isActive(path) 
        ? 'bg-accent border-2 px-3 py-1 rounded border-black dark:border-white text-black dark:text-black' 
        : 'text-black dark:text-white hover:text-primary'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-space-grotesk">
            <span className="bg-neon-blue px-2 text-black">JOHN</span> <span className="bg-neon-pink px-2 text-black">DOE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/projects" className={navLinkClass('/projects')}>Projects</Link>
            <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleDarkMode}
              className="ml-2 border-2 border-black dark:border-white text-black dark:text-white"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-black" />}
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden border-2 border-black dark:border-white p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black dark:bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black dark:bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black dark:bg-white"></div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 bg-background border-t-2 border-black dark:border-white mt-4">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/projects" className={navLinkClass('/projects')}>Projects</Link>
            <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
            
            <Button 
              variant="outline" 
              onClick={toggleDarkMode} 
              className="flex items-center space-x-2 border-2 border-black dark:border-white w-fit text-black dark:text-white"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-black" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
