import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 0;
`;

export const HeaderNav = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 11;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  min-height: 64px;
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 20px;
  color: #fff;

  background-color: #0d0b0c;
  p {
    font-size: 30px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  &.active {
    color: #88f2f2;
  }
`;
