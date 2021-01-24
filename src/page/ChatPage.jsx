import React, { useState } from "react";
import ChatContent from "./../component/chatContent/ChatContent";
import Input from "./../component/input/Input";
import { useSelector } from "react-redux";
import * as Styled from "./ChatPage.style";

const ChatPage = () => {
  const [newUsername, setUserName] = useState("");
  const [intro, setIntro] = useState("");

  const initialChatState = useSelector((state) => state.chatReducer);
  return (
    <div>
      <Styled.ChatContainer>
        {initialChatState.map((state) => (
          <ChatContent
            newUsername={newUsername}
            setUserName={setUserName}
            message={state.message}
            username={state.username}
          />
        ))}
      </Styled.ChatContainer>
      <Input
        newUsername={newUsername}
        setUserName={setUserName}
        setIntro={setIntro}
        intro={intro}
      />
    </div>
  );
};

export default ChatPage;
