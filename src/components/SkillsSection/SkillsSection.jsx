// src/components/SkillsSection/SkillsSection.jsx
import React from 'react';
import './SkillsSection.css';
// REMOVE the import for ScrollFloat: import ScrollFloat from '../ScrollFloat/ScrollFloat';

const SkillsSection = () => {
  // REMOVE the ref for the section: const skillsSectionRef = React.useRef(null);

  return (
    <section id="habilidades" className="skills-section section-padding" data-aos="fade-up" data-aos-duration="1000">
      {/* REMOVE the ref from the section tag if you added it: ref={skillsSectionRef} */}
      <div className="container">
        {/* Revert to a standard <h2> tag for the title */}
        <h2 className="text-center mb-5">Habilidades Técnicas 🛠️</h2>

        <div className="row">
          {/* ... (your skill category cards remain the same) ... */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-category-card">
              <h4>Frontend 🖥️</h4>
              <ul className="list-unstyled">
                <li>HTML 🌐</li>
                <li>CSS 🎨</li>
                <li>JavaScript 🧩</li>
                <li>Bootstrap 📦</li>
                <li>React.js ⚛️</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-category-card">
              <h4>Backend ⚙️</h4>
              <ul className="list-unstyled">
                <li>C# 🧠</li>
                <li>Python 🐍</li>
                <li>PHP 📜</li>
                <li>Java 🏗️</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-category-card">
              <h4>Base de datos 🗄️</h4>
              <ul className="list-unstyled">
                <li>MySQL 🐬</li>
                <li>Oracle 11g 🏭</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-category-card">
              <h4>Otros 🌟</h4>
              <ul className="list-unstyled">
                <li>WPF 🖼️</li>
                <li>Docker 🐳</li>
                <li>AWS ☁️</li>
                <li>Arquitectura MVC 🏗️</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;