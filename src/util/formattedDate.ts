export const formattedDate = (createdAt: number) => {
  const timestamp = Number(createdAt);
  const dateObject = new Date(timestamp);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};
