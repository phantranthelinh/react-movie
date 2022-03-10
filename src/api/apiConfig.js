const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "6a19ec101d010ad7f2e8f5a0ca2466d0",
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};
export default apiConfig;
