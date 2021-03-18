import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout"
import * as ReactBootStrap from 'react-bootstrap'


export function Navbar() {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="/">Home</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/signup">Signup</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Motocycle Menu" id="collasible-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="/motocycles">List of Motocycles</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="/motocycles/:motocycleId">Motocycle detail</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="/motocycles/create">Create your Motocycle</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
        <ReactBootStrap.Nav.Link href="#login">Login</ReactBootStrap.Nav.Link>
        <Logout/>
       
        
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>




  )
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

