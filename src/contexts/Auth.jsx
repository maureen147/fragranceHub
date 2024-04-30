import { Outlet, Navigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";



const AuthContext = createContext();

// Provider functions
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // axios config
  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  // axios.defaults.headers.common["Authorization"] = Bearer ${auth?.token};

  // Update axios headers when auth changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // retrieve the user from local storage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ ...auth, user: parsedData.user, token: parsedData.user.token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });

      if (!data?.error) {
        // Login successful
        setAuth({ user: data.user, token: data.user.token });
        localStorage.setItem("auth", JSON.stringify(data));
        return true;
      } else {
        // Login failed
        return false;
      }
    } catch (error) {
      console.error("Login error:", error.message);
      if (error?.response && error?.response?.data && error?.response?.data?.error) {
        throw new Error(error?.response?.data?.error); 
      } else {
        throw new Error("An error occurred while logging in");
      }
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      if (!data.error) {
        setAuth({
          user: data?.user,
          token: data?.user?.token,
        });

        // Save signup data to local storage
        localStorage.setItem("auth", JSON.stringify(data));
      }

      return data;
    } catch (error) {
      console.error("Signup Error:", error.message);
      if (error?.response && error?.response?.data && error?.response?.data?.error) {
        throw new Error(error?.response?.data?.error); 
      } else {
        throw new Error("An error occurred while signing in");
      }
    }
  };

  const logout = () => {
    // Clear auth data
    localStorage.removeItem("auth");
    setAuth({ user: null, token: "" });
  };

  
// Private Route
const PrivateRoutes = () => {
const data = localStorage.getItem("auth");
const parsedData = JSON.parse(data);
const isLoggedIn = parsedData;

  return isLoggedIn ? <Outlet/> : <Navigate to="/login"/>

}

const AdminRoutes = () => {
  const data = localStorage.getItem("auth");
  const parsedData = JSON.parse(data);
  const isAdmin = parsedData.user.role === 1;

    return isAdmin ? <Outlet/> : <Navigate to ="/"/>

}


  // console.log(auth.user);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup, logout, PrivateRoutes, AdminRoutes }}>
      {children}
    </AuthContext.Provider>
  );

};

// hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };



