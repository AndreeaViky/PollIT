// import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // verifica dacă există un token în localStorage
//     const token = localStorage.getItem("authToken");
//     // daca exista, isLoggedIn = true
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const onLogin = (data) => {
//     setIsLoggedIn(true);
//     localStorage.setItem("authToken", data.token);
//     navigate("/", { replace: true });
//   };

//   const onLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("authToken");
//     navigate("/", { replace: true });
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthContext;

// AuthProvider.jsx

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (data) => {
    setIsLoggedIn(true);
    localStorage.setItem("authToken", data.token);
    navigate("/", { replace: true });
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
    navigate("/", { replace: true });
  };

  const contextValue = {
    isLoggedIn,
    onLogin,
    onLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
