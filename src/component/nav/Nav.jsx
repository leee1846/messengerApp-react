import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Nav.style";

const Nav = () => {
  return (
    <Styled.NavContainer>
      <Styled.LinkStyle to='/'>
        <Styled.FriendsIcon />
      </Styled.LinkStyle>
      <Styled.LinkStyle to='/chat'>
        <Styled.ChattingIcon />
      </Styled.LinkStyle>
    </Styled.NavContainer>
  );
};

export default Nav;
