import React from "react";
import loader from "../assets/loader.gif";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector((state) => state.loading);

  return (
    <Wrapper className={loading.active && "active"}>
      <img src={loader} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  background: rgba(255, 255, 255, 0.5);
  z-index: 9999;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Loading;
