import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  padding: 8px 0;
  height: fit-content;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 1023px) {
    height: 100%;
    max-width: 200px;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;

  > a {
    display: block;
    text-decoration: none;
    width: 100%;
    cursor: pointer;
    color: black;
    font-size: 16px;
  }

  @media (min-width: 1023px) {
    height: fit-content;
    max-width: 200px;
    flex-direction: column;
    justify-content: initial;

    > button {
      display: none;
    }
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  width: 100%;

  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 1023px) {
    position: absolute;
    z-index: 1;
    top: 100%;
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.8s ease;
    overflow: hidden;

    ${({ isOpen }) => (isOpen ? "max-height: 400px;" : "max-height:0px;")}
  }
`;

export const MenuItem = styled.menu`
  width: 100%;
  margin: 0;
  padding: 0;

  &:not(:first-child):hover {
    background-color: rgba(200, 200, 200, 0.1);
  }

  > a {
    text-decoration: none;
  }

  > button {
    background: transparent;
    border: none;
    padding: 0;
  }

  > button,
  > a {
    display: block;
    width: 100%;
    padding: 12px 16px;
    cursor: pointer;
    color: black;
    font-size: 16px;
    text-align: left;
  }

  &:first-child > button,
  &:first-child > a {
    padding: 0 16px 12px;
  }
`;

export const DropdownItem = styled.li`
  position: relative;

  & > ul {
    transition: all 0.5s;
    height: 0;
    padding: 0;
    overflow: hidden;
    top: 100%;
  }

  &:hover {
    & > ul {
      height: fit-content;
      padding: 8px 0 0 0;
    }
  }
`;
