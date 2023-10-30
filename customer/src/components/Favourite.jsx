import React from "react";
import { styled } from "styled-components";
import FavouriteItem from "./FavouriteItem";

const Favourite = () => {
  return (
    <Wrapper>
      <FavouriteItem />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  transition: all 0.3s;
  height: 100vh;
  position: fixed;
  right: 0;
  z-index: 3;
  padding: 40px 0;
  background-color: #fff;
`;
export default Favourite;
