import { useState } from "react";
import { useContext, createContext } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const login = (useData) => {
    setuser(useData);
  };
  const logout = () => {
    setuser(null);
  };

  return (
    <AuthProvider.Provider>
      
      value ={{ user, login, logout }}
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthProvider;
