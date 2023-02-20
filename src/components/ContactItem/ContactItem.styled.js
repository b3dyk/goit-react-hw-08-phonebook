import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :hover {
    background-color: var(--color-bg-secindary);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NameText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin: 0;
  max-width: 400px;
`;
export const NumberText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin: 0;
  max-width: 500px;
  color: var(--color-text-secondary);
`;

export const BtnThumb = styled.div`
  display: flex;
  gap: 4px;
`;
