import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat/Chat';
import Auth from './pages/Auth/Auth';
import Cabinet from './pages/Cabinet/Cabinet';
import Modules from './pages/Modules/Modules';


function App() {
  return (
    <Router>
      <Routes>
        {/* По умолчанию кидаем на дашборд */}
        <Route path="/" element={<Navigate to="/auth" />} />
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/cabinet' element={<Cabinet/>}/>
        <Route path='/modules' element={<Modules/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
