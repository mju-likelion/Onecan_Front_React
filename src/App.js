import React from 'react';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'
function App() {
  return (
    <Router>
    <div>
      {}
      <switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/Login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </switch>
    </div>
    </ Router>
  );
}

export default App;
