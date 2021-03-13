import React from "react";
import {useLocation,useParams,Redirect} from "react-router-dom";
import AuthForm from "../components/Auth/Sigunp"


function Auth() {
    const location = useLocation();
    console.log("Location", location)
   return <AuthForm btnText="login"/>
}
export default Auth