import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 Au chargement de l'app
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api
        .get("/me")
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (data) => {
    const res = await api.post("/login", data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (data) => {
    const res = await api.post("/register", data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.post("/logout");
    localStorage.removeItem("token");
    setUser(null);
  };








  
  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


