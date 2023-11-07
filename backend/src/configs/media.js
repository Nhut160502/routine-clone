export const media = (folder, image) => {
  return `${process.env.HOST}:${process.env.PORT}/${folder}/${image}`;
};
