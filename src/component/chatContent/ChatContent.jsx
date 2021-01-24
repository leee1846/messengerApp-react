import React from "react";
import * as Styled from "./ChatContent.style";

const ChatContent = ({ initialChatState }) => {
  return (
    <Styled.ChatContainer>
      {initialChatState.map((state) => (
        <Styled.ContentLine>
          <Styled.ContentBox>
            <Styled.Content>{state.message}</Styled.Content>
          </Styled.ContentBox>
        </Styled.ContentLine>
      ))}
    </Styled.ChatContainer>
  );
};

export default ChatContent;
