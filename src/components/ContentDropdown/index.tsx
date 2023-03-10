import React, { useState } from "react";
import { ArrowDown } from "../Assets";
import { Button } from "../Button";
import { DropdownContainer, DropdownContent, DropdownHeader } from "./styled";

export const ContentDropdown: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer onMouseLeave={() => setIsOpen(false)}>
      <DropdownHeader isOpen={isOpen} onClick={handleClick}>
        <h4>{title}</h4>
        <ArrowDown />
      </DropdownHeader>
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </DropdownContainer>
  );
};
