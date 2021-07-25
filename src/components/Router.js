import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../routes/Auth/Login";
import RegisterPage from './views/RegisterPage/RegisterPage';


export default () => (
  <Router>
    {/* 임의로 첫 화면 로그인 화면으로 설정 */}
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={RegisterPage} />
  </Router>
);