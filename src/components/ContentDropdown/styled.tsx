import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 4px 8px;
  transition: all 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const DropdownHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  svg {
    transition: all 0.5s;
    ${({ isOpen }) => (!isOpen ? "" : "transform: rotate(-180deg);")}
  }
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  transition: all 0.5s;
  padding: 0;

  ${({ isOpen }) =>
    !isOpen
      ? "height: 0; overflow: hidden; pointer-events: none;"
      : "height: fit-content;   padding: 8px 0;"}
`;
