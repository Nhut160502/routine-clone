import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
const Button = (props) => {
  const { children, transparent, outline, border, white } = props;
  return (
    <Wrapper
      {...props}
      className={`${transparent && "transparent"} ${outline && "outline"} ${
        border && "border"
      } ${white && "white"}`}
    >
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  transparent: PropTypes.bool,
  outline: PropTypes.bool,
  border: PropTypes.bool,
  white: PropTypes.bool,
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 40px;
  padding: 0 2rem;
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid #000 !important;
  transition: all 0.3s;
  &.transparent {
    background-color: transparent !important;
    border: none !important;
    color: #000;
  }
  &.outline {
    background-color: transparent !important;
    color: #000;
  }
  &.border {
    border-radius: 10px;
  }
  &.white {
    color: #fff !important;
    border-color: #fff !important;
  }
`;

export default Button;
