const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};

export { formatDate };
