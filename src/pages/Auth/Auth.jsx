import React from 'react';
import AuthCard from '../../components/AuthCard';
import logo from '../../images/logo.jpg'; 
import bear from '../../images/bear.png';
import './auth.css';

const Auth = () => {
  return (
    <div className="page-wrapper">
      
      
      <main className="main-content">
        <img src={logo} alt="KiberOne" className="logo" />
        
        <h1 className="main-title">
          ДНЕВНИК <br /> <span>РЕЗИДЕНТА</span>
        </h1>

        <div className="auth-container">
          <div className="bear-wrapper">
             <img src={bear} alt="Bear" className="bear-img" />
             
          </div>

          <div className="form-center-anchor">
                <AuthCard />
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default Auth;