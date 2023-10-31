import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Quantity from "./Quantity";

const CartItem = (props) => {
  return (
    <Wrapper>
      <Row>
        <Col sm="4">
          <Image>
            <img
              src="https://routine.vn/media/catalog/product/cache/9eb3bb38848a3053921b46e4936c5b10/q/u/quan-nu-10f23pknw002_beige_1__4.jpg"
              alt=""
            />
          </Image>
        </Col>
        <Col sm="8">
          <Infor>
            <div className="name">
              <Link>
                Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide Leg -
                10F23PKNW002
              </Link>
            </div>
            <div className="attribute">
              <div className="item">
                <span className="title">Màu</span>
                <span>Begie</span>
              </div>
              <div className="item">
                <span className="title">Size</span>
                <span>L</span>
              </div>
            </div>
            <Quantity small />
            <div className="price">
              <span>569.000&nbsp;₫</span>
            </div>
          </Infor>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px 0;
`;
const Infor = styled.div`
  padding: 10px 0 15px;
  .name {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #000;
    margin: 0 0 10px;
    text-transform: capitalize;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    min-height: 38px;
  }
  .attribute {
    margin-bottom: 10px;
    display: flex;
    gap: 1rem;
    .item {
      text-transform: uppercase;
      color: #6f6f6f;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      .title {
        margin-right: 5px;
        &::after {
          content: ":";
        }
      }
    }
  }
  .price {
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
    color: #000;
    margin-top: 10px;
  }
`;
const Image = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;
export default CartItem;
