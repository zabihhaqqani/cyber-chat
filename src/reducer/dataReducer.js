const dataReducer = (state,action) => {
  switch (action.type) {
    case "SET_USER_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "EDIT_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "UPDATE_USERS":
      return {
        ...state,
        users: state?.users?.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case "CREATE_NEW_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_BOOKMARKS":
      return {
        ...state,
        bookmarks: action?.payload,
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state?.users?.map((user) =>
          action.payload?._id === user._id ? action.payload  : user
        ),
      };
    default:
      return state;
  }
}

export default dataReducer