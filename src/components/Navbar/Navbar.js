import React from "react";
import { Link } from "react-router-dom";
import {Logout} from "../Auth/Logout"


export function Navbar() {
  return (
    <nav>
       <div>
          <Link to="/">Go home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">signup</Link>
         
          <Logout/>
      </div>
      </nav>
  );
}




