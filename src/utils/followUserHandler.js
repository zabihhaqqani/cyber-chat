import axios from "axios";

const followUserHandler = async (followUserId, token, dataDispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(status);
    if (status === 200) {
      dataDispatch({ type: "SET_BOOKMARKS", payload: data?.bookmarks });
    }
  } catch (error) {
    console.error(error);
  }
};

export default followUserHandler;
