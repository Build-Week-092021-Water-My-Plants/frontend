import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./helpers/PrivateRoute";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MeetOurTeam from "./components/MeetOurTeam";
import AddPlant from "./Schema/AddPlant/AddPlant";
import './App.css';
import AddSuccess from "./Schema/AddPlant/AddSuccess";
import SignUpSuccess from "./components/SignupSuccess";
import PlantList from "./components/PlantList";


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
          <PrivateRoute path='/SignupSuccess' component={SignUpSuccess} />
            <PrivateRoute path='/AddSuccess' component={AddSuccess} />
            <PrivateRoute path='/addPlant' component={AddPlant} />
            <Route path='/plantList' component={PlantList} />
            {/* <PrivateRoute path='/EditPlantSuccess' component={EditPlantSuccess} />
            <PrivateRoute path='/editPlant' component={EditPlant} /> */}

            <Route path="/login">
              <LoginForm />
            </Route>

            <Route path="/signup">
              <SignupForm />
            </Route>

            <Route path="/meet-our-team">
              <MeetOurTeam />
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
