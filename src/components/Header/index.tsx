import React from "react";
import { DropdownItem, HeaderContainer, MenuItem, Nav } from "./styled";
import { menuItems } from "../../routes/routes";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <HeaderContainer>
    <Nav>
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
        <DropdownItem>
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
        </DropdownItem>
        <MenuItem>
          <button>Logout</button>
        </MenuItem>
      </ul>
    </Nav>
  </HeaderContainer>
);
