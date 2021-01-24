import Styled, { css } from "styled-components";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";

export const NavContainer = Styled.div`
  display:flex;
  border-bottom:2px solid #f0f0f0;
`;

const iconStyle = css`
  color: #cacaca;
  transform: scale(2);
  && {
    transition: 0.1s linear;
  }
`;

export const FriendsIcon = Styled(SupervisorAccountIcon)`
  ${iconStyle}
  color:${({ focus }) => focus && `dodgerblue`};
`;

export const ChattingIcon = Styled(ChatIcon)`
  ${iconStyle}
  color:${({ focus }) => focus && `dodgerblue`};
`;

export const LinkStyle = Styled(Link)`
  flex:1;
  text-align:center;
  padding:20px 0;
  border-right:2px solid #f0f0f0;

  &:hover ${ChattingIcon} {
    color:skyblue;
  }
  &:hover ${FriendsIcon} {
    color:skyblue;
  }
`;
