import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
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
import Plant from "./Schema/AddPlant/Plant";
import PrivateRoute from './components/PrivateRoute';




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

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
}

function App() {
  return (
    <Router>
      <div className="App">
        <StyledBody className="App">
          <Switch>
          <PrivateRoute path='/addsuccess' component={AddSuccess} />
          <PrivateRoute path='/addPlant' component={AddPlant} />
          <PrivateRoute path='/SignupSuccess' component={SignUpSuccess} />
          <PrivateRoute path='/plantList' component={PlantList} />
          <PrivateRoute path='/editPlant' component={EditPlant} />
          <PrivateRoute path='/editPlantSuccess' component={EditPlantSuccess} />
          <PrivateRoute exact path="/plant" component={ Plant }/>
          <Route path="/logout" />

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
