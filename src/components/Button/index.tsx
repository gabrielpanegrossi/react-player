import React from "react";
import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  design,
  children,
  ...buttonProps
}) => (
  <StyledButton design={design} {...buttonProps}>
    {children}
  </StyledButton>
);
