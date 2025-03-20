import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, testimonial, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-600 italic mb-4">"{testimonial}"</p>
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
      
    </div>
  );
};

export default TestimonialCard;