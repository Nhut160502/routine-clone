import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const Overlay = () => {
  const { open } = useSelector((state) => state?.overlay);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);
  return <Wrapper className={open && "active"}></Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: none;

  &.active {
    display: block;
  }
`;

export default Overlay;
