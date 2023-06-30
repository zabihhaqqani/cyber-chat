
const userFollowed = (users, userId) => {
  const localStorageData = JSON.parse(localStorage.getItem("userData"));
  console.log(localStorageData);
  return users
    ?.find((user) => user._id === localStorageData?.user?._id)
    ?.following?.find(({ _id }) => _id === userId)
    ? true
    : false;
};

export default userFollowed;
