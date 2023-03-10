import React from "react";
import { InputContainer } from "./styled";
import { InputProps } from "./types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...InputProps }, ref) => (
    <InputContainer errorMessage={errorMessage}>
      <label htmlFor={InputProps?.name}>{label}</label>
      <input {...InputProps} ref={ref} />
    </InputContainer>
  )
);
