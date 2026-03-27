import React from 'react';
import '../styles/alert.css'; 

const Alert = () => {
  return (
    <div className="hw-alert-container">
      <div className="hw-alert-icon">!</div>
      <div className="hw-alert-text">Есть невыполненное домашнее задание</div>
    </div>
  );
};

export default Alert;