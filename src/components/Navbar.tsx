import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center border-b border-gray-200">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://i.imgur.com/4XkEmOp.png" alt="TC Turismo Logo" className="h-20" />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/sobre', '/serviços', '/eventos', '/notícias', '/contato'].map((path, index) => (
              <Link 
                key={index} 
                to={path} 
                className={`hover:text-secondary transition-colors ${location.pathname === path ? 'text-secondary font-bold' : ''}`}
              >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {['/', '/sobre', '/serviços', '/eventos', '/notícias', '/contato'].map((path, index) => (
              <Link 
                key={index} 
                to={path} 
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 ${location.pathname === path ? 'text-secondary font-bold' : ''}`}
                onClick={toggleMenu}
              >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
