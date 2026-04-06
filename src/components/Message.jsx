import React from 'react';

const Message = ({ text, time, isMine }) => {
  const isMobile = window.innerWidth <= 600;

  const wrapperStyle = {
    display: "flex",
    justifyContent: isMine ? "flex-end" : "flex-start",
    marginBottom: isMobile ? "15px" : "25px",
    width: "100%",
  };

  const bubbleStyle = {
 
    backgroundColor: isMine ? "var(--color-light-blue)" : "var(--color-blue)", 
    color: "white",
    padding: "10px 15px",
    borderRadius: "18px",
  
    maxWidth: isMobile ? "75%" : "65%", 
    width: "fit-content",
    position: "relative",
    borderBottomRightRadius: isMine ? "2px" : "18px",
    borderBottomLeftRadius: isMine ? "18px" : "2px",
    boxSizing: "border-box"
  };

  const timeStyle = {
    fontSize: "11px",
    opacity: 0.7,
    textAlign: "right",
    marginTop: "4px",
    display: "block"
  };

  return (
    <div style={wrapperStyle}>
      <div style={bubbleStyle}>
        <div style={{ fontSize: "16px", lineHeight: "1.4" }}>{text}</div>
        <span style={timeStyle}>{time} {isMine && "✓✓"}</span>
      </div>
    </div>
  );
};

export default Message;