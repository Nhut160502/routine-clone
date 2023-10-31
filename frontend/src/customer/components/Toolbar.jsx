import React, { useEffect, useState } from "react";
import { IconGird3, IconGird4 } from "./Icon";
import { PropTypes } from "prop-types";
import { styled } from "styled-components";

const Toolbar = (props) => {
  let { getGrid } = props;
  const [gird, setGird] = useState(3);

  useEffect(() => {
    getGrid && getGrid(gird);
  }, [getGrid, gird]);
  return (
    <Wrapper>
      <div className="total">
        <span>
          <b>431</b> sản phẩm
        </span>
      </div>
      <div className="display">
        <span>Hiển thị {gird === 3 ? "4" : "3"}</span>
        <IconGird4 onClick={() => setGird(3)} />
        <IconGird3 onClick={() => setGird(4)} />
      </div>
      <div className="sorter">
        <label htmlFor="sorter">Sắp xếp</label>
        <select id="sorter">
          <option value="position" selected="selected">
            Mặc định
          </option>
          <option value="name_asc">Thứ tự chữ cái A-Z</option>
          <option value="name_desc">Thứ tự chữ cái Z-A</option>
          <option value="price_asc">Giá tăng dần</option>
          <option value="price_desc">Giá giảm dần</option>
          <option value="created_at_desc">Sản phẩm mới nhất</option>
        </select>
      </div>
    </Wrapper>
  );
};

Toolbar.propTypes = {
  getGrid: PropTypes.func,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  margin-bottom: 22px;
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 15px;
  }
  img {
    border: 1px solid #000;
    padding: 2px;
  }
  span {
    font-size: 15px;
  }
  .total {
    position: absolute;
    left: 50%;
    translate: -50%;
    span {
      font-size: 18px !important;
    }
  }
  select {
    background: #fff;
    border: 1px solid #000;
    border-radius: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #000;
    outline: none;
  }
  img {
    cursor: pointer;
  }
`;
export default Toolbar;
