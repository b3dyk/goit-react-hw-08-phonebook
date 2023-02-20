import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  width: 796px;
  height: 596px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  object-position: -2px -2px;
`;

export const Text = styled.h3`
  margin: 0;
  color: #020332;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: var(--color-btn-main);
  border: 1px solid var(--color-btn-main);
  border-radius: 6px;
  padding: 16px;
  background-color: #fff;

  transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: var(--color-btn-main);
    color: #fff;
  }

  :active {
    transform: scale(0.97);
  }
`;
