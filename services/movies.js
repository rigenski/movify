const getMovies = async (params) => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${params?.term}&media=${params?.media}&limit=10`
    ).then((response) => response.json());

    return response;
  } catch (error) {
    return error;
  }
};

export { getMovies };
