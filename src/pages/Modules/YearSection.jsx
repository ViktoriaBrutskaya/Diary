import React, { useState, useEffect } from 'react';
import ModuleCard from '../../components/ModuleCard'; 

const YearSection = ({ yearTitle, color, modules, isOpen, onToggle, onModuleClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 500;
  const isTablet = windowWidth > 500 && windowWidth <= 1024;


  const sectionStyle = {
    width: "100%",
    marginBottom: isMobile ? "10px" : "20px", 
    fontFamily: "sans-serif"
  };

  const headerStyle = {
    backgroundColor: color,
    padding: isMobile ? "10px 20px" : "15px 40px",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: isMobile ? "20px" : "28px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    marginBottom: isOpen ? (isMobile ? "15px" : "30px") : "0"
  };

  const gridStyle = {
    display: isOpen ? "grid" : "none",
  
    gridTemplateColumns: isMobile 
      ? "1fr" 
      : isTablet 
        ? "repeat(2, 260px)" 
        : "repeat(3, 300px)", 
    
    gap: isMobile||isTablet ? "15px" : "30px",
    padding: "10px",
    justifyContent: "center",
    justifyItems: "center"
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle} onClick={onToggle}>
        {yearTitle}
      </div>

      <div style={gridStyle}>
        {modules.map((module, index) => (
          <div key={index} onClick={() => onModuleClick(module)} style={{ cursor: "pointer" }}>
            <ModuleCard 
              color={color}
              title={module.title}
              desc={module.desc}
              icon={module.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearSection;