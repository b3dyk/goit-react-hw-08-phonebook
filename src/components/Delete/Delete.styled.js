import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  min-width: 100px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: '#1976d2',
  },
};

export const theme = {
  main: '#ef5350',
};
