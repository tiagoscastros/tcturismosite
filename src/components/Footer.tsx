import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.imgur.com/4XkEmOp.png" alt="TC Turismo Logo" className="h-20" />
          </Link>
          <p className="text-gray-600 mb-4 hover:text-secondary transition-colors">
            Sua agência de turismo especializada em viagens corporativas e eventos. Desde 2021 realizando sonhos e facilitando negócios.
          </p>
        </div>
        
        {/* Quick links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-black hover:text-secondary transition-colors">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li>
            <li><Link to="/sobre" className="text-gray-600 hover:text-black transition-colors">Sobre Nós</Link></li>
            <li><Link to="/servicos" className="text-gray-600 hover:text-black transition-colors">Serviços</Link></li>
            <li><Link to="/eventos" className="text-gray-600 hover:text-black transition-colors">Eventos</Link></li>
            <li><Link to="/noticias" className="text-gray-600 hover:text-black transition-colors">Notícias</Link></li>
            <li><Link to="/contato" className="text-gray-600 hover:text-black transition-colors">Contato</Link></li>
          </ul>
        </div>
        
        {/* Services */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-black hover:text-secondary transition-colors">Nossos Serviços</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-black transition-colors">Passagens Aéreas</li>
            <li className="text-gray-600 hover:text-black transition-colors">Hospedagens</li>
            <li className="text-gray-600 hover:text-black transition-colors">Seguro Viagem</li>
            <li className="text-gray-600 hover:text-black transition-colors">Aluguel de Carros</li>
            <li className="text-gray-600 hover:text-black transition-colors">Excursões</li>
            <li className="text-gray-600 hover:text-black transition-colors">Roteiros Personalizados</li>
          </ul>
        </div>
        
        {/* Contact info */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-black hover:text-secondary transition-colors">Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-black" />
              <span className="text-gray-600 hover:text-black transition-colors">(51) 98055-6647</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-black" />
              <span className="text-gray-600 hover:text-black transition-colors">contato@tcturismors.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-black mt-1" />
              <span className="text-gray-600 hover:text-black transition-colors">Atendemos todo o Brasil</span>
            </li>
            <li className="flex items-center space-x-4 mt-4">
              <a href="https://facebook.com/tcturismors" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/tcturismors" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TC Turismo. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
  

  );
};

export default Footer;
