import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image, 
  buttonText = "Saiba mais", 
  buttonLink = "/contato" 
}) => {
  return (
    <div className="relative h-[70vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">{subtitle}</p>
        {buttonText && (
          <Link 
            to={buttonLink} 
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;