import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FormContent from "src/auth/components/FormContent";
import { rules } from "src/auth/configs";
import {
  getCategoryByIdGroup,
  getListAttribute,
  getListCollection,
  getListGroupProduct,
} from "src/auth/services";
import { getDataApi, getDataApiParams } from "src/auth/utils/fetchApi";
import { configs, filterOption, filterSort } from "src/auth/utils/form";

const Store = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const [dataGroups, setDataGroups] = useState([]);
  const [dataCollections, setDataCollections] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataColors, setDataColors] = useState([]);
  const [dataSizes, setDataSizes] = useState([]);
  const [dataForms, setDataForms] = useState([]);
  const [dataDesigns, setDataDesigns] = useState([]);
  const [dataMaterials, setDataMaterials] = useState([]);
  const [dataHandTypes, setDataHandTypes] = useState([]);
  const [dataSex, setDataSex] = useState([]);

  const [openForm, setOpenForm] = useState({
    state: null,
    title: null,
  });

  useEffect(() => {
    getDataApi(dispatch, getListGroupProduct, setDataGroups);
    getDataApi(dispatch, getListCollection, setDataCollections);
    getDataApiParams(dispatch, getListAttribute, "colors", setDataColors);
    getDataApiParams(dispatch, getListAttribute, "sizes", setDataSizes);
    getDataApiParams(dispatch, getListAttribute, "forms", setDataForms);
    getDataApiParams(dispatch, getListAttribute, "designs", setDataDesigns);
    getDataApiParams(dispatch, getListAttribute, "materials", setDataMaterials);
    getDataApiParams(
      dispatch,
      getListAttribute,
      "hand-types",
      setDataHandTypes,
    );
    getDataApiParams(dispatch, getListAttribute, "sex", setDataSex);
  }, [dispatch]);

  const handleChangeGroup = async (id) => {
    setDataCategories([]);
    form.setFieldsValue({ category: null });
    getDataApiParams(dispatch, getCategoryByIdGroup, id, setDataCategories);
  };

  const handleOpentFormContent = (state, title) =>
    setOpenForm({ state: state, title: title });

  const handleSubmit = (values) => {};

  return (
    <div className="wrapper-form">
      <FormContent state={openForm.state} title={openForm.title} />
      <Form {...configs} form={form} onFinish={handleSubmit}>
        <div className="control">
          <Form.Item label="Group product" name="groupProduct" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataGroups}
              onChange={handleChangeGroup}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("group", "Group Product")}
          />
        </div>

        <div className="control">
          <Form.Item label="Collection" name="collection" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataCollections}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("collection", "Collection")}
          />
        </div>

        <div className="control">
          <Form.Item label="Category" name="category" rules={rules}>
            <Select
              showSearch
              placeholder={"Search to Select"}
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataCategories}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("category", "category")}
          />
        </div>

        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>

        <div className="control">
          <Form.Item label="Colors" name="colors" rules={rules}>
            <Select
              mode="multiple"
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataColors}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("color", "Color")}
          />
        </div>

        <div className="control">
          <Form.Item label="Sizes" name="sizes" rules={rules}>
            <Select
              mode="multiple"
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataSizes}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("size", "Size")}
          />
        </div>

        <div className="control">
          <Form.Item label="Form" name="form" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataForms}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("form", "form")}
          />
        </div>

        <div className="control">
          <Form.Item label="Material" name="material" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataMaterials}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("material", "material")}
          />
        </div>

        <div className="control">
          <Form.Item label="Sex" name="sex" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataSex}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("sex", "sex")}
          />
        </div>

        <div className="control">
          <Form.Item label="Hand Type" name="handType" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataHandTypes}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("handType", "Hand Type")}
          />
        </div>

        <div className="control">
          <Form.Item label="Design" name="design" rules={rules}>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={filterOption}
              filterSort={filterSort}
              options={dataDesigns}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("design", "design")}
          />
        </div>

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
