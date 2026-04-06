import React from 'react';

const ChatPreview = ({ name, lastMsg, time, avatar, onClick }) => {
  const isMobile = window.innerWidth <= 600;

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: isMobile ? "15px 10px" : "15px 20px",
    cursor: "pointer",
    borderBottom: "1px solid #f0f0f0",
    transition: "background 0.2s",
    backgroundColor: "white",
  };

  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "var(--color-blue)",
    marginRight: "15px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px"
  };

  return (
    <div 
      style={containerStyle} 
      onClick={onClick}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9f9f9"}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
    >
      <div style={avatarStyle}>
        {avatar ? <img src={avatar} alt={name} style={{width: '100%', borderRadius: '50%'}} /> : name[0]}
      </div>
      <div style={{ flexGrow: 1, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <span style={{ fontWeight: "700", color: "var(--color-blue)" }}>{name}</span>
          <span style={{ fontSize: "12px", color: "#999" }}>{time}</span>
        </div>
        <div style={{ 
          fontSize: "14px", 
          color: "#666", 
          whiteSpace: "nowrap", 
          overflow: "hidden", 
          textOverflow: "ellipsis" 
        }}>
          {lastMsg}
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;