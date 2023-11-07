import { Button, Form, Input, Select } from "antd";
import React from "react";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";

const Edit = () => {
  return (
    <div className="wrapper-form">
      <Form layout="vertical" style={{ width: "600px" }}>
        <Form.Item label="Group product" name="groupProduct" rules={rules}>
          <Select
            defaultValue={["2"]}
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
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
            ]}
          />
        </Form.Item>
        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>
        <Uploads required name="banner" label="Banner" multiple />
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
