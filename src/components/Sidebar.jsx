import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import logo from '../images/logo.jpg';
import Button from './Button';  

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { isTutor, logout } = useAuth(); 

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 800);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const menu = isTutor 
    ? [
        { name: "Личный кабинет", path: "/cabinet" },
        { name: "Модули", path: "/modules" },
        { name: "Группы", path: "/groups" },
        { name: "Чаты", path: "/chats" }     
      ]
    : [
        { name: "Личный кабинет", path: "/cabinet" },
        { name: "Модули", path: "/modules" },
        { name: "Кибершоп", path: "/shop" }, 
        { name: "Чат с тьютором", path: "/chat" }
      ];

  const handleLogout = () => {
    logout(); 
    navigate('/auth'); 
  };

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
    width: isMobile ? "60%" : "80%",
    marginBottom: "50px",
    objectFit: "contain",
    alignSelf: "center"
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
            onClick={() => {
              navigate(item.path);
              if (isMobile) onClose(); 
            }} 
          />
        ))}
      </nav>

      <div style={logoutWrapperStyle}>
        <Button 
          text="Выйти" 
          color="var(--color-yellow)" 
          width="120px" 
          onClick={handleLogout} 
        />
      </div>
    </aside>
  );
};

export default Sidebar;