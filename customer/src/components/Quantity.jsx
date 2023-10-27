import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Quantity = (props) => {
  const { value, max, getValue } = props;
  const [val, setVal] = useState(value || 1);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  useEffect(() => {
    getValue && getValue(val);
  }, [val, getValue]);

  const handleMinus = () => {
    if (val > 1) {
      setVal((pre) => Number(pre) - 1);
    }
  };
  const handlePlus = () => {
    setVal((pre) => Number(pre) + 1);
  };

  return (
    <Wrapper {...props}>
      <Minus onClick={handleMinus}>-</Minus>
      <Qty>
        <input
          type="number"
          value={val || 1}
          onChange={handleChange}
          min="1"
          max={max}
        />
      </Qty>
      <Plus onClick={handlePlus}>+</Plus>
    </Wrapper>
  );
};

Quantity.propTypes = {
  value: PropTypes.number,
  getValue: PropTypes.func,
  max: PropTypes.number,
};

const Wrapper = styled.div`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  display: flex;
  border: 1px solid #bfbfbf;
  width: 120px;
  > div {
    width: 40px;
    height: 46px;
    display: block;
    min-width: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
  }
`;
const Minus = styled.div``;
const Qty = styled.div`
  margin: auto;
  input {
    color: #000;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    height: 46px;
    width: 40px;
    border: none;
    outline: none;
    background-color: #fff;
    border-radius: 0;
    box-shadow: none;
    min-width: 40px;
    padding: 0;
    line-height: 46px;
  }
`;
const Plus = styled.div``;

export default Quantity;
