import axios from "axios";

const followUserHandler = async (followUserId, token,dataDispatch) => {
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
    if (status === 200||status ===201) {
      dataDispatch({ type: "SET_USERS", payload: data?.users});
    }
  } catch (error) {
    console.error(error);
  }
};

export default followUserHandler;
