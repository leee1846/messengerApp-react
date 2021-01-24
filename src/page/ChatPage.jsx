import React, { useEffect } from "react";
import ChatContent from "./../component/chatContent/ChatContent";
import Input from "./../component/input/Input";
import { useSelector } from "react-redux";

const ChatPage = () => {
  const initialChatState = useSelector((state) => state.friendReducer);
  return (
    <div>
      <ChatContent initialChatState={initialChatState} />
      <Input />
    </div>
  );
};

export default ChatPage;
