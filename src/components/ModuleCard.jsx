import React from 'react';

const ModuleCard = ({ color = "var(--color-yellow)", icon, title="", desc="" }) => {
  
  const moduleStyle = {
    width: "250px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
   
    borderRadius: "30px",
    border: `2px solid ${color}`,
    boxSizing: "border-box"
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
    objectFit: "contain"
  };

  const moduleNameStyle = { 
    padding: "10px 15px",
    fontSize: "14px",
    fontWeight: "800",
    borderRadius: "12px",
    marginBottom: "15px",
    backgroundColor: color,
    color: "var(--color-black)",
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
    color: "var(--color-black)",
    margin: 0,
    lineHeight: "1.4",
    fontWeight: "500"
  };

  return (  
    <div style={moduleStyle}>
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