import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>


    );
  }
}
export default App;

