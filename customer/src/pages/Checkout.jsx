import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "src/components/Breadcrumbs";
import {
  IconLocation,
  IconLocationBig,
  IconShoppingCartBlack,
} from "src/components/Icon";
import ProductCheckout from "src/components/ProductCheckout";
import { styled } from "styled-components";

const Checkout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      setData((pre) => [...pre, i]);
    }
  }, []);
  return (
    <Wrapper>
      <Breadcrumbs data={[{ name: "checkout" }]} />
      <Heading>
        <IconShoppingCartBlack className="icon" />
        <h1>Giỏ hàng</h1>
      </Heading>
      <Row>
        <Col sm="8">
          <Cart>
            <div className="total">
              <span>4</span>
              <span> sản phẩm</span>
            </div>
            <div className="content">
              {data.map((item) => (
                <ProductCheckout key={item} />
              ))}
            </div>
          </Cart>
          <Infor>
            <div className="account">
              <div className="title">
                <IconLocationBig />
                <h3>Thông tin giao hàng</h3>
              </div>
              <div className="login">
                <span>Bạn đã có tài khoản?</span>
                <Link>
                  <span>Đăng nhập ngay</span>
                </Link>
              </div>
            </div>
            <div className="shipping">
                <input type="text" />
            </div>
          </Infor>
        </Col>
        <Col sm="4">
          <Right></Right>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Infor = styled.div`
  .account {
    display: flex;
    align-items: center;
    gap: 4rem;
    padding-top: 19px;
    .title {
      display: flex;
      align-items: center;
      gap: calc(1rem - 4px);
      h3 {
        font-weight: 500;
        line-height: 1.2;
        font-size: 20px;
        margin-top: 1.65rem;
        margin-bottom: 25px;
      }
    }
    .login {
      line-height: 1.2;
      font-size: 15px;
      a {
        color: #63a1ff;
        margin-left: 4px;
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
`;

const Heading = styled.div`
  display: flex;
  gap: 30px;

  h1 {
    margin-top: 18px;
    font-size: 24px;
    line-height: 28px;
    display: inline-block;
    margin: 0 0 30px;
    font-weight: 700;
  }
  .icon {
    margin-top: 4px;
    width: 21px;
    height: 20px;
  }
`;

const Cart = styled.div`
  .total {
    margin-bottom: 10px;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 10px;
      margin-top: 0;
    }
  }
`;
const Right = styled.div``;

export default Checkout;
