// src/components/ProjectsSection/ProjectsSection.jsx
import React from 'react';
import './ProjectsSection.css'; // Importa el CSS del componente

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="section-padding" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center mb-5">Proyectos Destacados 🏆</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="http://cronok2.cl" target="_blank" rel="noopener noreferrer" className="text-reset text-decoration-none">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Gestión de Campeonatos 🏅</h5>
                  <p className="card-text">Optimización de flujo de gestión de eventos deportivos.</p>
                  <p><strong>Tecnologías:</strong> PHP, MySQL, CSS </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <div className="card project-card">
              <div className="card-body">
                <h5 className="card-title">Sistema de Comandas 🍽️</h5>
                <p className="card-text">Diseño e implementación de sistema de comandas y gestión de ganancias.</p>
                <p><strong>Tecnologías:</strong> C#, WPF, MySQL, AWS ☁️</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <a href="http://cronok2.cl" target="_blank" rel="noopener noreferrer" className="text-reset text-decoration-none">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Inscripción de Pilotos 🏍️</h5>
                  <p className="card-text">Creación del sistema de inscripción de pilotos, aumentando un 20% la eficiencia.</p>
                  <p><strong>Tecnologías:</strong> PHP, MySQL 🗃️</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 mt-4">
            <a href="http://noahdistribuidora.cl" target="_blank" rel="noopener noreferrer" className="text-reset text-decoration-none">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Noah Distribuidora 📦</h5>
                  <p className="card-text">Desarrollé y publiqué desde cero la landing page de Distribuidora Noah con catálogos actualizados. Se implementaron códigos QR para facilitar el acceso a los productos desde móviles.</p>
                  <p><strong>Tecnologías:</strong> PHP, HTML, CSS</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 mt-4">
            <a href="https://sernoval.free.nf/" target="_blank" rel="noopener noreferrer" className="text-reset text-decoration-none">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Sernoval (en construcción) 🧑‍🔧</h5>
                  <p className="card-text">Diseñé y desarrollé desde cero la landing page oficial de SERNOVAL, empresa dedicada a la reparación de maquinaria agrícola y forestal. Todavía en construcción</p>
                  <p><strong>Tecnologías:</strong> PHP, HTML, CSS, Tailwind CSS</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;