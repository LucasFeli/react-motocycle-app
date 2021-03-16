import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import HomeImages from "./components/Home/HomeImages"
import Motocycle from "./components/Motocycle/Motocycle";
import Motocycles from "./components/Motocycles/Motocycles";
import NewMotocycle from "./components/NewMotocycle/NewMotocycle";
import UpdateMotocycle from "./components/UpdateMotocycle/UpdateMotocycle";
import MotocycleDetail from "./components/MotocycleDetail/MotocycleDetail";
import AnonRoute from "./components/Routes/AnonRoute"
import PrivateRoute from "./components/Routes/PrivateRoute"
import {Login} from "./components/Auth/Login"
import {Signup} from "./components/Auth/Sigunp"
import {Navbar}from "./components/Navbar/Navbar"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/proof">
        <HomeImages />
      </Route>
      <Route exact path="/motocycles">
       <Motocycles />
      </Route>
      <Route exact path="/motocycles/create">
        <NewMotocycle />
      </Route>
      <Route exact path="/motocycles/update">
        <UpdateMotocycle />
      </Route>
      <Route exact path="/motocycles/:motocycleId">
        <MotocycleDetail />
      </Route>
      <AnonRoute exact path="/signup">
        <Signup/>
      </AnonRoute>
      <AnonRoute exact path="/login">
        <Login/>
      </AnonRoute>
      </Switch>
    </div>
  );
}

export default App;
