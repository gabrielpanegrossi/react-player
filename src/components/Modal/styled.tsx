import styled from "styled-components";

export const ModalContainer = styled.section<{ isIndex: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  position: absolute;
  bottom: 4px;
  right: 0;

  ${({ isIndex }) =>
    !isIndex ? "width:320px; height:180px; " : "width:100%; height:100%;"}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: right;

  > a {
    padding: 0px 8px;
    background: rgba(0, 0, 0, 0.3);
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
