import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;

  :hover {
    background-color: var(--color-accent);
    color: #fff;
  }

  &.active {
    background-color: var(--color-accent);
    color: #fff;
  }
`;
