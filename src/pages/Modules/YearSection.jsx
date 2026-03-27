import React from 'react';
// 1. Обязательно импортируем ModuleCard, чтобы React знал, что это такое
import ModuleCard from '../../components/ModuleCard'; 

// 2. Добавляем onModuleClick в деструктуризацию пропсов (в скобках)
const YearSection = ({ yearTitle, color, modules, isOpen, onToggle, onModuleClick }) => {
  const sectionStyle = {
    width: "100%",
    marginBottom: "20px",
    fontFamily: "sans-serif"
  };

  const headerStyle = {
    backgroundColor: color,
    padding: "15px 40px",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "28px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    marginBottom: isOpen ? "30px" : "0"
  };

const gridStyle = {
  display: isOpen ? "grid" : "none",
  
  gridTemplateColumns: "repeat(auto-fill, 300px)", 
  gap: "30px",
  padding: "10px",
  justifyContent: "center" 
};

  return (
    <div style={sectionStyle}>
      {/* Полоска года */}
      <div style={headerStyle} onClick={onToggle}>
        {yearTitle}
      </div>

      {/* Сетка с модулями */}
      <div style={gridStyle}>
        {modules.map((module, index) => (
          /* Теперь onModuleClick передается извне и вызывается здесь */
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