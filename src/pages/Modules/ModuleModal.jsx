import React, { useState } from 'react';
import lockIcon from '../../images/lock.svg'; 

const ModuleModal = ({ 
  isOpen, 
  onClose, 
  title, 
  desc, 
  icon, 
  lessonsCount = 6, 
  isLocked = false,
  color = "var(--color-yellow)"
}) => {
  const [activeLesson, setActiveLesson] = useState(null);

  if (!isOpen) return null;

  // Стили
  const overlayStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000
  };

  const modalStyle = {
    backgroundColor: "white",
    width: "900px",
    maxWidth: "95vw",
    padding: "40px",
    borderRadius: "20px",
    position: "relative",
    display: "flex",
    gap: "40px"
  };

  const leftSection = { width: "45%" };
  const rightSection = { width: "55%", position: "relative" };

  const lessonBtnStyle = (isActive) => ({
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "var(--color-yellow)",
    border: "none",
    borderRadius: isActive ? "5px 5px 0 0" : "5px",
    marginBottom: isActive ? "0" : "10px",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between"
  });

  const detailPanelStyle = {
    backgroundColor: "var(--color-yellow)",
    padding: "0 20px 15px 20px",
    borderRadius: "0 0 5px 5px",
    marginBottom: "10px",
    fontSize: "14px",
    lineHeight: "2"
  };

  const lockOverlay = {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(128, 128, 128, 0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    zIndex: 5,
    borderRadius: "5px"
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          style={{ position: "absolute", top: "20px", left: "20px", border: "none", background: "none", fontSize: "24px", cursor: "pointer" }}
        >
          ←
        </button>

       
        <div style={leftSection}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={icon} alt="module" style={{ width: "120px", height: "120px" }} />
          </div>
          <div style={{ 
            backgroundColor: color, 
            padding: "20px", 
            borderRadius: "15px", 
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "20px"
          }}>
            {title}
          </div>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>{desc}</p>
        </div>

        {/* Правая часть */}
        <div style={rightSection}>
          <div style={{ marginBottom: "20px", fontSize: "16px" }}>
            <div>Дата начала модуля</div>
            <div>Дата конца модуля</div>
            <div>Кол-во занятий в модуле: {lessonsCount}</div>
          </div>

          <div style={{ maxHeight: "400px", overflowY: "auto", position: "relative",overflowY: isLocked ? "hidden" : "auto", }}>
           

            {[...Array(lessonsCount)].map((_, i) => (
              <div key={i}>
                <button 
                  style={lessonBtnStyle(activeLesson === i)}
                  onClick={() => setActiveLesson(activeLesson === i ? null : i)}
                >
                  {i + 1} занятие <span>{activeLesson === i ? '∨' : '>'}</span>
                </button>
                
                {activeLesson === i && (
                  <div style={detailPanelStyle}>
                    <div>Дата: --.--.----</div>
                    <div>Кибероны: ---</div>
                    <div>Файлы: ---</div>
                    <div>Дз: ---</div>
                  </div>
                )}
              </div>
            ))}

            {/* Состояние Locked */}
            {isLocked && (
              <div style={lockOverlay}>
                <img src={lockIcon} alt="lock" style={{ width: "80px", marginBottom: "15px" }} />
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Пока не начались <br/> занятия по этому <br/> модулю
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;