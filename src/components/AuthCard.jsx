import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import InputField from './InputField';
import Button from './Button';

const AuthCard = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Вызываем login из контекста
    const result = login(email, password);
    
    if (result.success) {
      navigate('/cabinet'); 
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-card-title">АВТОРИЗАЦИЯ</h2>
      
      <div className="form-wrapper">
        <InputField 
          label="Электронная почта" 
          width="100%" 
          borderColor="var(--color-blue)" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField 
          label="Пароль" 
          type="password"
          width="100%" 
          borderColor="var(--color-blue)" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <Button 
          text="Войти" 
          color="var(--color-blue)" 
          width="200px" 
          onClick={handleLogin} 
        />
      </div>
    </div>
  );
};

export default AuthCard;