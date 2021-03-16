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
          <Link to="/motocycles">List of Motocycles</Link>
          <Link to="/motocycles/create">Form of Motocycles</Link>
          <Link to="/motocycles/update">Update</Link>
          <Link to="/motocycles/:motocycleId">motocycle detail</Link>

         
          <Logout/>
      </div>
      </nav>
  );
}




