import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import logoLoading from "../assets/images/dark-loader.gif";

const Loading = () => {
  const { active } = useSelector((state) => state?.loading);
  return (
    <Wrapper className={active && "active"}>
      <img src={logoLoading} alt="" />
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
  img {
    width: 30px;
  }

  &.active {
    display: flex;
  }
`;

export default Loading;
