import React from "react";
import { FormContainer } from "./styled";

export const Form: React.FC<{
  children: React.ReactNode;
  onSubmitFunction: () => void;
}> = ({ children, onSubmitFunction }) => (
  <FormContainer onSubmit={onSubmitFunction}>{children}</FormContainer>
);
