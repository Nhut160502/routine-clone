import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { IconClose, IconShoppingCartBlack } from "./Icon";
import CartItem from "./CartItem";
import Button from "./Button";
import { hiddeCart } from "src/providers/cartSlice";
import { hiddeOverlay } from "src/providers/overlaySlice";

const Cart = (props) => {
  const { open } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClickHiddeCart = () => {
    open && dispatch(hiddeCart());
    dispatch(hiddeOverlay());
  };
  return (
    <Wrapper className={open && "active"}>
      <Title>
        <IconShoppingCartBlack />
        <span>Giỏ hàng</span>
        <IconClose className="btn-close" onClick={handleClickHiddeCart} />
      </Title>
      <div className="total">
        <span>4 sản phẩm</span>
      </div>
      <Content>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Content>
      <Bottom>
        <div className="sub-total">
          <span>Tổng tiền :</span>
          <h2>2.227.000&nbsp;₫</h2>
        </div>
        <div className="btn-action">
          <Button outline border>
            Tiếp tục mua hàng
          </Button>
          <Button border>Thanh toán</Button>
        </div>
      </Bottom>
    </Wrapper>
  );
};

const Bottom = styled.div`
  padding: 20px 50px 30px;
  border-top: 1px solid #d6d6d6;
  bottom: 0;
  position: fixed;
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  max-height: 146px;

  .sub-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    span {
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
      color: #000;
    }
    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 17px;
      text-align: right;
      color: #000;
    }
  }
  .btn-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    button {
      width: -webkit-calc((100% - 18px)/2);
      width: calc((100% - 18px) / 2);
      padding: 0 1rem;
      height: 48px;
    }
  }
`;
const Wrapper = styled.div`
  width: 500px;
  transition: all 0.3s;
  height: 100vh;
  position: fixed;
  right: -500px;
  z-index: 3;
  padding: 40px 0;
  background-color: #fff;

  .total {
    padding: 0 50px;
    margin-bottom: 20px;
    span {
      font-size: 16px;
      line-height: 20px;
      color: #000;
      font-weight: 400;
    }
  }

  &.active {
    right: 0;
  }
`;
const Title = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  margin-bottom: 30px;
  span {
    font-size: 16px;
    line-height: 20px;
    color: #000;
    font-weight: 700;
  }
  .btn-close {
    position: absolute;
    right: 0;
  }
`;

const Content = styled.div`
  padding: 0 50px 20px 50px;
  overflow-y: auto;
  height: calc(100% - 146px);
`;
export default Cart;
