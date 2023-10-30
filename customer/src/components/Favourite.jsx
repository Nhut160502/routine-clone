import React from "react";
import { styled } from "styled-components";
import FavouriteItem from "./FavouriteItem";
import { useSelector } from "react-redux";

const Favourite = () => {
  const { open } = useSelector((state) => state?.favourite);
  console.log(open);
  return (
    <Wrapper className={open && "active"}>
      <FavouriteItem />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  transition: all 0.3s;
  height: 100vh;
  position: fixed;
  right: -500px;
  z-index: 3;
  padding: 40px 0;
  background-color: #fff;

  &.active {
    right: 0;
  }
`;
export default Favourite;
