import React from "react";
import * as Styled from "./Input.style";

const Input = () => {
  return (
    <Styled.InputContainer>
      <Styled.Input type='text' placeholder='내용을 입력하세요' />
      <Styled.Send />
    </Styled.InputContainer>
  );
};

export default Input;
