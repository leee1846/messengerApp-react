import Styled from "styled-components";

export const ChatContainer = Styled.div`
  display:flex;
  flex-direction:column;
  padding-top:10px;
`;

export const ContentLine = Styled.div`
  margin:10px 15px 0 10px;
  display:flex;
  /* justify-content:flex-end; */
`;

export const ContentBox = Styled.div`
  background-color:#ebebeb;
  width:fit-content;
  padding:20px;
  border-radius:10px;
  max-width:55%;
`;

export const Content = Styled.p`
  font-size:20px;
`;
