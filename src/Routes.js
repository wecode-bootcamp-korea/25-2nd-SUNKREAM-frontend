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
            <Route exact path="/product-detail" component={ProductDetail} />
            <Route exact path="/product-list" component={ProductList} />
            <Route exact path="/product-list/checkout" component={Checkout} />
            <Route
              exapt
              path="/oauth/callback/kakao"
              component={RedirectHandler}
            />
          </div>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
