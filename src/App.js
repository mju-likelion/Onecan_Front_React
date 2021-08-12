import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import UploadRecipePage from './components/views/UploadRecipePage/UploadRecipePage';
import UploadBarterPage from './components/views/UploadBarterPage/UploadBarterPage';
import CartPage from './components/views/CartPage/CartPage';
import DetailProductPage from "./components/views/DetailProductPage/DetailProductPage";
import TermsPage from "./components/views/TermsPage/TermsPage";
import InfoPage from "./components/views/InfoPage/InfoPage";
import ListRecipePage from './components/views/ListRecipePage/ListRecipePage';
import ListObjPage from './components/views/ListObjPage/ListObjPage';
import ListBarterPage from './components/views/ListBarterPage/ListBarterPage';
import ListSearchPage from './components/views/ListSearchPage/ListSearchPage';
import MyPage from './components/views/MyPage/MyPage';
import Join from './components/views/Join/Join';

import DetailRecipePage from './components/views/DetailRecipePage/DetailRecipePage';
import DetailBarterPage from './components/views/DetailBarterPage/DetailBarterPage';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/uploadrecipe" component={Auth(UploadRecipePage, true)} />
        <Route exact path="/uploadbarter" component={Auth(UploadBarterPage, true)} />
        <Route exact path="/cart" component={Auth(CartPage, true)} /> 
        <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
        <Route exact path="/listobj/:listId" component={Auth(ListObjPage, null)} /> 
        <Route exact path="/listrecipe" component={Auth(ListRecipePage, null)} /> 
        <Route exact path="/listbarter" component={Auth(ListBarterPage, null)} /> 
        <Route exact path="/listsearch" component={Auth(ListSearchPage, null)} />
        <Route exact path="/detailrecipe" component={Auth(DetailRecipePage, null)} />
        <Route exact path="/detailbarter" component={Auth(DetailBarterPage, null)} />
        <Route exact path="/terms" component={Auth(TermsPage, true)} />
        <Route exact path="/information" component={Auth(InfoPage, true)} />
        <Route exact path="/mypage" component={Auth(MyPage, true)} />
        <Route exact path="/join" component={Auth(Join, true)} />

      </Switch>
    </div>
    </ Router>
  );
}

export default App;
