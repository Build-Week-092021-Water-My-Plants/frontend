import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./helpers/PrivateRoute";
// import LoginPage from "./components/pages/Login/LoginContainer";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Header to be changed</h1>
      </header>
      <nav>
        <h2>Nav to be changed per page</h2>
      </nav>
    </div>
    </Router>
  );
}

export default App;
