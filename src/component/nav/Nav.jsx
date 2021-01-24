import React, { useState } from "react";
import * as Styled from "./Nav.style";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";

const Nav = () => {
  const [friend, setFriend] = useState([
    {
      id: 1,
      to: "/",
      icon: SupervisorAccountIcon,
      clicked: true,
    },
    {
      id: 2,
      to: "/chat",
      icon: ChatIcon,
      clicked: false,
    },
  ]);

  const onClick = (e) => {
    setFriend((friend) =>
      friend.map((item) => {
        return item.id === Number(e.target.textContent)
          ? { ...item, clicked: true }
          : { ...item, clicked: false };
      })
    );
  };

  const navList = friend.map((item) => (
    <Styled.LinkStyle to={item.to} onClick={onClick} clicked={item.clicked}>
      {item.id}
      <Styled.Icon icon={item.icon.icon} />
    </Styled.LinkStyle>
  ));

  return <Styled.NavContainer>{navList}</Styled.NavContainer>;
};

export default Nav;
