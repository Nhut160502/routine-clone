import React from "react";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";

const Radio = (props) => {
  const { label, bold, checked } = props;
  return (
    <Wrapper
      className={`${bold === true ? "bold" : ""}${
        checked === true ? "checked" : ""
      }`}
    >
      <div className="radio">
        <div></div>
      </div>
      <label>{label}</label>
    </Wrapper>
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  bold: PropTypes.bool,
  checked: PropTypes.bool,
};

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  gap: 1rem;
  .radio {
    width: 18px;
    height: 18px;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid #000;
    div {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  &.checked {
    .radio {
      > div {
        background-color: #000;
      }
    }
  }
  label {
    font-size: 16px;
    font-weight: 400;
  }
  &.bold {
    label {
      font-weight: 700 !important;
    }
  }
`;

export default Radio;
