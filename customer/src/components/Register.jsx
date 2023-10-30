import React from "react";
import { styled } from "styled-components";
import { IconArrowRight, IconClose } from "./Icon";
import { Col, Row } from "react-bootstrap";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideRegister } from "src/providers/registerSlice";
import { hiddeOverlay } from "src/providers/overlaySlice";
import Control from "./Control";

const Register = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state?.register);
  const handleClose = () => {
    dispatch(hideRegister());
    dispatch(hiddeOverlay());
  };
  return (
    <Wrapper className={open && "active"}>
      <Content>
        <IconClose className="btn-close" onClick={handleClose} />
        <Title>
          <h3>Đăng ký</h3>
          <span>
            Trở thành thành viên Routine <br />
            để nhận nhiều những chương trình ưu đãi hấp dẫn,
          </span>
        </Title>
        <Form>
          <Row>
            <Col sm="6">
              <Control id="surname" label="Họ" />
            </Col>
            <Col sm="6">
              <Control id="name" label="Tên" />
            </Col>
            <Control id="email" label="Email" type="email" />
            <Control id="phone-number" label="Số điện thoại" type="number" />
            <Control id="otp" label="Mã OTP" type="number" className="otp">
              <Button>Gửi mã otp</Button>
            </Control>
            <Control id="password" label="Mật khẩu" type="password" />
            <Control
              id="password-confirm"
              label="Nhập lại mật khẩu"
              type="password"
            />
            <div className="choise notification">
              <Checkbox
                name="notification"
                label={<span>Tôi muốn nhận bản tin của Routine qua email</span>}
                id="notification"
                value="1"
              />
            </div>
            <div className="choise faq">
              <Checkbox
                name="notification"
                label={
                  <span>
                    Tôi chấp nhận{" "}
                    <a href="https://routine.vn/privacy-policy-cookie-restriction-mode/">
                      điều khoản quyền riêng tư và bảo mật
                    </a>
                  </span>
                }
                id="ok"
                value="2"
              />
            </div>
          </Row>
          <Button>Đăng ký tài khoản</Button>
          <Link>
            <IconArrowRight />
            <span>Đăng nhập</span>
          </Link>
        </Form>
      </Content>
    </Wrapper>
  );
};

const Form = styled.div`
  .otp {
    position: relative;
    input {
      width: 70%;
    }
    button {
      position: absolute;
      right: 12px;
      bottom: 0;
      height: 48px;
      width: 30%;
      background: #e3b386;
      border-color: #e3b386 !important;
      padding: 0;
    }
  }
  .choise {
    margin-bottom: 30px;
    span {
      font-weight: 400;
      font-size: 13px;
      color: #000;
    }
    a {
      text-decoration: underline;
    }
  }
  > button {
    width: 100%;
  }
  > a {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    img {
      rotate: -180deg;
    }
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

  &.active {
    top: 50%;
    transform: translateY(-50%);
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

const Content = styled.div`
  padding: 68px 70px;
  max-width: 500px;
  background-color: #fff;
  position: relative;
  height: 80%;
  overflow-y: auto;
  .btn-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
`;

export default Register;
