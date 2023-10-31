import React from "react";
import { styled } from "styled-components";
import { IconUserBlack } from "./Icon";
import { Link, useLocation } from "react-router-dom";

const Account = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Wrapper>
      <Title>
        <IconUserBlack />
        <h2>Tài khoản của bạn</h2>
      </Title>
      <Content>
        <Top>
          <div className="customer-name">
            <h3>Nhựt Huỳnh</h3>
          </div>
          <div className="customer-rank">
            <span>Member</span>
          </div>
        </Top>
        <Nav>
          <ul>
            <li className={pathname === "/customer/account" && "current"}>
              {pathname === "/customer/account" &&
                (<strong>Thông tin tài khoản</strong> || (
                  <Link to="https://routine.vn/customer/account/">
                    Thông tin tài khoản
                  </Link>
                ))}
            </li>
            <li>
              <Link>Hạng hội viên</Link>
            </li>
            <li>
              <Link to="https://routine.vn/sales/order/history/">
                Lịch sử mua hàng
              </Link>
            </li>
            <li>
              <Link to="https://routine.vn/customer/address/">
                Địa chỉ giao hàng
              </Link>
            </li>
            <li>
              <Link to="https://routine.vn/customer/store/index/">
                Danh sách cửa hàng
              </Link>
            </li>
            <li>
              <Link to="https://routine.vn/wishlist/">Sản phẩm yêu thích</Link>
            </li>
            <li>
              <Link to="https://routine.vn/customer/promotion/index/">
                Ưu đãi của bạn
              </Link>
            </li>
            <li>
              <Link to="https://routine.vn/customer/account/logout/">
                Đăng xuất
              </Link>
            </li>
          </ul>
        </Nav>
      </Content>
    </Wrapper>
  );
};

const Top = styled.div`
  padding: 26px 0 31px;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #000;
    display: block;
  }
  span {
    border-radius: 19px;
    display: block;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #fff;
    padding: 8px 14px;
    background-color: #000;
    text-transform: uppercase;
  }
`;
const Nav = styled.div`
  ul {
    li {
      position: relative;
      a {
        font-size: 16px;
        line-height: 20px;
        color: #000;
        padding: 10px 12px 10px 0;
        background-color: transparent;
        border: none;
        font-weight: 400;
        display: block;
        &:hover {
          text-decoration: underline;
        }
      }

      &.current {
        &::before {
          content: "";
          width: 4px;
          top: 8px;
          bottom: 8px;
          left: -20px;
          background: #000;
          display: block;
          position: absolute;
        }
        strong {
          font-size: 16px;
          line-height: 20px;
          color: #000;
          padding: 10px 12px 10px 0;
          background-color: transparent;
          border: none;
          display: block;
          font-weight: 700;
        }
      }
    }
  }
`;
const Title = styled.div`
  display: flex;
  margin-left: -38px;
  gap: 1rem;
  margin-bottom: 35px;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000;
    align-items: center;
  }
`;
const Content = styled.div`
  border: 1px solid #e0e0e0;
  padding: 0 20px 8px;
`;
const Wrapper = styled.div`
  width: 100%;
`;
export default Account;
