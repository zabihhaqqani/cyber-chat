const dataReducer = (state,action) => {
  switch (action.type) {
    case "SET_USER_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
      case "SET_USERS" :
        return {
          ...state,
          users:action.payload,
        }
    case "CREATE_NEW_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_BOOKMARKS":
      return {
        ...state,
        bookmarks: action.payload,
      };

    default:
      return state;
  }
}

export default dataReducer