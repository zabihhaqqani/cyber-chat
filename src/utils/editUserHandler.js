import axios from "axios";

export const editUserHandler = async ( token, dataDispatch,  userData ) => {
  console.log(userData,"before api")
  try {

    const { data, status } = await axios.post(
      `/api/users/edit`,
      { userData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 201||status===200) {
        console.log(data?.user);
        dataDispatch({ type: "EDIT_USER", payload: data?.user });
    }
  } catch (e) {
    console.error(e.response.data.message);
  }
};
