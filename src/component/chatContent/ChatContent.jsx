import React from "react";
import * as Styled from "./ChatContent.style";

const ChatContent = ({ message, username, newUsername }) => {
  const isUser = newUsername === username;

  return (
    <>
      <Styled.ContentLine isUser={isUser}>
        <Styled.ContentBox isUser={isUser}>
          <Styled.Content>{message}</Styled.Content>
        </Styled.ContentBox>
        {!isUser ? <Styled.UserName>{username}</Styled.UserName> : null}
      </Styled.ContentLine>
    </>
  );
};

export default ChatContent;
