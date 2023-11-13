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
import StoreCategoryChild from "../pages/CategoryChild/Store";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const FormContent = (props) => {
  const { state, title, handleClose, handleFinish } = props;

  const [pre, setPre] = useState(null);

  const Content = () => {
    switch (state) {
      case "group":
        setPre("group");
        return <StoreGroup handleFinish={handleFinish} />;
      case "collection":
        setPre("collection");
        return <StoreCollection handleFinish={handleFinish} />;
      case "category":
        setPre("category");
        return <StoreCategory handleFinish={handleFinish} />;
      case "categoryChild":
        setPre("categoryChild");
        return <StoreCategoryChild handleFinish={handleFinish} />;
      case "color":
        setPre("color");
        return <StoreColor handleFinish={handleFinish} />;
      case "size":
        setPre("size");
        return <StoreSize handleFinish={handleFinish} />;
      case "design":
        setPre("design");
        return <StoreDesign handleFinish={handleFinish} />;
      case "material":
        setPre("material");
        return <StoreMaterial handleFinish={handleFinish} />;
      case "sex":
        setPre("sex");
        return <StoreSex handleFinish={handleFinish} />;
      case "form":
        setPre("form");
        return <StoreForm handleFinish={handleFinish} />;
      case "handType":
        setPre("handType");
        return <StoreHandType handleFinish={handleFinish} />;

      default:
        switch (pre) {
          case "group":
            return <StoreGroup />;
          case "collection":
            return <StoreCollection />;
          case "category":
            return <StoreCategory />;
          case "categoryChild":
            return <StoreCategoryChild />;
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
            break;
        }
    }
  };

  return (
    <div
      className={state ? "form-add-wrapper active" : "form-add-wrapper"}
      id="form-content"
    >
      <div className="form-add-content">
        <Button
          icon={<CloseOutlined />}
          className="form-add-btn-close btn-open-form"
          onClick={handleClose}
        />
        <div className="title">
          <h1>Store {title}</h1>
        </div>
        <Content />
      </div>
    </div>
  );
};

FormContent.propTypes = {
  state: PropTypes.string,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  handleFinish: PropTypes.func,
};

export default FormContent;
