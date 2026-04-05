import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (username, password) => {
    
    const users = {
      'user': { name: 'User', role: 'student' },
      'tutor': { name: 'tutor', role: 'tutor' }
    };

    if (password === '123' && users[username]) {
      setUser(users[username]);
      return { success: true };
    }
    return { success: false, message: 'Неверный логин или пароль' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isTutor: user?.role === 'tutor', login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);