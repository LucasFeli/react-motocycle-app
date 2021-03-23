import React from "react";
import { AuthContext } from "../../context/AuthContext";
import * as ReactBootStrap from "react-bootstrap";


 const  Logout = () =>{
  const authLogout = React.useContext(AuthContext);
  return (
    <ReactBootStrap.Button variant="danger" onClick={authLogout.handleLogout} >
      Logout
      </ReactBootStrap.Button>
    
  );
}


export default Logout