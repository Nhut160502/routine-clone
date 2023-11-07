import React from "react";
import { useParams } from "react-router-dom";
import {
  StoreColor,
  StoreDesign,
  StoreForm,
  StoreHandType,
  StoreMaterial,
  StoreSex,
  StoreSize,
} from "src/auth/components";

const Store = () => {
  const { slugAttr } = useParams();

  switch (slugAttr) {
    case "colors":
      return <StoreColor />;
    case "sizes":
      return <StoreSize />;
    case "form":
      return <StoreForm />;
    case "material":
      return <StoreMaterial />;
    case "sex":
      return <StoreSex />;
    case "design":
      return <StoreDesign />;
    case "hand-type":
      return <StoreHandType />;
    default:
      break;
  }
};

export default Store;
