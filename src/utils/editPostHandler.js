import axios from "axios";

export const editPostHandler = async (
  postId,
  token,
  dataDispatch,
  { content }
) => {
  try {
    const { data, status } = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData: { content } },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: "EDIT_POST", payload: data?.posts });
    }
  } catch (e) {
    console.error(e.response.data.message);
  }
};
