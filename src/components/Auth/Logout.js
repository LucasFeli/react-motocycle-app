import React from "react";
import { AuthContext } from "../../context/AuthContext";


 const  Logout = () =>{
  const authLogout = React.useContext(AuthContext);
  return (
    <button className="btn btn-danger" onClick={authLogout.handleLogout}>
      Logout
    </button>
  );
}


export default Logout