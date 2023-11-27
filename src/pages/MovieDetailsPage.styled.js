import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const AddInfo = styled.h5`
    font-size: 24px;
    line-height: 1.1;
    margin: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 18px;

  &.active {
    color: orange;
  }
`;