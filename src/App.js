import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'
import UploadRecipePage from './components/views/UploadRecipePage/UploadRecipePage'

function App() {
  return (
    <Router>
    <div>
      {}
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/uploadRecipe" component={Auth(UploadRecipePage, true)} /> 
      </Switch>
    </div>
    </ Router>
  );
}

export default App;
