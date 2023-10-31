import React from "react";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";

const Control = (props) => {
  const { id, type, value, label, placeholder, children, min, max } = props;
  console.log(placeholder);
  return (
    <Wrapper {...props}>
      <label htmlFor={id}>{label}</label>
      <input
        min={min}
        max={max}
        type={type || "text"}
        id={id}
        value={value}
        placeholder={placeholder}
      />
      {children}
    </Wrapper>
  );
};
Control.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
  min: PropTypes.string,
  max: PropTypes.string,
};
const Wrapper = styled.div`
  margin-bottom: 25px;
  > label {
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

  > input {
    padding: 0 1rem;
    width: 100%;
    background: #f1f1f1;
    border: 1px solid #e4e4e4;
    height: 48px;
  }
  input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    background: #c4c4c4;
    border-radius: 11px;
    padding: 0;
    cursor: default;
    color: #000;
    padding: initial;
    border: initial;
    margin: 2px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;

    /*custom styles*/
    background-color: #000;
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
  }
`;
export default Control;
