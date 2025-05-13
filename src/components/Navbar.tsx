
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-space-grotesk">
            <span className="bg-neon-blue px-2">JOHN</span> <span className="bg-neon-pink px-2 text-white">DOE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-bold hover:underline">Home</Link>
            <Link to="/about" className="font-bold hover:underline">About</Link>
            <Link to="/projects" className="font-bold hover:underline">Projects</Link>
            <Link to="/blog" className="font-bold hover:underline">Blog</Link>
            <Link to="/contact" className="font-bold hover:underline">Contact</Link>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleDarkMode}
              className="ml-2 border-2 border-black"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden border-2 border-black p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 bg-background border-t-2 border-black mt-4">
            <Link to="/" className="font-bold hover:underline">Home</Link>
            <Link to="/about" className="font-bold hover:underline">About</Link>
            <Link to="/projects" className="font-bold hover:underline">Projects</Link>
            <Link to="/blog" className="font-bold hover:underline">Blog</Link>
            <Link to="/contact" className="font-bold hover:underline">Contact</Link>
            
            <Button 
              variant="outline" 
              onClick={toggleDarkMode} 
              className="flex items-center space-x-2 border-2 border-black w-fit"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
