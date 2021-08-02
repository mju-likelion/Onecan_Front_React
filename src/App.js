import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import UploadRecipePage from './components/views/UploadRecipePage/UploadRecipePage';
import UploadBarterPage from './components/views/UploadBarterPage/UploadBarterPage';
import CartPage from './components/views/CartPage/CartPage';
import DetailProductPage from "./components/views/DetailProductPage/DetailProductPage";
import ListRecipePage from './components/views/ListRecipePage/ListRecipePage';
import ListObjPage from './components/views/ListObjPage/ListObjMainPage';
import ListBarterPage from './components/views/ListBarterPage/ListBarterPage';


function App() {
  return (
    <Router>
    <div>
      {}
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/uploadrecipe" component={Auth(UploadRecipePage, true)} />
        <Route exact path="/uploadbarter" component={Auth(UploadBarterPage, true)} />
        <Route exact path="/cart" component={Auth(CartPage, true)} /> 
        <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} /> 
        <Route exact path="/listrecipe" component={Auth(ListRecipePage, null)} /> 
        <Route exact path="/listobj" component={Auth(ListObjPage, null)} /> 
        <Route exact path="/listbarter" component={Auth(ListBarterPage, null)} /> 

      </Switch>
    </div>
    </ Router>
  );
}

export default App;
