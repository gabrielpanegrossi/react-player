import React, { useRef, useState } from "react";
import { HeaderContainer, MenuItem, Nav, TopMenu } from "./styled";
import { menuItems } from "../../routes/routes";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { MobileMenu } from "../Assets";
import { Button } from "../Button";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");

    navigate("/login");
  };

  return (
    <HeaderContainer>
      <TopMenu>
        <Link to="/">
          <Logo />
        </Link>
        <Button
          design="tertiary"
          onClick={() => setIsOpen((prevState) => !prevState)}
          onBlur={() => setIsOpen(false)}
        >
          <MobileMenu />
        </Button>
      </TopMenu>
      <Nav isOpen={isOpen}>
        <ul>
          {menuItems.map((route) => {
            if (route.shouldShowInMenu)
              return (
                <MenuItem key={route.label}>
                  <Link to={route.routeInformation.path}>{route.label}</Link>
                </MenuItem>
              );

            return null;
          })}
          {/* <DropdownItem>
          Promoções Dropdown
          <ul>
            {menuItems.map((route) => {
              if (route.shouldShowInMenu)
                return (
                  <MenuItem key={route.label}>
                    <Link to={route.routeInformation.path}>{route.label}</Link>
                  </MenuItem>
                );

              return null;
            })}
          </ul>
        </DropdownItem> */}
          <MenuItem>
            <button onClick={handleLogout}>Logout</button>
          </MenuItem>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};
