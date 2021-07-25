import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';

// 라우팅
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} /> 
          <Route exact path="/login" component={LoginPage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
