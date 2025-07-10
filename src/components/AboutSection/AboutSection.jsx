// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import './AboutSection.css'; // Importa el CSS del componente (puedes dejarlo vacío si no tiene estilos específicos)

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center mb-5">Sobre Mí 👤</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <p>"Cada línea de código es una oportunidad para hacer las cosas más simples y potentes." 💡</p>
            <p>Soy un Analista Programador apasionado por integrar interfaces Frontend modernas con sistemas Backend robustos. Motivado por el desafío de construir plataformas que conecten funcionalidad y experiencia de usuario. 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;