import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 6px;

  :hover {
    background-color: var(--color-bg-secindary);
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-right: 8px;
  max-width: 500px;
`;

export const BtnThumb = styled.div`
  display: flex;
  gap: 4px;
`;
