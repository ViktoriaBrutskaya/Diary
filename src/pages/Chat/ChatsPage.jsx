import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ChatPreview from './ChatPreview';


const ChatsPage = () => {
     const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const isMobile = window.innerWidth <= 600;

  const mockChats = [
    { id: 1, name: "Александр (Тьютор)", lastMsg: "Здравствуйте, Саши сегодня не будет", time: "17:33" },
    { id: 2, name: "Мария Иванова", lastMsg: "Добрый вечер, спасибо что сообщили", time: "18:33" },
    { id: 3, name: "Группа Ср 1 год", lastMsg: "Завтра приносим ноутбуки!", time: "Вчера" },
    { id: 4, name: "Техподдержка", lastMsg: "Ваш запрос принят в работу", time: "Пн" },
  ];



  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", backgroundColor: "white" }}>
        <Header onMenuClick={() => setMenuOpen(true)} />
        
        <div style={{ flexGrow: 1, overflowY: "auto" }}>
          <h1 style={{ padding: isMobile ? "20px 15px" : "30px 40px", margin: 0, fontSize: "24px" }}>
            Сообщения
          </h1>
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            {mockChats.map(chat => (
              <ChatPreview 
                key={chat.id}
                name={chat.name}
                lastMsg={chat.lastMsg}
                time={chat.time}
                onClick={() => navigate(`/chat`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;