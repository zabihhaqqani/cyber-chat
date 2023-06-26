import React from 'react'

const dataReducer = (state,action) => {
  switch(action.type){

    case "GET_ALL_USER_POSTS":
      return {
        ...state,
        posts:action.payload
      }
      case "CREATE_NEW_POST" : 
      console.log(action.payload);
      return {
        ...state,
        posts:action.payload
      }

    default :
    return state;
  }
}

export default dataReducer