import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MotocycleProvider from "./context/motocycleContext";
import Home from "./components/Home/Home";
import Motocycle from "./components/Motocycle/Motocycle";
import Motocycles from "./components/Motocycles/Motocycles";
import NewMotocycle from "./components/NewMotocycle/NewMotocycle";

function App() {
  return (
    <div className="App">
      
        <Route exact path="/motocycles">
          <Motocycles />
        </Route>
        <Route exact path="/motocycles/:motocycleId">
          <NewMotocycle />
        </Route>
     
    </div>
  );
}

export default App;
