import styled from "styled-components";

export const RadioList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0 0;
  gap: 12px;
`;

export const RadioItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  h3 {
    font-size: 16px;
  }
`;
