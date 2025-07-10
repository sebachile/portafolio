// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p>&copy; {new Date().getFullYear()} Sebastián Sandoval Rojas. Todos los derechos reservados.</p> {/* Actualizado el año */}
      <a href="#inicio" className="text-reset">Volver Arriba ↑</a>
    </footer>
  );
};

export default Footer;