export const rules = [{ required: true, message: "" }];

export const filterOption = (input, option) =>
  (option?.label ?? "").includes(input);

export const filterSort = (optionA, optionB) =>
  (optionA?.label ?? "")
    .toLowerCase()
    .localeCompare((optionB?.label ?? "").toLowerCase());

export const configsForm = {
  layout: "vertical",
  style: {
    width: "800px",
  },
};

export const configsSelect = {
  showSearch: true,
  optionFilterProp: "children",
  filterOption: filterOption,
  filterSort: filterSort,
};
