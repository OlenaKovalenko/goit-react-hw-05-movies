import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  background-color: #F4F4F4;
  border-bottom: 3px solid grey;   
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const NavList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;