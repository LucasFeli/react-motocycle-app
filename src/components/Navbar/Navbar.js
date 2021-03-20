import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";
import * as ReactBootStrap from "react-bootstrap";

export function Navbar() {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="/">Home</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link>
            <Link to="/signup">Signup</Link>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link>
            <Link to="/login">Login</Link>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown
            title="Motocycle Menu"
            id="collasible-nav-dropdown"
          >
            <ReactBootStrap.NavDropdown.Item>
              <Link to="/motocycles">List of Motocycles</Link>
            </ReactBootStrap.NavDropdown.Item>
             <ReactBootStrap.NavDropdown.Item>
              <Link to="/motocycles/create">Create your Motocycle</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link>
            <Link to="/login"></Link>
          </ReactBootStrap.Nav.Link>
          <Logout />
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}
/*

<nav>
<div>
   <Link to="/">Go home</Link>
   <Link to="/login">Login</Link>
   <Link to="/signup">signup</Link>
   <Link to="/motocycles">List of Motocycles</Link>
   <Link to="/motocycles/create">Create your Motocycle</Link>
   <Link to="/motocycles/update">Update</Link>
   <Link to="/motocycles/:motocycleId">motocycle detail</Link>

  
   <Logout/>
</div>
</nav>
);

*/
