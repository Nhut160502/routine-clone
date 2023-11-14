import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Uploads } from "src/auth/components";
import Editor from "src/auth/components/Editor";
import FormContent from "src/auth/components/FormContent";
import { configsForm, configsSelect, rules } from "src/auth/configs";
import { getCategoryByIdGroup, getListCategoryChild } from "src/auth/services";
import { getDataApiParams } from "src/auth/utils/fetchApi";

const Edit = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [desc, setDesc] = useState(null);
  const [thumbnail, setThumbnail] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [dataGroups, setDataGroups] = useState([]);
  const [dataCollections, setDataCollections] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataChild, setDataChild] = useState([]);
  const [dataColors, setDataColors] = useState([]);
  const [dataSizes, setDataSizes] = useState([]);
  const [dataForms, setDataForms] = useState([]);
  const [dataDesigns, setDataDesigns] = useState([]);
  const [dataMaterials, setDataMaterials] = useState([]);
  const [dataHandTypes, setDataHandTypes] = useState([]);
  const [dataCollarTypes, setDataCollarTypes] = useState([]);
  const [dataSex, setDataSex] = useState([]);
  const [openForm, setOpenForm] = useState({ state: null, title: null });
  const [sizesSelect, setSizesSelect] = useState([]);
  const [colorsSelect, setSColorsSelect] = useState([]);

  const handleChangeGroup = async (id) => {
    setDataCategories([]);
    getDataApiParams(dispatch, getCategoryByIdGroup, id, setDataCategories);
    form.setFieldsValue({ category: null });
  };

  const handleChangeCategory = async (id) => {
    setDataChild([]);
    getDataApiParams(dispatch, getListCategoryChild, id, setDataChild);
    form.setFieldsValue({ categoryChild: null });
  };

  const handleChangeColors = (id, data) => setSColorsSelect(data);

  const handleChangeSizes = (id, data) => setSizesSelect(data);

  const handleOpentFormContent = (state, title) =>
    setOpenForm({ state: state, title: title });

  const handleCloseForm = () => setOpenForm({ state: null, title: null });

  const handleFinishForm = async (data) => {
    const arrId = [];
    const unshiftData = async (setState, data) => {
      setState((pre) => [{ label: data.name, value: data._id }, ...pre]);
    };

    switch (openForm.state) {
      case "group":
        unshiftData(setDataGroups, data);
        form.setFieldsValue({ groupProduct: data._id });
        break;
      case "category":
        unshiftData(setDataCategories, data);
        form.setFieldsValue({ category: data._id });
        break;
      case "categoryChild":
        unshiftData(setDataChild, data);
        form.setFieldsValue({ categoryChild: data._id });
        break;
      case "color":
        unshiftData(setDataColors, data);

        arrId.push(data._id);
        colorsSelect.map((item) => arrId.push(item.value));

        setSColorsSelect((pre) => [
          { label: data.name, value: data._id },
          ...pre,
        ]);

        form.setFieldsValue({ colors: arrId });

        break;
      case "size":
        unshiftData(setDataSizes, data);

        arrId.push(data._id);
        sizesSelect.map((item) => arrId.push(item.value));

        setSizesSelect((pre) => [
          { label: data.name, value: data._id },
          ...pre,
        ]);

        form.setFieldsValue({ sizes: arrId });

        break;
      case "material":
        unshiftData(setDataMaterials, data);
        form.setFieldsValue({ material: data._id });
        break;
      case "sex":
        unshiftData(setDataSex, data);
        form.setFieldsValue({ sex: data._id });
        break;
      case "handType":
        unshiftData(setDataHandTypes, data);
        form.setFieldsValue({ handType: data._id });
        break;
      case "collarType":
        unshiftData(setDataCollarTypes, data);
        form.setFieldsValue({ collarType: data._id });
        break;
      case "design":
        unshiftData(setDataDesigns, data);
        form.setFieldsValue({ design: data._id });
        break;
      case "form":
        unshiftData(setDataForms, data);
        form.setFieldsValue({ form: data._id });
        break;
      case "collection":
        unshiftData(setDataCollections, data);
        form.setFieldsValue({ collection: data._id });
        break;

      default:
        break;
    }

    setOpenForm({ state: null, title: null });
  };

  const handleSubmit = (values) => {};

  return (
    <div className="wrapper-form">
      <FormContent
        state={openForm.state}
        title={openForm.title}
        handleClose={handleCloseForm}
        handleFinish={handleFinishForm}
      />
      <Form {...configsForm} form={form} onFinish={handleSubmit}>
        <div className="control">
          <Form.Item label="Group product" name="groupProduct" rules={rules}>
            <Select
              {...configsSelect}
              placeholder="Search to Select"
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
              {...configsSelect}
              placeholder="Search to Select"
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
              {...configsSelect}
              placeholder={"Search to Select"}
              options={dataCategories}
              onChange={handleChangeCategory}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() => handleOpentFormContent("category", "category")}
          />
        </div>

        <div className="control">
          <Form.Item label="Category Child" name="categoryChild" rules={rules}>
            <Select
              {...configsSelect}
              placeholder={"Search to Select"}
              options={dataChild}
            />
          </Form.Item>
          <Button
            icon={<PlusOutlined />}
            className="btn-open-form"
            onClick={() =>
              handleOpentFormContent("categoryChild", "category child")
            }
          />
        </div>

        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>

        <Row>
          <Col sm="6">
            <div className="control">
              <Form.Item label="Colors" name="colors" rules={rules}>
                <Select
                  {...configsSelect}
                  mode="multiple"
                  placeholder="Search to Select"
                  options={dataColors}
                  onChange={handleChangeColors}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("color", "Color")}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Sizes" name="sizes" rules={rules}>
                <Select
                  {...configsSelect}
                  mode="multiple"
                  placeholder="Search to Select"
                  options={dataSizes}
                  onChange={handleChangeSizes}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("size", "Size")}
              />
            </div>
          </Col>
          <Row>
            {colorsSelect.length > 0 &&
              sizesSelect.length > 0 &&
              colorsSelect.map((color) =>
                sizesSelect.map((size) => (
                  <Col sm="4" key={`${color.value}-${size.value}`}>
                    <Form.Item
                      name={`${color.value}-${size.value}`}
                      rules={rules}
                      label={`Số lượng sản phẩm màu ${color.label} - size ${size.label}`}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                )),
              )}
          </Row>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Sex" name="sex" rules={rules}>
                <Select
                  {...configsSelect}
                  placeholder="Search to Select"
                  options={dataSex}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("sex", "sex")}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Form" name="form" rules={rules}>
                <Select
                  {...configsSelect}
                  placeholder="Search to Select"
                  options={dataForms}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("form", "form")}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Design" name="design" rules={rules}>
                <Select
                  {...configsSelect}
                  placeholder="Search to Select"
                  options={dataDesigns}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("design", "design")}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Material" name="material" rules={rules}>
                <Select
                  {...configsSelect}
                  placeholder="Search to Select"
                  options={dataMaterials}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("material", "material")}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Hand Type" name="handType" rules={rules}>
                <Select
                  {...configsSelect}
                  placeholder="Search to Select"
                  options={dataHandTypes}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() => handleOpentFormContent("handType", "Hand Type")}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="control">
              <Form.Item label="Collar Type" name="collarType" rules={rules}>
                <Select
                  {...configsSelect}
                  placeholder="Search to Select"
                  options={dataCollarTypes}
                />
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="btn-open-form"
                onClick={() =>
                  handleOpentFormContent("collarType", "Collar Type")
                }
              />
            </div>
          </Col>

          <Col sm="6">
            <Form.Item label="Price" name="price" rules={rules}>
              <Input placeholder="Price" type="number" />
            </Form.Item>
          </Col>

          <Col sm="6">
            <Form.Item label="Sale" name="sale" rules={rules}>
              <Input placeholder="Sale" type="number" min="0" max="100" />
            </Form.Item>
          </Col>
        </Row>
        <Uploads label="Description Image" multiple />

        <Form.Item label="Description" name="description">
          <Editor handleGetData={(values) => setDesc(values)} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
