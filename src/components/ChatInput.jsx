import React from 'react';
import pinIcon from '../images/pin.svg'; 
import sendIcon from '../images/send.svg'; 

const ChatInput = () => {
  const isMobile = window.innerWidth <= 600;

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--color-white)",
    borderRadius: isMobile ? "20px" : "30px",
    padding: isMobile ? "5px 15px" : "10px 20px",
    border: `3px solid var(--color-blue)`, 
    // Убираем margin: 20px, делаем его меньше для мобилок
    margin: isMobile ? "10px" : "20px",
    // Чтобы инпут не "гулял", если контента мало
    flexShrink: 0 
  };

  const inputStyle = {
    flexGrow: 1,
    border: "none",
    background: "transparent",
    padding: isMobile ? "5px" : "10px",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "600",
    outline: "none",
    color: "var(--color-blue)",
    width: "100px" // Базовая ширина, чтобы flex-grow работал корректно
  };

  const iconStyle = {
    width: isMobile ? "20px" : "25px",
    height: isMobile ? "20px" : "25px",
    cursor: "pointer",
    margin: "0 5px"
  };

  return (
    <div style={containerStyle}>
      <img src={pinIcon} alt="pin" style={iconStyle} />
      <input type="text" placeholder="Сообщение" style={inputStyle} />
      <img src={sendIcon} alt="send" style={iconStyle} />
    </div>
  );
};

export default ChatInput;