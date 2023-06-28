import axios from "axios";

export const postUnlikeHandler = async (postId, token, dataDispatch) => {
  try {
    const { data, status } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: "SET_USER_POSTS", payload: data?.posts });
    }
  } catch (error) {
    console.error(error);
  }
};
