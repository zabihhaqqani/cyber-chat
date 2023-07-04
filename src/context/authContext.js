import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import authReducer from "../reducer/authReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
 

  const localStorageData = JSON.parse(localStorage.getItem("userData"));
  
  const initialState = {
    user: localStorageData?.user || {},
    token: localStorageData?.token || "",
  };
  const [authState, authDispatch] = useReducer(authReducer, initialState);


  const userLogin = async (loginData) => {
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
        authDispatch({ type: "SET_USER", payload: data?.foundUser });
        authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });

        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userSignup = async (signupData) => {
    try {
      const {status,data} = await axios.post(`/api/auth/signup`, signupData);
      if (status === 201) {
       localStorage.setItem(
         "userData",
         JSON.stringify({
           user: data?.foundUser,
           token: data?.encodedToken,
         })
       );
        authDispatch({
          type: "SET_USER",
          payload: data?.createdUser,
        });
        authDispatch({
          type: "SET_TOKEN",
          payload: data?.encodedToken,
        });
        navigate("/");
        console.log("done");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const userLogout = () => {
    localStorage.removeItem("userData");
    authDispatch({ type: "SET_USER", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
  };
  useEffect(() => {
    // userLogin()
       if (localStorageData) {
         authDispatch({ type: "SET_USER", payload: localStorageData?.user });
         authDispatch({ type: "SET_TOKEN", payload: localStorageData?.token });
       }
  }, []);

  return (
    <AuthContext.Provider
      value={{ authState, userLogin, localStorageData, userSignup, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
