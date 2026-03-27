import React from 'react';
import pinIcon from '../images/pin.svg'; 
import sendIcon from '../images/send.svg'; 

const ChatInput = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--color-white)",
    borderRadius: "30px",
    padding: "10px 20px",
    border: "3px solid var(--color-blue)", 
    margin: "20px"
  };

  const inputStyle = {
    flexGrow: 1,
    border: "none",
    background: "transparent",
    padding: "10px",
    fontSize: "18px",
    fontWeight:"600",
    outline: "none",
    color: "var(--color-blue)"
  };

  const iconStyle = {
    width: "25px",
    height: "25px",
    cursor: "pointer",
    margin: "0 10px"
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