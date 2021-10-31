import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Checkout from './pages/ProductDetail/Checkout/Checkout';
import RedirectHandler from './pages/Login/components/RedirectHandler';
import SearchItem from './components/Search/SearchItem';
import SelectSize from './pages/ProductDetail/SelectSize/SelectSize';
import MyPage from './pages/MyPage/MyPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <div className="header_fixed" style={{ marginTop: '100px' }}>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/my-page" component={MyPage} />
            <Route
              exact
              path="/product-detail/:path"
              component={ProductDetail}
            />
            <Route exact path="/product-list" component={ProductList} />
            <Route
              exact
              path="/product-list/search=/:keyword"
              component={ProductList}
            />

            <Route
              exact
              path="/:id/select-size/:productId"
              component={SelectSize}
            />
            <Route
              exact
              path="/:id/checkout/:productId/:size"
              component={Checkout}
            />
            <Route
              exapt
              path="/oauth/callback/kakao"
              component={RedirectHandler}
            />
            <Route exact path="/search" component={SearchItem} />
          </div>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
