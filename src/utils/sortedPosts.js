export const sortedPosts = (posts, sortBy) => {
  switch (sortBy) {
    case "Latest":
      return [...posts].sort(
        (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)
      );
    case "Oldest":
        return [...posts].sort((a,b)=> new Date(a?.createdAt) - new Date(b?.createdAt))
    case "Trending":
        return [...posts].sort((a,b)=> b?.likes?.likeCount - a?.likes?.likeCount)
    default:
      return [...posts];
  }
};
