import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "src/providers/loginSlice";
import { openOverlay } from "src/providers/overlaySlice";
import { hiddeSubUser } from "src/providers/subUserSlice";
import { openRegister } from "src/providers/registerSlice";

const SubUser = () => {
  const { open } = useSelector((state) => state?.subUser);
  const dispatch = useDispatch();
  const handleActiveLogin = () => {
    dispatch(openLogin());
    dispatch(openOverlay());
    dispatch(hiddeSubUser());
  };
  const handleActiveRegister = () => {
    dispatch(openRegister());
    dispatch(hiddeSubUser());
    dispatch(openOverlay());
  };

  return (
    <Wrapper className={open && "active"}>
      <Button onClick={handleActiveLogin}>Đăng nhập</Button>
      <Button outline onClick={handleActiveRegister}>
        Đăng Ký
      </Button>
      <ul>
        <li>
          <Link>Theo dõi đơn hàng</Link>
        </li>
        <li>
          <Link>Khách hàng thành viên</Link>
        </li>
        <li>
          <Link>Danh sách cửa hàng</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  box-shadow: 0px 6px 4px rgba(179, 179, 179, 0.25);
  padding: 25px 20px 20px;
  top: 100%;
  margin-top: 10px;
  right: 100px;
  z-index: 50;
  width: 240px;
  display: none;

  button {
    width: 100%;
    margin-bottom: 10px;
  }
  ul {
    li {
      padding: 6px 0;
    }
    a {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
    }
  }
  &.active {
    display: block;
  }
`;

export default SubUser;
