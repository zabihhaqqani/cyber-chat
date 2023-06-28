import axios from "axios";

const unFollowUserHandler = async (followUserId, token,dataDispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200||status ===201) {
      dataDispatch({ type: "UPDATE_USERS", payload: data?.user});
      dataDispatch({ type: "UPDATE_USERS", payload: data?.followUser });
    }
  } catch (error) {
    console.error(error);
  }
};

export default unFollowUserHandler;
