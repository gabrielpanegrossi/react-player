import styled from "styled-components";
import { inputErrorMessage } from "./types";

export const InputContainer = styled.div<{ errorMessage: inputErrorMessage }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 400px;

  > input {
    height: 30px;

    ${({ errorMessage }) => (errorMessage ? "border:1px solid red;" : "")}
  }
`;
