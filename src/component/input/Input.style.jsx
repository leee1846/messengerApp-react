import Styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

export const InputContainer = Styled.form`
  width:100%;
  background-color:#cacaca;
  position:absolute;
  bottom:0;
  padding:40px 150px;
  display:flex;
`;

export const Input = Styled.input`
  flex:1;
  margin-right:30px;
  border:none;
  outline:none;
  background-color:transparent;
  border-bottom:1px solid #ffffff;
  font-size:22px;
  color:#1a1a1a;
`;

export const Send = Styled(SendIcon)`
  &&{
    color:#ffffff;
    transition:.1s linear;
    cursor:pointer;
    transform:scale(1.6);
  }
  &:hover {
    color:dodgerblue;
  }
`;
