import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ModuleCard from './ModuleCard';
import '../styles/LessonCard.css';

const LessonCard = ({ 
  color = "var(--color-yellow)", 
  icon, 
  title, 
  desc, 
  lessonNum, 
  groupName = "Старшая группа, 1 год" 
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isTutor } = useAuth();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const Modal = () => (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Добавить</div>
        
        <button className="modal-btn">Файлы</button>
        <button className="modal-btn">Домашнее задание</button>
        
        {isTutor && (
          <button className="modal-btn" style={{backgroundColor: '#e3f2fd'}}>
            Комментарий
          </button>
        )}

        <button className="modal-btn-close" onClick={toggleModal}>
          Закрыть
        </button>
      </div>
    </div>
  );


  const InfoContent = () => (
    <>
      {isTutor ? (
        <>
          <div>Тема</div>
          <div>Ученики</div>
          <div>Файлы</div>
          <div>Дз</div>
        </>
      ) : (
        <>
          <div>Дата</div>
          <div>Кибероны</div>
          <div>Файлы</div>
          <div>Дз</div>
        </>
      )}
    </>
  );

  if (isMobile) {
    return (
      <div className="lesson-card-container" style={{ borderColor: color }}>
        {isModalOpen && <Modal />}
        <div className="lesson-mobile-header">
          <img src={icon} alt="module-icon" className="lesson-mobile-icon" />
          <div className="lesson-mobile-badge" style={{ backgroundColor: color }}>
            {title}
          </div>
        </div>
        
        <h2 className="lesson-mobile-title">
          {isTutor ? groupName : `${lessonNum} занятие`}
        </h2>
        
        <div className="lesson-mobile-info">
          <InfoContent />
        </div>

        <button className="lesson-mobile-btn" onClick={toggleModal}>
          <span style={{ fontSize: "28px", lineHeight: "1" }}>+</span>
          <span>Добавить</span>
        </button>
      </div>
    );
  }

  return (
    <div className="lesson-card-container">
      {isModalOpen && <Modal />}
      <ModuleCard color={color} icon={icon} title={title} desc={desc} />
      
      <div className="right-plate" style={{ backgroundColor: color, border: `2px solid ${color}`, borderLeft: "none" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "900", margin: "0 0 20px 0" }}>
          {isTutor ? groupName : `${lessonNum} занятие`}
        </h2>
        
        <div style={{ fontSize: "16px", fontWeight: "600", lineHeight: "2.2" }}>
          <InfoContent />
        </div>

        <button className="desktop-btn" onClick={toggleModal}>
          <span style={{ fontSize: "30px" }}>+</span>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>Добавить</span>
        </button>
      </div>
    </div>
  );
};

export default LessonCard;