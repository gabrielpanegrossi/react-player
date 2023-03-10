import styled from "styled-components";

export const PlayerControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  width: fit-content;

  svg {
    margin-right: 12px;
  }
`;
