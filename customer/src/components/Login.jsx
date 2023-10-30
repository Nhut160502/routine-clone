import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { IconArrowRight, IconFaceBook, IconGoogle } from "./Icon";

const Login = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <h3>Đăng nhập</h3>
          <span>
            Đăng nhập thành viên Routine <br /> để nhận nhiều những chương trình
            ưu đãi hấp dẫn,
          </span>
        </Title>
        <Form>
          <form>
            <div className="control">
              <label htmlFor="email">Email/Số điện thoại</label>
              <input type="text" />
            </div>
            <div className="control">
              <label htmlFor="password">Mật khẩu</label>
              <input type="password" />
            </div>
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
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  z-index: 2;
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
  .control {
    margin-bottom: 16px;
    label {
      display: block;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      color: #000;
      margin: 0 0 10px;

      &::after {
        content: "*";
        color: #e40a0a;
        font-size: 15px;
        margin-left: 4px;
      }
    }

    input {
      width: 100%;
      background: #f1f1f1;
      border: 1px solid #e4e4e4;
      height: 48px;
    }
  }
  a {
    display: block;
    margin-bottom: 30px;
    text-align: center;
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    text-decoration: underline;
  }
  button {
    width: 100%;
    height: 48px;
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
