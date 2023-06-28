import axios from "axios";

export const deletePostHandler = async (postId, token, dataDispatch) => {
  console.log(postId,token);
  try {

    const { data, status } = await axios.delete(
      `/api/posts/${postId}`,
    
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: "DELETE_POST", payload: data?.posts });
    }
  } catch (e) {
    console.error(e.response.data.message);
  }
};
