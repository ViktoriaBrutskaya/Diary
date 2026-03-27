import React, { useState, useEffect } from 'react';
import kiberonIcon from "../images/kiberon.svg";
import kiberonPaper from "../images/kiberon_paper.png";

const Kiberon = ({ amount = 450 }) => { 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const kiberonBox = {
    backgroundImage: `url(${kiberonPaper})`,
    backgroundSize: "100% 100%", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: isMobile ? "5px" : "8px",

    
    width: isMobile ? "110px" : "140px", 
    height: isMobile ? "45px" : "60px",
    padding: isMobile ? "0 5px" : "0 10px",
    boxSizing: "border-box"
  };

  const kiberonNum = { 
    color: "var(--color-red)", 
    fontSize: isMobile ? "20px" : "24px", 
    fontWeight: "900",
    lineHeight: "1"
  };

  const kiberonIconStyle = {
    width: isMobile ? "18px" : "25px",
    height: isMobile ? "18px" : "25px",
    objectFit: "contain"
  };
    
  return (
    <div style={kiberonBox}>
      <span style={kiberonNum}>{amount}</span>
      <img 
        src={kiberonIcon} 
        alt="k-icon" 
        style={kiberonIconStyle} 
      />
    </div>
  );
}

export default Kiberon;