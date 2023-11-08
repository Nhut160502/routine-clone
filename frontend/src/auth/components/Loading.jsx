import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <LoadingOutlined className="icon-loading" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;

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
