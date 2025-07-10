// src/components/ExperienceSection/ExperienceSection.jsx
import React from 'react';
import './ExperienceSection.css'; // Importa el CSS del componente (puedes dejarlo vacío)

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center mb-5">Experiencia Laboral 📈</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>CRONOK2.CL 🏆</h4>
            <p><small>DIC 2024 – MAR 2025</small></p>
            <ul>
              <li>Desarrollo y optimización de la base de datos y sitio web de gestión de campeonatos.</li>
              <li>Participación en migración de dominio y optimización de flujo de gestión de eventos deportivos.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>RESTAURANT PUQUÉN 🍽️</h4>
            <p><small>AGO 2023 – FEB 2024</small></p>
            <ul>
              <li>Diseñé e implementé un sistema integral de comandas y gestión de ganancias para Restaurant Puquen, optimizando operaciones y mejorando la eficiencia del personal.</li>
              <li>Utilicé MySQL, C#, HTML y PHP, con la base de datos alojada en AWS para asegurar disponibilidad y rendimiento.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>PAYLOAD 🚀</h4>
            <p><small>MAY 2022 – OCT 2022</small></p>
            <ul>
              <li>Desarrollo de sistemas bajo patrón MVC. </li>
              <li>Diseño de bases de datos en MySQL optimizando estructuras para alto tráfico y reduciendo tiempos de consulta en un 22%. </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h4>CAPRAENDURO.CL 🏆</h4>
            <p><small>MAR 2021 – OCT 2021</small></p>
            <ul>
              <li>Creación del sistema de inscripción de pilotos, aumentando un 20% la eficiencia de la gestión de campeonatos. </li>
              <li>Implementación de mejoras en bases de datos para optimizar la carga y procesamiento de usuarios. </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>MONITORFISH 🐟</h4>
            <p><small>MAR 2020 – DIC 2020</small></p>
            <ul>
              <li>Etiquetado de imágenes para entrenamiento de algoritmos de visión por computadora. </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;