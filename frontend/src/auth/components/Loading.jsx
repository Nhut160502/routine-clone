import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Loading = () => {
  const { active } = useSelector((state) => state?.loading);
  return (
    <Wrapper className={active && "active"}>
      <LoadingOutlined className="icon-loading" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99999;

  .icon-loading {
    width: 30px;
    height: 30px;
    color: #fff;
  }

  &.active {
    display: flex;
  }
`;

export default Loading;
