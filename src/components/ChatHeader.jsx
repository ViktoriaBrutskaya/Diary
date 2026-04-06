import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import '../styles/ChatHeader.css'; 
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Импортируем хук навигации

const ChatHeader = ({ 
  userName = "Имя Фамилия", 
  role = "Тьютор", 
  group = "Вт 16:00 Мл 2 год", 
  onMenuClick 
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isTutor } = useAuth();
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleModal = () => {
    if (isTutor) setIsModalOpen(!isModalOpen);
  };

  const ProfileModal = () => (
    <div className="profile-modal-overlay" onClick={toggleModal}>
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="profile-modal-close" onClick={toggleModal}>✕</div>
        
        <Avatar size="150px" />
        
        <div className="profile-modal-info">
          <div className="profile-modal-name">{userName}</div>
          <div className="profile-modal-group">{group}</div>
        </div>

        <button className="kiberon-btn" onClick={() => alert('Начисляем...')}>
          + Начислить кибероны
        </button>
      </div>
    </div>
  );

  return (
    <>
      <header className="chat-header-container">
        <div className="user-block-style">
          
          
          {isTutor && (
            <div 
              onClick={() => navigate('/chats')} 
              style={{
                cursor: 'pointer',
                marginRight: '15px',
                fontSize: '24px',
                color: 'var(--color-white)',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              ←
            </div>
          )}

          <div 
            className={isTutor ? "avatar-clickable" : ""} 
            onClick={toggleModal}
          >
            <Avatar size="60px" />
          </div>
          
          <div className="flex-block-style">
            <span className="name-style">{userName}</span>
            <span className="role-style">{role}</span>
          </div>
        </div>

        <div className="burger-style" onClick={onMenuClick}>
          <div className="line-style"></div>
          <div className="line-style"></div>
          <div className="line-style"></div>
        </div>
      </header>

      {isModalOpen && <ProfileModal />}
    </>
  );
};

export default ChatHeader;