import React, { useState } from "react";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";

const Checkbox = (props) => {
  const { name, id, label, value, checked } = props;
  const [stateCheck, setStateCheck] = useState(checked || false);

  return (
    <Wrapper>
      <input
        hidden
        id={id}
        type="checkbox"
        name={name || ""}
        value={value}
        onChange={() => setStateCheck(!stateCheck)}
        defaultChecked={checked || false}
      />
      <label htmlFor={id} className={stateCheck && "checked"}>
        {label}
      </label>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string || PropTypes.node,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

const Wrapper = styled.div`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    min-height: 18px;
    padding-left: 30px;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    &::before {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      border: 1px solid #afafaf;
      border-radius: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    &.checked {
      &::before {
        content: "";
        display: block;
        width: 18px;
        height: 18px;
        border: 1px solid #afafaf;
        border-radius: 0;
        position: absolute;
        top: 0;
        left: 0;
        border-color: #000;
        background: #000
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpath d='M11.1652 1.18048C11.7192 1.69986 11.7473 2.57001 11.2279 3.12402L5.94644 8.75761C5.43677 9.30126 4.58679 9.33996 4.02983 8.84488L0.860929 6.02808C0.293352 5.52357 0.242229 4.65447 0.746741 4.0869C1.25125 3.51932 2.12035 3.4682 2.68793 3.97271L4.85603 5.89991L9.22171 1.24318C9.74109 0.689175 10.6112 0.661105 11.1652 1.18048Z' fill='white'/%3E%3C/svg%3E")
          no-repeat center;
      }
    }
  }
`;
export default Checkbox;
