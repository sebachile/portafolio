// src/components/ShinyText/ShinyText.jsx
import React from 'react';
import './ShinyText.css'; // Importa los estilos para el efecto

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  // Define una variable CSS para la velocidad de la animación.
  // Es importante usar '--css-variable-name' para que CSS pueda acceder a ella.
  const inlineStyle = {
    '--shiny-speed': `${speed}s`, // <-- ¡Esta es la corrección clave!
  };

  // Combina la clase base 'shiny-text' con 'disabled' (si aplica) y cualquier className adicional
  const combinedClassName = `shiny-text ${disabled ? 'disabled' : ''} ${className}`;

  return (
    <span // Cambiado a <span>, ya que el efecto de texto suele aplicarse mejor a elementos inline.
      className={combinedClassName}
      style={inlineStyle} // Aplica la variable CSS a través del estilo inline
    >
      {text}
    </span>
  );
};

export default ShinyText;