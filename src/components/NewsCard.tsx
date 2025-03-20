import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, summary, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{summary}</p>
        <button className="mt-4 text-primary font-semibold hover:text-primary-light transition-colors">
          Ler mais →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;