import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  onLogin: () => {},
  onLogout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUserDetails(token);
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data); 
      }
    } catch (error) {
      console.error('Eroare la obținerea detaliilor utilizatorului:', error);
    }
  };

  const onLogin = (data) => {
    setIsLoggedIn(true);
    localStorage.setItem('authToken', data.token);
    fetchUserDetails(data.token); 
    navigate('/', { replace: true });
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUser(null); 
    localStorage.removeItem('authToken');
    navigate('/', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
