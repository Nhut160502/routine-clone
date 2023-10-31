import React from "react";
import { styled } from "styled-components";
export const LogoNegative = () => {
  return (
    <Wrapper>
      <img
        src="https://routine.vn/media/logo/websites/1/logo-white-1.png"
        alt=""
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 120px;
  }
`;
