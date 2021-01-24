import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./Input.style";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/reducer";
import face from "../../image/face.jpg";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");

  let newId = useRef(4);

  useEffect(() => setUserName(prompt("이름을 입력해주세요")), []);

  const onSubmit = (e) => {
    e.preventDefault();
    const newContent = {
      id: newId.current,
      userName: userName,
      message: input,
    };
    dispatch(sendMessage({ newContent }));

    newId.current += 1;
    setInput("");
    console.log(newContent);
  };

  return (
    <Styled.InputContainer onSubmit={onSubmit}>
      <Styled.Input
        type='text'
        placeholder='내용을 입력하세요'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Styled.Send onClick={onSubmit} />
    </Styled.InputContainer>
  );
};

export default Input;
