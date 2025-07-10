// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import ShinyText from '../ShinyText/ShinyText';
// import Orb from '../Orb/Orb'; // <--- Descomenta si quieres usar Orb en su lugar
import Particles from '../Particles/Particles'; // <--- Importa el nuevo componente Particles

const HeroSection = () => {
    return (
      <section id="inicio" className="hero-section">
        {/* Contenedor para el efecto de fondo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Particles
            particleCount={300}
            particleSpread={15}
            speed={0.15}
            // Cambia estos valores a tonos amarillos
            particleColors={["#FFD700", "#FFC107", "#FFA000", "#FFEC8B", "#FFFFE0"]} // <--- ¡Ajusta aquí!
            moveParticlesOnHover={true}
            particleHoverFactor={0.5}
            alphaParticles={true}
            particleBaseSize={150}
            sizeRandomness={0.8}
            cameraDistance={25}
            disableRotation={false}
          />
        </div>
  
        {/* Contenido existente del Hero */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1>
            <ShinyText text="Sebastián Sandoval Rojas 🚀" disabled={false} speed={5} className='custom-class' />
          </h1>
          <p>Analista Programador Computacional 💻</p>
          <p>Transformando ideas en soluciones tecnológicas simples, eficientes y escalables. 🌟</p>
          <a href="#proyectos" className="btn btn-custom">Ver Proyectos 📂</a>
          <a href="#contacto" className="btn btn-custom ms-3">Contactame 📞</a>
          <a href="/assets/CVSEBASTIANSANDOVAL.pdf" download className="btn btn-custom ms-3">Descargar CV 📥</a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;