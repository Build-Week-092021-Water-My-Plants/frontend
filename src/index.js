import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { reducer } from './reducers/index';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme =
{

  primaryColor: "#284B63",
  secondaryColor: "#D9D9D9",
  accentColor: "#3C6E71",
  black: "#353535",
  white: "FFFFFF",
};

// const store = createStore(reducer, applyMiddleware(thunk, logger));
const store = createStore(applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        
          <App />
        
      </Provider>
    </Router>
  </ThemeProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
