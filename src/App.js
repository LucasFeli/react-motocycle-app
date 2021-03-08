import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Motocycle from "./components/Motocycle/Motocycle"
import Motocycles from "./components/Motocycles/Motocycles"
import NewMotocycle from "./components/NewMotocycle/NewMotocycle"


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
