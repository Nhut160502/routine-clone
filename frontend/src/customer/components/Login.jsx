import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { IconArrowRight, IconClose, IconFaceBook, IconGoogle } from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { hiddenLogin } from "../providers/loginSlice";
import { hiddeOverlay } from "../providers/overlaySlice";
import Control from "./Control";

const Login = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state?.login);
  const handleCloseLogin = () => {
    dispatch(hiddenLogin());
    dispatch(hiddeOverlay());
  };
  return (
    <Wrapper className={open && "active"}>
      <Content>
        <IconClose className="btn-close" onClick={handleCloseLogin} />
        <Title>
          <h3>Đăng nhập</h3>
          <span>
            Đăng nhập thành viên Routine <br /> để nhận nhiều những chương trình
            ưu đãi hấp dẫn,
          </span>
        </Title>
        <Form>
          <form>
            <Control id="email" label="Email/Số điện thoại" />
            <Control id="password" label="Mật khẩu" type="password" />
            <Link>Quên mật khẩu?</Link>
            <Button>Đăng nhập</Button>
            <div className="title">
              <span>Hoặc</span>
            </div>
          </form>
        </Form>
        <Bottom>
          <div className="btn-facebook">
            <Button>
              <span>Đăng nhập bằng facebook</span>
              <IconFaceBook />
            </Button>
          </div>
          <div className="btn-google">
            <Button>
              <span>Đăng nhập bằng google</span>
              <IconGoogle />
            </Button>
          </div>
          <div className="action">
            <Link>Bạn chưa có tài khoản?</Link>
            <Link>
              Đăng ký thành viên <IconArrowRight />
            </Link>
          </div>
        </Bottom>
      </Content>
    </Wrapper>
  );
};

const Bottom = styled.div`
  img {
    width: 10px;
  }
  button {
    width: 100%;
    height: 35px;
    text-transform: none;
    margin-bottom: 20px;
  }
  .btn-facebook {
    button {
      background-color: #3b5998;
      border: 1px solid #3b5998;
      color: #fff;
    }
    img {
      background-color: #fff;
      width: 20px;
      height: 20px;
      margin-left: -8px;
    }
  }
  .action {
    text-align: center;
    font-weight: 400;
    line-height: 19px;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    a {
      font-size: 15px;
    }
  }
`;

const Content = styled.div`
  padding: 68px 70px;
  max-width: 500px;
  background-color: #fff;
  position: relative;
  .btn-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  display: flex;
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  position: fixed;
  top: -100%;
  z-index: 3;
  height: 100vh;
  overflow-y: auto;

  &.active {
    top: 0;
  }
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin: 0 0 15px;
  }
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    display: block;
  }
`;
const Form = styled.div`
  button {
    width: 100%;
  }
  .title {
    margin-top: 30px;
    margin-bottom: 10px;
    position: relative;
    text-align: center;
    z-index: 1;
    span {
      padding: 0 10px;
      z-index: 1;
      position: relative;
      padding: 0 10px;
      font-size: 16px;
      background: #fff;
    }
    &::before {
      content: "";
      height: 1px;
      width: 100%;
      position: absolute;
      top: 50%;
      background-color: #333;
      left: 0;
    }
  }
`;

export default Login;
