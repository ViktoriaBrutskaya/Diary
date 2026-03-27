import React, { useState } from 'react';

const Button = ({ 
  text, 
  color = "var(--color-blue)", 
  width = "200px", 
  onClick 
}) => {
const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    backgroundColor: color,
    width: width,
    color: 'white',
    border: 'none',
    padding: '12px 0',
    borderRadius: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
    display: 'block',
    margin: '20px auto 0',

    // --- АНИМАЦИЯ ХОВЕРА ---
    transition: 'all 0.2s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
    boxShadow: isHovered ? '0 4px 15px rgba(0,0,0,0.2)' : '0 4px 0 rgba(0,0,0,0.1)',
  };

  return (
    <button style={btnStyle} onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;