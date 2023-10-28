import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "src/components/Breadcrumbs";
import Button from "src/components/Button";
import Checkbox from "src/components/Checkbox";
import {
  IconLocationBig,
  IconMethodPayment,
  IconMethodShipping,
  IconShoppingCartBlack,
} from "src/components/Icon";
import ProductCheckout from "src/components/ProductCheckout";
import { styled } from "styled-components";

const Checkout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
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
              <div className="control">
                <input type="text" placeholder="Họ *" />
              </div>
              <div className="control">
                <input type="text" placeholder="Tên *" />
              </div>
              <div className="control">
                <input type="number" placeholder="Số điện thoại *" />
              </div>
              <div className="control">
                <select>
                  <option value="">Tỉnh/Thành Phố *</option>
                </select>
              </div>
              <div className="control">
                <select>
                  <option value="">Quận/Huyện *</option>
                </select>
              </div>
              <div className="control">
                <select>
                  <option value="">Phường/Xã *</option>
                </select>
              </div>
              <div className="control">
                <input type="text" placeholder="Số nhà/tên đường" />
              </div>
              <div className="control">
                <input type="email" placeholder="Email" />
              </div>
              <div className="control">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </Infor>
        </Col>
        <Col sm="4">
          <Right>
            <Discount>
              <div className="title">
                <h1>MÃ COUPON ƯU ĐÃI</h1>
              </div>
              <div className="content">
                <input type="text" />
                <Button transparent>Áp Dụng</Button>
              </div>
            </Discount>
            <Summary>
              <div className="title">
                <h1>Tạm tính</h1>
              </div>
              <div className="content">
                <div className="item">
                  <span>Số lượng</span>
                  <span>1</span>
                </div>
                <div className="item">
                  <span>Tạm tính</span>
                  <span>422.000&nbsp;₫</span>
                </div>
                <div className="item">
                  <span>Phí vận chuyển</span>
                  <span>0&nbsp;₫</span>
                </div>
              </div>
              <div className="total">
                <div className="item">
                  <span className="span">Tổng cộng</span>
                  <h1>422.000&nbsp;₫</h1>
                </div>
              </div>
            </Summary>
            <Payment>
              <div className="company">
                <Checkbox label="Xuất hoá đơn công ty" bold />
              </div>
              <div className="method-shiping">
                <div className="title">
                  <IconMethodShipping className="icon" />
                  <h1>Phương thức vận chuyển</h1>
                </div>
                <div className="method">
                  <Checkbox
                    checked
                    label={
                      <span>
                        Giao Hang Nhanh (<span className="price">0&nbsp;đ</span>
                        )
                      </span>
                    }
                  />
                </div>
              </div>
              <div className="method-payment">
                <div className="title">
                  <IconMethodPayment className="icon" />
                  <h1>Phương thức thanh toán</h1>
                </div>
                <div className="method">
                  <Checkbox label="Thanh toán khi nhận hàng" checked />
                </div>
                <div className="method">
                  <Checkbox
                    label={
                      <>
                        <span>Thẻ ATM/Visa/Master/JCB/QRCode qua Payoo</span>
                        <span className="desc">
                          Bạn sẽ chuyển sang cổng thanh toán Payoo để thanh toán
                        </span>
                      </>
                    }
                  />
                </div>
              </div>
            </Payment>
            <Button style={{ gap: "5px" }} border>
              <span>Thanh toán</span>
              <span>422.000&nbsp;₫</span>
            </Button>
          </Right>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Payment = styled.div`
  .company {
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .desc {
    display: block;
    color: #c5c5c5;
    font-size: 12px;
    line-height: 20px;
  }

  .title {
    position: relative;
    padding-left: 34px;
    line-height: 20px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    h1 {
      font-weight: 700;
      text-transform: uppercase;
    }

    .icon {
      position: absolute;
      transform: translateY(-50%);
      left: 0;
      top: 50%;
      right: 0;
    }
  }
  .method {
    margin-bottom: 1rem;
  }
  .method-shiping {
    padding-bottom: 15px;
  }
`;

const Discount = styled.div`
  padding: 30px 25px 10px;
  background: #f7f7f7;
  margin-bottom: 30px;
  padding: 30px 20px 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;

  .title {
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    input {
      background: #fff;
      border: 1px solid #e3e3e3;
      height: 40px;
      border-radius: 0;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #000;
      padding: 9px 14px;
      display: block;
      width: 100%;
    }

    button {
      width: 85px;
      font-size: 14px;
      padding: 0;
      font-weight: 700;
    }
  }
`;

const Summary = styled.div`
  border: 1px solid #dedede;
  padding: 30px 25px 20px;
  margin-bottom: 28px;
  .title {
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  .content {
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    padding-left: 0;
    span {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #030303;
    }
    h1 {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
    }
  }
  .total {
    margin-top: 20px;
    padding-top: 23px;
    border-top: 1px solid #d6d6d6;
  }
`;

const Infor = styled.div`
  padding-right: 60px;
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
  .shipping {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    .control {
      select,
      textarea,
      input {
        height: 48px;
        width: 100%;
        line-height: 1.5;
        font-size: 15px;
        padding: 0 15px;
        background-color: #f1f1f1;
        outline: none;
        border: 1px solid #e4e4e4;
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
  padding-bottom: 44px;
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
  padding-right: 60px;
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
