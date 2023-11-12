import React, { useState } from "react";
import { PropTypes } from "prop-types";

import {
  StoreColor,
  StoreDesign,
  StoreMaterial,
  StoreSize,
  StoreSex,
  StoreForm,
  StoreHandType,
} from "src/auth/components";
import StoreGroup from "../pages/GroupProduct/Store";
import StoreCollection from "../pages/Collection/Store";
import StoreCategory from "../pages/Category/Store";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const FormContent = (props) => {
  let { state, title } = props;
  const [formContent, setFormContent] = useState({
    state: state,
    title: title,
  });

  const Content = () => {
    switch (formContent.state) {
      case "group":
        return <StoreGroup />;
      case "collection":
        return <StoreCollection />;
      case "category":
        return <StoreCategory />;
      case "color":
        return <StoreColor />;
      case "size":
        return <StoreSize />;
      case "design":
        return <StoreDesign />;
      case "material":
        return <StoreMaterial />;
      case "sex":
        return <StoreSex />;
      case "form":
        return <StoreForm />;
      case "handType":
        return <StoreHandType />;
      default:
    }
  };

  return (
    <div
      className={
        formContent.state ? "form-add-wrapper active" : "form-add-wrapper"
      }
      id="form-content"
    >
      <div className="form-add-content">
        <Button
          icon={<CloseOutlined />}
          className="form-add-btn-close btn-open-form"
          onClick={() => setFormContent({ state: null, title: title })}
        />
        <div className="title">
          <h1>Store {formContent.title}</h1>
        </div>
        <Content />
      </div>
    </div>
  );
};

FormContent.propTypes = {
  state: PropTypes.string,
  title: PropTypes.string,
};

export default FormContent;
