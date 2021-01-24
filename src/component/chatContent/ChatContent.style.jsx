import Styled from "styled-components";

export const ContentLine = Styled.div`
  margin:10px 15px 0 10px;
  display:flex;
  align-items:flex-end;
  justify-content:${({ isUser }) => isUser && "flex-end"};
`;

export const ContentBox = Styled.div`
  background-color:${({ isUser }) => (!isUser ? "#ebebeb" : "dodgerblue")};
  width:fit-content;
  padding:20px;
  border-radius:10px;
  max-width:55%;
  margin-right:5px;
  color:${({ isUser }) => isUser && "white"};
`;

export const UserName = Styled.p`
  color:#b6b6b6;
`;

export const Content = Styled.p`
  font-size:20px;
`;
