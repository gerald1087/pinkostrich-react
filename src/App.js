import React, { Component } from "react";
import { Route } from "react-router-dom";
// import './App.css';
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import User from "./User"
import EditUserPage from "./EditUserPage"
import UsersOrders from "./UsersOrders"
import ViewOrder from "./ViewOrder"
import LandingPage from "./components/layouts/LandingPage";
import Products from "./components/layouts/Products";
import SellProduct from "./components/layouts/SellProduct";
import Product from "./components/layouts/Product"



class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/edituserpage" component={EditUserPage} />
          <Route exact path="/usersorders" component={UsersOrders} />
          <Route exact path="/vieworder" component={ViewOrder} />
          <Route exact path="/sellproduct" component={SellProduct} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/landing" component={LandingPage} />
        </div>


    );
  }
}
export default App;

