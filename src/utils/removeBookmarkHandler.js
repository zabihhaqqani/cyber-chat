import axios from "axios";


const removeBookmarkHandler = async (postId,token,dataDispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(status)
    if(status===200){
      console.log(data?.bookmarks);
        dataDispatch({ type: "SET_BOOKMARKS", payload: data?.bookmarks });
    }
  } catch (error) {
    console.error(error);
  }
};

export default removeBookmarkHandler;
