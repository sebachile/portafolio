// src/App.js
import React, { useEffect } from 'react'; // Eliminamos useState
import './App.css'; // Estilos globales de la app

// Componentes de tu portafolio migrados de HTML
import HeroSection from './components/HeroSection/HeroSection';
import ContactSection from './components/ContactSection/ContactSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Footer from './components/Footer/Footer';
import SplashCursor from './components/CursorSection/SplashCursor ';
import Particles from './components/Particles/Particles'; // Importa el nuevo componente Particles
// Para las animaciones AOS
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  // Eliminamos el estado y la lógica relacionada con Hyperspeed Presets
  // const [currentPreset, setCurrentPreset] = useState('one');
  // const handlePresetChange = (presetName) => { setCurrentPreset(presetName); };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // Simplificamos el contenedor principal ya que Hyperspeed ya no controla el posicionamiento
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Eliminamos el componente Hyperspeed */}
      {/* <Hyperspeed effectOptions={hyperspeedPresets[currentPreset]} /> */}

      {/* Eliminamos el div con los botones de preset */}
      {/* <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
          <h2>Cambiar Efecto Hiperespacial</h2>
          {Object.keys(hyperspeedPresets).map((key) => (
            <button
              key={key}
              onClick={() => handlePresetChange(key)}
              style={{
                margin: '5px',
                padding: '10px 15px',
                backgroundColor: currentPreset === key ? '#007bff' : '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1em'
              }}
            >
              Preset {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
          <p style={{ marginTop: '10px', fontSize: '0.9em' }}>
            (Haz clic y mantén presionado en cualquier parte de la pantalla para "acelerar" el efecto)
          </p>
      </div> */}

      {/* Renderiza tus secciones de portafolio */}
      <SplashCursor />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
    
  );
}

export default App;