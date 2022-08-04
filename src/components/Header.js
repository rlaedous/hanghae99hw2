import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>나의 투두 리스트</h1>
      <p>리액트</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #003458;
  height: 100px;
  padding: 0 20px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
`;

export default Header;