import React from 'react';

const Message = ({ text, time, isMine }) => {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: isMine ? "flex-end" : "flex-start",
    marginBottom: "20px",
    width: "80%",
    marginRight: isMine ? "5%" : "auto", 
    marginLeft: isMine ? "auto" : "5%", 
 };

const bubbleStyle = {
    backgroundColor: isMine ? "var(--color-light-blue)" : "var(--color-blue)", // Бирюзовый для своих, темно-синий для чужих
    color: "white",
    padding: "15px 20px",
    borderRadius: "25px",
    maxWidth: "50%",
    width: "fit-content",
    position: "relative",
    borderBottomRightRadius: isMine ? "0" : "25px",
    borderBottomLeftRadius: isMine ? "25px" : "0",
 };

const timeStyle = {
    fontSize: "12px",
    color: isMine ? "rgba(255,255,255,0.8)" : "#82959E",
    alignSelf: "flex-end",
    marginTop: "5px",
    textAlign: "right"
 };

 // Хвостики (маленькие треугольники)
const tailStyle = {
    position: "absolute",
    bottom: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: isMine ? "0 0 15px 15px" : "0 15px 15px 0",
    borderColor: `transparent ${isMine ? "#var(--color-light-blue)" : "var(--color-blue)"} transparent transparent`,
    left: isMine ? "auto" : "-10px",
    right: isMine ? "-20px" : "auto",
    transform: isMine ? "rotate(270deg)" : "rotate(90deg)",
};

return (
    <div style={wrapperStyle}>
        <div style={bubbleStyle}>
            <div style={tailStyle}></div>
            <div style={{ fontSize: "16px", lineHeight: "1.4" }}>{text}</div>
            <div style={timeStyle}>{time} {isMine && "✓"}</div>
        </div>
    </div>
 );
};

export default Message;

