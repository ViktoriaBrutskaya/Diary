import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Avatar from './Avatar'; 
import Kiberon from './Kiberon'; 

const Header = ({ onMenuClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const { user, isTutor } = useAuth(); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const headerStyle = {
    backgroundColor: "var(--color-blue)", 
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: isMobile ? "0 15px" : "0 40px",
    boxSizing: "border-box",
    width: "100%",
    flexShrink: 0,
    position: "relative"
  };

  const userBlockStyle = {
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "10px" : "20px" 
  };

  const nameStyle = {
    color: "white",
    fontSize: isMobile ? "20px" : "30px", 
    fontWeight: "500",
    fontFamily: "sans-serif"
  };

  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px" 
  };

  const burgerStyle = {
    cursor: "pointer",
    display: isMobile ? "flex" : "none", 
    flexDirection: "column",
    gap: "5px",
    padding: "5px" 
  };

  const lineStyle = {
    width: "25px",
    height: "3px",
    backgroundColor: "white",
    borderRadius: "2px"
  };

  return (
    <header style={headerStyle}>
      <div style={userBlockStyle}>
        <Avatar size={isMobile ? "60px" : "70px"} /> 
        
        {/* Отображаем имя из контекста. На мобилках тоже можно оставить, если влезет, 
            либо оставить твое условие !isMobile */}
        {!isMobile && <span style={nameStyle}>{user?.name || "Гость"}</span>}
        {isMobile && <span style={nameStyle}>{user?.name.split(' ')[0]}</span>} 
        {/* На мобилке вывел только имя (без фамилии), чтобы не ломать верстку */}
      </div>

      <div style={rightSectionStyle}>
        {/* Если НЕ тьютор — показываем кибероны */}
        {!isTutor && <Kiberon amount={450} />}

        <div style={burgerStyle} onClick={onMenuClick}>
          <div style={lineStyle}></div>
          <div style={lineStyle}></div>
          <div style={lineStyle}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;