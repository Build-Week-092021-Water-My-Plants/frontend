import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./helpers/PrivateRoute";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MeetOurTeam from "./components/MeetOurTeam";
import AddPlant from "./Schema/AddPlant/AddPlant";
import AddSuccess from './Schema/AddPlant/AddSuccess';
import SignUpSuccess from "./components/SignupSuccess";
import PlantList from "./components/PlantList";
import EditPlant from "./Schema/EditPlant/EditPlant";
import EditPlantSuccess from "./Schema/EditPlant/EditPlantSuccess";
import './App.css';




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
          <Route path='/addsuccess' component={AddSuccess} />
          <Route path='/addPlant' component={AddPlant} />
          <PrivateRoute path='/SignupSuccess' component={SignUpSuccess} />
            <Route path='/plantList' component={PlantList} />
            {/* <PrivateRoute path='/EditPlantSuccess' component={EditPlantSuccess} />
            <PrivateRoute path='/editPlant' component={EditPlant} /> */}
          <Route path='/editPlant' component={EditPlant} />
          <Route path='/editPlantSuccess' component={EditPlantSuccess} />
            <PrivateRoute exact path="/plants"/>

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
