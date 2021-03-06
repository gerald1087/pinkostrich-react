import React, { Component } from "react";
import EditUserPage from "./EditUserPage"
import UsersOrders from "./UsersOrders"
import ViewOrder from "./ViewOrder"
import { Switch, Route, Router } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import PinkOstrich from "./components/layouts/PinkOstrich";
import Products from "./components/layouts/Products";
import SellProduct from "./components/layouts/SellProduct";
import Product from "./components/layouts/Product"
import Profile from "./components/layouts/Profile"
import User from "./User"


import ProtectedRoute from "./components/auth/ProtectedRoute";
import history from './components/layouts/history';
// import LinkButton from '/components/LinkButton'
// import PropTypes from 'prop-types'

class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedIn: "Not_Logged_In",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogin(data) {
    this.setState({
      loggedIn: "Logged_In",
      user: data
    })
  }

  handleLogout() {
    this.setState({
      loggedIn: "Not_Logged_In",
      user: {}
    })
    this.props.history.push('/')
  }

  render() {
    return (

      <div className="App">
   <Router history={history}>        
   <Switch>
          <Route 
          exact 
          path={"/"} 
          render={props => (
          <Home {...props} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />)} />

          <Route exact path="/sellproduct" component={SellProduct} />
          <Route exact path="/products" render={props => (<Products {...props} user={this.state.user} loggedIn={this.state.loggedIn}/>)} />
          <Route exact path="/products/:id" render={props => (<Product {...props} user={this.state.user} loggedIn={this.state.loggedIn}/>)} />
          <Route exact path="/profile" render={props => (<Profile {...props} user={this.state.user} loggedIn={this.state.loggedIn}/>)} />
          <Route exact path="/vieworder" render={props => (<Profile {...props} user={this.state.user} loggedIn={this.state.loggedIn} order_id={this.state.order_id}/>)} />
      
          <Route exact path="/edituserpage" component={EditUserPage} />
          <Route exact path="/usersorders" component={UsersOrders} />
          <Route exact path="/vieworder" component={ViewOrder} />    
      <Route 
          exact 
          path={"/pinkostrich"} 
          render={props => (
          <PinkOstrich {...props} user={this.state.user} loggedIn={this.state.loggedIn} />
          )} />
        </Switch>
        </Router>
      </div>
    );
  }
}
export default App;