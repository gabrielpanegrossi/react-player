import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: fit-content;

  @media (max-width: 1023px) {
    padding: 8px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 1024px) {
    max-width: 200px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Nav = styled.nav`
  width: 100%;

  > ul {
    display: flex;
    width: 100%;
    gap: 12px;

    @media (min-width: 1024px) {
      flex-direction: column;
      padding: 16px;
    }
  }
`;

export const MenuItem = styled.menu`
  width: fit-content;
  margin: 0;
  padding: 0;

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
    cursor: pointer;
    color: black;
    font-size: 16px;
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
