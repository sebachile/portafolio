// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import './ContactSection.css'; // Importa el CSS del componente

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center mb-5">Contacto 📞</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center contact-info">
            <p><strong>Email:</strong> <a href="mailto:seb.sandoval.r@gmail.com">seb.sandoval.r@gmail.com 📧</a></p>
            <p><strong>Teléfono:</strong> +56 9 9038 5028 📱</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/seb-sandovalr/" target="_blank" rel="noopener noreferrer">linkedin.com/in/seb-sandovalr/ 💼</a></p>
            <p><strong>Ubicación:</strong> Villa Alemana 📍</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;