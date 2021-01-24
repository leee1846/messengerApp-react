import Styled, { css } from "styled-components";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";

export const NavContainer = Styled.div`
  display:flex;
`;

export const Icon = Styled(ChatIcon)`
  color: #cacaca;
  transform: scale(2);
  && {
    transition: 0.1s linear;
  }
`;

export const LinkStyle = Styled(Link)`
  flex:1;
  text-align:center;
  padding:20px 0;
  border-right:2px solid #f0f0f0;
  color:transparent;
  border-bottom:${({ clicked }) =>
    clicked ? `2px solid dodgerblue` : `2px solid #f0f0f0`} ;

&:hover ${Icon} {
  color:skyblue;
}
`;
