import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  const phoneNumber = '51946589808'; // tu número con código país

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-600 text-white py-3 px-4 rounded-full shadow-lg"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '12px 16px',
        borderRadius: '50px',
        zIndex: 9999,
        fontWeight: 'bold'
      }}    
    >
      <FaWhatsapp size={24} />
      WhatsApp
    </a>
  );
};

export default WhatsAppFloatingButton;
