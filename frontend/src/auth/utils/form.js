export const filterOption = (input, option) =>
  (option?.label ?? "").includes(input);

export const filterSort = (optionA, optionB) =>
  (optionA?.label ?? "")
    .toLowerCase()
    .localeCompare((optionB?.label ?? "").toLowerCase());

export const configs = {
  layout: "vertical",
  style: {
    width: "600px",
  },
};
