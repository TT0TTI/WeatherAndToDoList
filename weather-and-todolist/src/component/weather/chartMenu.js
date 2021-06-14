import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const ChartMenu = ({ toggle }) => {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          onClick={() => {
            toggle("temp");
          }}
        >
          temp
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => {
            toggle("pop");
          }}
        >
          pop
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default ChartMenu;
