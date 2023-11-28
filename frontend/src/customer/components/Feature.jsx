import React from "react";
import styled from "styled-components";
import {
  IconFreeShip,
  IconGHN,
  IconHotline,
  IconOrder,
  IconPay,
  IconReturns,
} from "./Icon";

const Feature = () => {
  return (
    <Wrapper>
      <div className="item">
        <div className="icon_">
          <IconGHN />
        </div>
        <div className="text">
          <strong>Giao hàng nhanh</strong>
          <p>Từ 2 - 5 ngày</p>
        </div>
      </div>
      <div className="item">
        <div className="icon_">
          <IconFreeShip />
        </div>
        <div className="text">
          <strong>Miễn phí vận chuyển</strong>
          <p>Đơn hàng từ 399K</p>
        </div>
      </div>
      <div className="item">
        <div className="icon_">
          <IconOrder />
        </div>
        <div className="text">
          <strong>Theo dõi đơn hàng một cách dễ dàng</strong>
        </div>
      </div>
      <div className="item">
        <div className="icon_">
          <IconReturns />
        </div>
        <div className="text">
          <strong>Đổi trả linh hoạt</strong>
          <p>Với sản phẩm không áp dụng khuyến mãi</p>
        </div>
      </div>
      <div className="item">
        <div className="icon_">
          <IconPay />
        </div>
        <div className="text">
          <strong>Thanh toán dễ dàng nhiều hình thức</strong>
        </div>
      </div>
      <div className="item">
        <div className="icon_">
          <IconHotline />
        </div>
        <div className="text">
          <strong>Hotline hỗ trợ</strong>
          <h3>039 9999 365</h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background: #f7f7f7;
  padding: 20px 35px;
  .item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 20px;
    .icon {
    }
    strong {
      display: block;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      margin-bottom: 4px;
      color: #000;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #737373;
    }
    h3 {
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: #000;
    }
  }
`;

export default Feature;
