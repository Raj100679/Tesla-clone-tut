import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model-S</a>

        <a href="#">Model-3</a>

        <a href="#">Model-X</a>

        <a href="#">Model-Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
    </Container>
  );
}
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100vw;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }
`;

export default Header;
