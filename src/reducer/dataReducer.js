const dataReducer = (state,action) => {
  switch (action.type) {
    case "GET_ALL_USER_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
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