import { HashRouter  as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Chat from './pages/Chat/Chat';
import Auth from './pages/Auth/Auth';
import Cabinet from './pages/Cabinet/Cabinet';
import Modules from './pages/Modules/Modules';
import Groups from './pages/Groups/Groups';
import ChatsPage from './pages/Chat/ChatsPage';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/auth" />} />
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/cabinet' element={<Cabinet/>}/>
        <Route path='/modules' element={<Modules/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/chats' element={<ChatsPage/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
