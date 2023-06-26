import axios from "axios";
import { useAuthContext } from "../context/authContext";

export const createPostHandler = async (token,dataDispatch) => {

  try {
    const { data, status } = await axios.post(
      `/api/posts`,
      { postData: {} },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201) {
      dataDispatch({ type: "CREATE_NEW_POST", payload: data?.posts });
    }
  } catch (e) {
    console.error(e);
  }
};
