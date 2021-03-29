import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import MotocycleProvider from "./context/motocycleContext";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"

ReactDOM.render(
  
    <Router>
      <MotocycleProvider>
      <AuthProvider>
        <ErrorBoundary>
          <App />
          </ErrorBoundary>
         </AuthProvider>
      </MotocycleProvider>
    </Router>,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
