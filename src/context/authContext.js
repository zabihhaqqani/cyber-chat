import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import authReducer from "../reducer/authReducer";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const localStorageData = JSON.parse(localStorage.getItem("userData"))
    const initialAuth = {
      user: localStorageData?.user || {},
      token: localStorageData?.token || "",
    };
    const [authState, authDispatch] = useReducer(authReducer, initialAuth);

    const loginData = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
  const userLogin = async () => {
    try {
      const { status, data } = await axios.post("api/auth/login", loginData);
      if (status === 200) {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            user: data?.foundUser,
            token: data?.encodedToken,
          })
        );
        authDispatch({type:"SET_USER",payload:data?.foundUser})
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    userLogin()
  },[])

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
