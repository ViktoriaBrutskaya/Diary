import React, { useState } from 'react';
import '../styles/alert.css'; 

const Alert = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
 
      <div className="hw-alert-container" onClick={toggleModal}>
        <div className="hw-alert-icon">!</div>
        <div className="hw-alert-text">Есть невыполненное домашнее задание</div>
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div className="hw-modal-overlay" onClick={toggleModal}>
          <div className="hw-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="hw-modal-close" onClick={toggleModal}>✕</div>
            
            <div className="hw-modal-header">
              <span className="hw-alert-icon" style={{fontSize: '40px'}}>!</span>
              <h2 className="hw-modal-title">Домашнее задание</h2>
            </div>

            <div className="hw-modal-body">
              <div className="hw-info-row">Комментарий:</div>
              <div className="hw-info-row">Файлы:</div>
            </div>

            {/* Кнопка в стиле мобильной карточки */}
            <button className="hw-submit-btn" onClick={() => alert('Загрузка...')}>
              <span>+</span>
              <span>Добавить<br/>ДЗ</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;