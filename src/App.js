import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Chat from './pages/Chat/Chat';
import Auth from './pages/Auth/Auth';
import Cabinet from './pages/Cabinet/Cabinet';
import Modules from './pages/Modules/Modules';
import Groups from './pages/Groups/Groups';

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
      </Routes>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
