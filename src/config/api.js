const apiConfigs = {
  baseUrl: "https://api.themoviedb.org/3",
  baseImgUrl: "https://image.tmdb.org/t/p/w500",
  defaultPoster:
    "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg",
  defaultUserImage:
    "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

export default apiConfigs;
