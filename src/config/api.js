const apiConfigs = {
  baseUrl: "https://api.themoviedb.org/3",
  baseImgUrl: "https://image.tmdb.org/t/p",
  imgSize: "w500",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

export default apiConfigs;
