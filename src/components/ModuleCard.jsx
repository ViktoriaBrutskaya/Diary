import React from 'react';

const ModuleCard = ({ 
  color = "var(--color-yellow)", 
  icon, 
  title = "", 
  desc = "", 
  isCompleted = false 
}) => {
  
  const moduleStyle = {
    width: "250px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "320px",
    borderRadius: "30px",
    border: isCompleted ? "2px solid rgba(0,0,0,0.1)" : `2px solid ${color}`,
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    boxShadow: isCompleted ? "inset 0 0 10px rgba(0,0,0,0.05)" : "none"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "28px",
    zIndex: 2,
    display: isCompleted ? "block" : "none",
    pointerEvents: "none"
  };

  const iconContainer = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    flexShrink: 0
  };

  const iconImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    opacity: isCompleted ? 0.5 : 1
  };

  const moduleNameStyle = { 
    padding: "10px 15px",
    fontSize: "14px",
    fontWeight: "800",
    borderRadius: "12px",
    marginBottom: "15px",
    backgroundColor: isCompleted ? "#e0e0e0" : color,
    color: isCompleted ? "rgba(0,0,0,0.4)" : "var(--color-black)",
    lineHeight: "1.2",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box"
  };

  const moduleDescStyle = {
    fontSize: "14px",
    color: isCompleted ? "rgba(0,0,0,0.4)" : "var(--color-black)",
    margin: 0,
    lineHeight: "1.4",
    fontWeight: "500"
  };

  return (  
    <div style={moduleStyle}>
      <div style={overlayStyle}></div>
      
      <div style={iconContainer}>
        <img src={icon} alt="icon" style={iconImgStyle} />
      </div>
      
      <div style={moduleNameStyle}>
        {title.toUpperCase()}
      </div>
      
      <p style={moduleDescStyle}>{desc}</p>
    </div>
  );
};

export default ModuleCard;