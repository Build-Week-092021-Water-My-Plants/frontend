import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./helpers/PrivateRoute";
// import LoginPage from "./components/pages/Login/LoginContainer";
import './App.css';
import Home from "./components/Home";


const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  header {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  header nav a {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  header nav a:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <StyledBody className="App">
          <Switch>
            <PrivateRoute exact path="/plants"/>
            <Route path="/login">
              {/* <LoginPage /> */}
            </Route>

            <Route path="/signup">
              {/* <Signup /> */}
            </Route>

            <Route path="/meet-team">
              {/* <Team /> */}
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </StyledBody>
      </div>
    </Router>
  );
}

export default App;
