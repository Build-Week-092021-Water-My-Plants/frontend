import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./utils/Private.js";
import LoginPage from "./components/pages/Login/LoginContainer";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">

      </header>
    </div>
    </Router>
  );
}

export default App;
