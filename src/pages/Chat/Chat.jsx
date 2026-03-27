import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Message from '../../components/Message';
import ChatInput from '../../components/ChatInput';
import ChatHeader from '../../components/ChatHeader'

const Chat = () => {

  const [menuOpen, setMenuOpen] = useState(false);
 

  const mainWrapper = {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  };

  const chatArea = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
  };

  const messagesContainer = {
    flexGrow: 1,
    padding: "2vw",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div style={mainWrapper}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
      
      <div style={chatArea}>
        <ChatHeader onMenuClick={() => setMenuOpen(true)}/>


        {/* Список сообщений */}
        <div style={messagesContainer}>
          <Message 
            isMine={true} 
            text="Здравствуйте, Саши сегодня не будет" 
            time="17:33" 
          />
          <Message 
            isMine={false} 
            text="Добрый вечер, спасибо что сообщили" 
            time="18:33" 
          />
          <Message 
            isMine={true} 
            text="Здравствуйте, Саши сегодня не будет" 
            time="17:33" 
          />
          <Message 
            isMine={false} 
            text="Добрый вечер, спасибо что сообщили" 
            time="18:33" 
          />
          <Message 
            isMine={true} 
            text="Здравствуйте, Саши сегодня не будет" 
            time="17:33" 
          />
          <Message 
            isMine={false} 
            text="Добрый вечер, спасибо что сообщили" 
            time="18:33" 
          />
        </div>

        {/* Нижняя панель ввода */}
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;