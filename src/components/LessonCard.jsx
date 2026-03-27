import React, { useState, useEffect } from 'react';
import ModuleCard from './ModuleCard';
import '../styles/LessonCard.css';


const LessonCard = ({ color = "var(--color-yellow)", icon, title, desc, lessonNum, btnText = "файлы" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="lesson-card-container" style={{ borderColor: color }}>
        <div className="lesson-mobile-header">
          <img src={icon} alt="module-icon" className="lesson-mobile-icon" />
          <div className="lesson-mobile-badge" style={{ backgroundColor: color }}>
            {title}
          </div>
        </div>

        <h2 className="lesson-mobile-title">{lessonNum} занятие</h2>

        <div className="lesson-mobile-info">
          <div>Дата</div>
          <div>Кибероны</div>
          <div>Файлы</div>
          <div>Дз</div>
        </div>

        <button className="lesson-mobile-btn">
          <span style={{ fontSize: "28px", lineHeight: "1" }}>+</span>
          <span style={{ marginTop: "2px" }}>Добавить</span>
          <span>{btnText}</span>
        </button>
      </div>
    );
  }

  // Десктопная версия (строго по твоим старым стилям)
  return (
    <div className="lesson-card-container">
      <ModuleCard color={color} icon={icon} title={title} desc={desc} />
      <div className="right-plate" style={{ backgroundColor: color, border: `2px solid ${color}`, borderLeft: "none" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "900", margin: "0 0 20px 0" }}>
          {lessonNum} занятие
        </h2>
        <div style={{ fontSize: "16px", fontWeight: "600", lineHeight: "2" }}>
          <div>Дата</div>
          <div>Кибероны</div>
          <div>Файлы</div>
          <div>Дз</div>
        </div>
        <button className="desktop-btn">
          <span style={{ fontSize: "30px" }}>+</span>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>Добавить {btnText}</span>
        </button>
      </div>
    </div>
  );
};

export default LessonCard;