import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 24px;
`;

export const SideBar = styled.aside`
  min-width: 200px;
  padding: 36px;
  background-color: var(--color-bg-secindary);
  height: 50vh;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  border-radius: 4px;
  overflow: hidden;
  :hover {
    background-color: var(--color-btn-main);
    color: #fff;
  }

  :hover a {
    color: #fff;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: var(--color-text-primary);
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
  padding: 8px 16px;

  &.active {
    background-color: var(--color-btn-main);
    color: #fff;
  }
`;
