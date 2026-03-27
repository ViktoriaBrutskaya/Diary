import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputField from './InputField';
import Button from './Button';

const AuthCard = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-card">
      <h2 className="auth-card-title">АВТОРИЗАЦИЯ</h2>
      
      <div className="form-wrapper">
        <InputField 
          label="Электронная почта" 
          width="100%" 
          borderColor="var(--color-blue)" 
        />
        <InputField 
          label="Пароль" 
          type="password"
          width="100%" 
          borderColor="var(--color-blue)" 
        />
        
        <Button 
          text="Войти" 
          color="var(--color-blue)" 
          width="200px" 
          onClick={() => navigate('/cabinet')}
        />
      </div>
    </div>
  );
};

export default AuthCard;