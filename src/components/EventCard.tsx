import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-secondary mb-2">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>


        <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-light transition-colors">
          <Link to="/contato">
            Saiba mais
          </Link>
        </button>


      </div>
    </div>
  );
};

export default EventCard;