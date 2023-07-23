import styled from "styled-components";
import { ButtonProps } from "./types";

const Designs = {
  primary: `
    color:white;
    border:1px solid rgba(253, 1, 0, 1);; 
    background:rgba(253, 1, 0, 1);
    &:hover{
      background-color: rgba(220, 1, 0, 1);
      border:1px solid rgba(220, 1, 0, 1);; 
    }
  `,
  secondary: `
    border:1px solid rgba(0,0,0,0.1);; 
    background:transparent;
    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  `,
  tertiary: `
    border:none; 
    background:transparent;
    padding: 0;
    &:hover{
      background-color: rgba(0,0,0,0.1);
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 4px 8px;
  transition: all 0.2s;
  border-radius: 4px;
  cursor: pointer;
  ${({ design }) => Designs[design]}
`;
