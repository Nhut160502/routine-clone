import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Uploads } from "src/auth/components";
import Editor from "src/auth/components/Editor";
import FormContent from "src/auth/components/FormContent";
import { configsForm, configsSelect, rules } from "src/auth/configs";

import {
  getCategoryByIdGroup,
  getListAttribute,
  getListCategoryChild,
  getListCollection,
  getListGroupProduct,
  showChildbyIdCategory,
  showProduct,
} from "src/auth/services";
import { getDataApi, getDataApiParams } from "src/auth/utils/fetchApi";

const Edit = () => {
  const [form] = useForm();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDataApiParams(
        dispatch,
        showProduct,
        slug,
        setData,
        true,
      );
      getDataApi(dispatch, getListGroupProduct, setDataGroups);
      getDataApi(dispatch, getListCollection, setDataCollections);
      getDataApiParams(
        dispatch,
        getCategoryByIdGroup,
        res.groupProduct._id,
        setDataCategories,
      );
      getDataApiParams(
        dispatch,
        showChildbyIdCategory,
        res.category._id,
        setDataChild,
      );
      getDataApiParams(dispatch, getListAttribute, "colors", setDataColors);
      getDataApiParams(dispatch, getListAttribute, "sizes", setDataSizes);
      getDataApiParams(dispatch, getListAttribute, "forms", setDataForms);
      getDataApiParams(dispatch, getListAttribute, "designs", setDataDesigns);
      getDataApiParams(
        dispatch,
        getListAttribute,
        "materials",
        setDataMaterials,
      );
      getDataApiParams(dispatch, getListAttribute, "sex", setDataSex);
      getDataApiParams(
        dispatch,
        getListAttribute,
        "hand-types",
        setDataHandTypes,
      );
      getDataApiParams(
        dispatch,
        getListAttribute,
        "collar-types",
        setDataCollarTypes,
      );

      const colorsFields = [];
      const sizesFields = [];

      console.log(colorsFields);

      res.colors.map((color) => {
        colorsFields.push(color._id);
        return setSColorsSelect((pre) => [
          ...pre,
          { label: color.name, value: color._id },
        ]);
      });

      res.sizes.map((size) => {
        sizesFields.push(size._id);
        return setSizesSelect((pre) => [
          ...pre,
          { label: size.name, value: size._id },
        ]);
      });

      res.stock.map((item) =>
        form.setFieldsValue({
          [`${item.color._id}-${item.size._id}`]: item.qty,
        }),
      );

      form.setFieldsValue({
        name: res.name,
        groupProduct: res.groupProduct?._id,
        collection: res.collection?._id,
        category: res.category?._id,
        categoryChild: res.categoryChild?._id,
        colors: colorsFields,
        sizes: sizesFields,
        form: res.attribute.form?._id,
        sex: res.attribute.sex?._id,
        design: res.attribute.design?._id,
        material: res.attribute.material?._id,
        handType: res.attribute.handType?._id,
        collarType: res.attribute.collarType?._id,
        price: res.price,
        sale: res.sale,
      });
    };
    fetchData();
  }, [slug, dispatch, form]);

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

  const handleChangeColors = (id, data) => {};
  // setSColorsSelect((pre) => [...pre, data]);

  const handleChangeSizes = (id, data) => {};
  // setSizesSelect((pre) => [...pre, data]);

  const handleGetThumbnail = (files, id) => {
    if (files.length > 0) {
      const check = thumbnail?.some((item) => item.id === id);
      !check && setThumbnail((pre) => [...pre, { id: id, img: files[0] }]);
    } else {
      setThumbnail(thumbnail.filter((item) => item.id !== id));
    }
  };

  const handleGetGallary = (files, id) => {
    if (files.length > 0) {
      const check = gallery.some((item) => item.id === id);
      if (!check) {
        setGallery((pre) => [...pre, { id: id, imgs: files }]);
      } else {
        gallery.map(
          (item, key) => item.id === id && (gallery[key].imgs = files),
        );
      }
    } else {
      setGallery(gallery.filter((item) => item.id !== id));
    }
  };

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
            <Select {...configsSelect} options={dataCollections} />
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
            <Select {...configsSelect} options={dataChild} />
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
          <Input />
        </Form.Item>

        {colorsSelect.length > 0 &&
          colorsSelect.map((item) => (
            <Fragment key={item.value}>
              <>
                <Uploads
                  data={
                    (data.media.some((media) => media.color === item.value) &&
                      data?.media?.find((media) => media.color === item.value)
                        .thumbnail) ||
                    false
                  }
                  label={`Ảnh đại diện sản phẩm màu ${item.label}`}
                  onGetFiles={(files) => handleGetThumbnail(files, item.value)}
                />
                <Uploads
                  data={
                    (data.media.some((media) => media.color === item.value) &&
                      data?.media?.find((media) => media.color === item.value)
                        .gallery) ||
                    false
                  }
                  label={`Ảnh chi tiết sản phẩm màu ${item.label}`}
                  multiple
                  onGetFiles={(files) => handleGetGallary(files, item.value)}
                />
              </>
            </Fragment>
          ))}

        <Row>
          <Col sm="6">
            <div className="control">
              <Form.Item label="Colors" name="colors" rules={rules}>
                <Select
                  mode="multiple"
                  {...configsSelect}
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
                <Select {...configsSelect} options={dataSex} />
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
                <Select {...configsSelect} options={dataForms} />
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
                <Select {...configsSelect} options={dataDesigns} />
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
                <Select {...configsSelect} options={dataMaterials} />
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
                <Select {...configsSelect} options={dataHandTypes} />
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
                <Select {...configsSelect} options={dataCollarTypes} />
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
              <Input />
            </Form.Item>
          </Col>

          <Col sm="6">
            <Form.Item label="Sale" name="sale" rules={rules}>
              <Input />
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
