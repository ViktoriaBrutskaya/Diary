import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.jpg';
import Button from './Button';  

const Sidebar = ({ isOpen, onClose }) => {
const navigate = useNavigate();
  const location = useLocation(); 

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menu = [
    { name: "Личный кабинет", path: "/cabinet" },
    { name: "Модули", path: "/modules" },
    { name: "Кибершоп", path: "/shop" },
    { name: "Чат с тьютором", path: "/chat" }
  ];

  
  const sidebarStyle = {
    backgroundColor: "var(--color-light-blue)",
    width: isMobile ? "100vw" : "250px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: "30px 15px",
    boxSizing: "border-box",

    position: isMobile ? "fixed" : "relative",
    right: isMobile ? (isOpen ? 0 : "-100%") : 0,
    zIndex: 1000,
    transition: "right 0.3s ease",
    
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    display: isMobile ? "block" : "none" 
  };

  const sideLogoStyle = { 
    width: "100%",
    marginBottom: "50px",
    objectFit: "contain"
  };

  const navMenuStyle = { 
    display: "flex", 
    flexDirection: "column",
    gap: "15px"
  };

 
  const logoutWrapperStyle = {
    marginTop: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px"
  };

  return (
    <aside style={sidebarStyle}>

      <div style={closeBtnStyle} onClick={onClose}>✕</div>

      <img src={logo} alt="KiberOne" style={sideLogoStyle} />
      
      <nav style={navMenuStyle}>
        {menu.map(item => (
          
          <Button 
            key={item.path} 
            text={item.name} 
            color={location.pathname === item.path ? "var(--color-blue)" : "var(--color-yellow)"}
            width="100%" 
            onClick={() => navigate(item.path)} 
            />
        ))}
      </nav>

      {/* Кнопка выхода внизу */}
      <div style={logoutWrapperStyle}>
        <Button 
          text="Выйти" 
          color="var(--color-yellow)" 
          width="120px" 
          onClick={() => navigate('/auth')}
        />
      </div>
    </aside>
  );
};

export default Sidebar;