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




class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user" component={User} />
          <Route exact path="/edituserpage" component={EditUserPage} />
          <Route exact path="/usersorders" component={UsersOrders} />
        </div>


    );
  }
}
export default App;

