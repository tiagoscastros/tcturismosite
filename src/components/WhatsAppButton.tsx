import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsappButton = () => {
  const phoneNumber = '5551980556647';
  const message = 'Gostaria de mais informações sobre o TCturismo';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transform transition-all"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" /> {/* Ícone do WhatsApp */}
    </a>
  );
};

export default WhatsappButton;