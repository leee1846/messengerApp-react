import React, { useState } from "react";
import * as Styled from "./Nav.style";

const Nav = () => {
  const [friend, setFriend] = useState(true);
  const [chat, setChat] = useState(false);

  const onClick = () => {
    setFriend((friend) => !friend);
    setChat((chat) => !chat);
  };

  return (
    <Styled.NavContainer>
      <Styled.LinkStyle to='/' onClick={onClick}>
        <Styled.FriendsIcon focus={friend} />
      </Styled.LinkStyle>
      <Styled.LinkStyle to='/chat' onClick={onClick}>
        <Styled.ChattingIcon focus={chat} />
      </Styled.LinkStyle>
    </Styled.NavContainer>
  );
};

export default Nav;
