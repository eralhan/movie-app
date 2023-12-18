const dateFormat = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default dateFormat;
