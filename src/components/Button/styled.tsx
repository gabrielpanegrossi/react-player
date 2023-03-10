import styled from "styled-components";
import { ButtonProps, ButtonDesings } from "./types";

const Designs = {
  primary: ``,
  secondary: ``,
  tertiary: `
    border:none; 
    background:transparent;
    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  transition: all 0.2s;
  border-radius: 4px;
  cursor: pointer;
  ${({ design }) => Designs[design]}
`;
