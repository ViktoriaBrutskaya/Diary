import React, {useState, useEffect} from 'react';
import Avatar from './Avatar'; 


const ChatHeader = ({ userName = "Имя Фамилия", role="Тьютор", onMenuClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle = {
    backgroundColor: "var(--color-blue)", 
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    boxSizing: "border-box",
    width: "100%",
    flexShrink: 0
  };

  const userBlockStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  };

  const nameStyle = {
    color: "white",
    fontSize: "30px",
    fontWeight: "500",
    lineHeight: "0.9",
  };

  const roleStyle = {
    color: "white",
    fontSize: "14px",
    fontWeight: "300",
  };

  const flexBlock = {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center", 
    gap: "0px" 
  };

  const burgerStyle = {
    cursor: "pointer",
    display: isMobile ? "flex" : "none", 
    flexDirection: "column",
    gap: "5px"
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
        
        <Avatar size="60px" /> 
        <div style={flexBlock}>
            <span style={nameStyle}>{userName}</span>
            <span style={roleStyle}>{role}</span>
        </div>
        
      </div>

      {/* Бургер-меню> */}
      <div style={burgerStyle} onClick={onMenuClick}>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
      </div>
     
    </header>
  );
};

export default ChatHeader;