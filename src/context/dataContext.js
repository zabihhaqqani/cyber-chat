import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import dataReducer from "../reducer/dataReducer";
import axios from "axios";
import { useAuthContext } from "./authContext";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { authState } = useAuthContext();
  const initialState = {
    users: [],
    usersLoading: false,
    posts: [],
    postLoading: false,
    bookmarks: [],
    userPost: [],
  };
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  const getUserPosts = async () => {
    try {
      const { status, data } = await axios.get("/api/posts");
      if (status === 200) {
        dataDispatch({ type: "SET_USER_POSTS", payload: data?.posts });
      }
    } catch (error) {
      console.error(error);
    }
  };
    const getUsers = async () => {
      try {
        const { status, data } = await axios.get("/api/users");
        if (status === 200) {
          dataDispatch({ type: "SET_USERS", payload: data?.users });
        }
      } catch (error) {
        console.error(error);
      }
    };

  const getAllBookmarks = async () => {
    try {
      const { data, status } = await axios.get(`api/users/bookmark`, {
        headers: {
          authorization: authState?.token,
        },
      });
      if (status === 200) {
        dataDispatch({ type: "SET_BOOKMARKS", payload: data?.bookmarks });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const [sortBy, setSortBy] = useState("Latest");

  useEffect(() => {
    if(authState?.token){

      getUserPosts()
      getAllBookmarks();
      getUsers();
    }
  }, [authState?.token]);

  return (
    <DataContext.Provider
      value={{ dataState, dataDispatch, setSortBy, sortBy }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useDataContext = () => useContext(DataContext);