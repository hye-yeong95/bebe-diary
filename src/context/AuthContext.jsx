import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider value={{ isLoggedIn, login, logout }}>
      {props.children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
