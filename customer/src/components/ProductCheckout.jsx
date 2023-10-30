import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Quantity from "./Quantity";
import { IconClose } from "./Icon";

const ProductCheckout = (props) => {
  return (
    <Wrapper>
      <Row>
        <Col sm="2" className="image">
          <img
            src="https://routine.vn/media/catalog/product/cache/9eb3bb38848a3053921b46e4936c5b10/q/u/quan-nu-10f23pknw002_beige_1__2.jpg"
            alt=""
          />
        </Col>
        <Col sm="10" className="infor">
          <div className="name">
            <Link>
              Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide Leg -
              10F23PKNW002
            </Link>
          </div>
          <div className="options">
            <div className="item-options after">
              <sapn className="label">MÀU</sapn>
              <span className="values"> BEIGE</span>
            </div>
            <div className="item-options">
              <sapn className="label">SIZE</sapn>
              <span className="values"> S</span>
            </div>
          </div>
          <Quantity small />
          <div className="price">
            <span>569.000&nbsp;₫</span>
          </div>
        </Col>
        <div className="btn-delete">
          <IconClose />
        </div>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 10px 0;
  width: 100%;
  .btn-delete {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 10px;
    width: auto;
    cursor: pointer;
  }
  .image {
    img {
      width: 100%;
    }
  }
  .infor {
    padding-left: 0;
    padding-top: 10px;
  }
  .name {
    min-height: auto;
    line-height: 1.5;
    padding-right: 25px;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 10px;
    a {
      text-transform: capitalize;
    }
  }
  .options {
    margin-bottom: 10px;
    .item-options {
      margin: 0 5px 0 0;
      display: inline;
    }
    .after {
      &::after {
        content: ",";
        display: inline;
        margin-left: 4px;
        color: #6f6f6f;
      }
    }
    .label,
    .values {
      margin: 0 2px 0 0;
      float: none;
      display: inline;
      font-weight: 400;
      font-size: 15px;
      color: #6f6f6f;
    }
  }
  .price {
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
    display: block;
    color: #000;
    margin-top: 15px;
  }
`;

export default ProductCheckout;
