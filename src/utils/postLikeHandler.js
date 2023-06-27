import axios from "axios";

export const postLikeHandler = async (postId, token, dataDispatch) => {
  console.log(postId);
  try {
    const { data, status } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: "GET_ALL_USER_POSTS", payload: data?.posts });
    }
  } catch (error) {
    console.error(error);
  }
};
