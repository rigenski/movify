const getUsers = async (params) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=20`).then(
      (response) => response.json()
    );

    return response;
  } catch (error) {
    return error;
  }
};

export { getUsers };
