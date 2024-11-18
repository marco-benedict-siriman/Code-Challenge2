import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton: React.FC = () => {
  // Nomor WhatsApp yang akan dituju
  const phoneNumber = "6282235176752"; // Ganti dengan nomor WhatsApp Anda

  // URL untuk membuka chat WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <p className="bg-green-500 p-2 rounded-full text-4xl">
        <FaWhatsapp></FaWhatsapp>
      </p>
    </a>
  );
};

export default WhatsAppButton;
