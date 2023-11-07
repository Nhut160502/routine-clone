import { Button, Form, Input, Select } from "antd";
import React from "react";
import { rules } from "src/auth/configs";

const options = [
  {
    value: "1",
    label: "Not Identified",
  },
  {
    value: "2",
    label: "Closed",
  },
  {
    value: "3",
    label: "Communicated",
  },
  {
    value: "4",
    label: "Identified",
  },
  {
    value: "5",
    label: "Resolved",
  },
  {
    value: "6",
    label: "Cancelled",
  },
];
const filterOption = (input, option) => (option?.label ?? "").includes(input);
const filterSort = (optionA, optionB) =>
  (optionA?.label ?? "")
    .toLowerCase()
    .localeCompare((optionB?.label ?? "").toLowerCase());

const Store = () => {
  return (
    <div className="wrapper-form">
      <Form layout="vertical" style={{ width: "600px" }}>
        <Form.Item label="Group product" name="groupProduct" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Collection" name="collection" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Category" name="category" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>

        <Form.Item label="Colors" name="colors" rules={rules}>
          <Select
            mode="multiple"
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Sizes" name="Sizes" rules={rules}>
          <Select
            mode="multiple"
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Form" name="form" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Material" name="material" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Sex" name="sex" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Hand Type" name="handType" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Design" name="design" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={filterOption}
            filterSort={filterSort}
            options={options}
          />
        </Form.Item>

        <Form.Item label="Price" name="price" rules={rules}>
          <Input placeholder="Price" type="number" />
        </Form.Item>
        <Form.Item label="Sale" name="sale" rules={rules}>
          <Input placeholder="Sale" type="number" min="0" max="100" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;
